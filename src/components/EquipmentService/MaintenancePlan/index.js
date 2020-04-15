import React from 'react';
import './index.less';
import { Input, Button, Table, Modal, Form, Select, Row, Col, Radio, InputNumber, DatePicker, message } from 'antd';
import { columns, PlanStatus, PlanLevel, PlanGroupId, PlanMode, PlanCycleType } from './constant';
import ajax from '../../../utils/ajax';
import moment from 'moment';

const { Option } = Select;
const dateFormat = 'YYYY-MM-DD';

/**
 * 保养计划
 */
class MaintenancePlanMain extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      detailVisible: false,
      title: '',
      planItem: {},
      planList: [],
      page: {
        current: 1,
        pageSize: 10,
        total: 0,
      },
      queryMap: {
        planType: 1,
      },
      planDetail: {},
    };
  }

  componentWillMount() {
    this.planListPage();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.deviceItem.id !== this.props.deviceItem.id) {
      this.props.changeState('maintenancePlan', {});
      this.planListPage();
    }
  }

  // 设备保养计划
  planListPage = async () => {
    const { page, queryMap } = this.state;
    const { deviceItem } = this.props;
    const queryMaps = Object.assign({}, queryMap, {
      planDevId: parseInt(deviceItem.id),
    });
    const detail = {
      pageNum: page.current,
      pageSize: page.pageSize,
      queryMap: queryMaps,
    };
    const res = await ajax.planListPage(detail);
    if (res.code === '10001') {
      this.setState({
        planList: res && res.data && res.data.list,
        page: {
          current: page.current,
          pageSize: page.pageSize,
          total: parseInt(res.data.total),
        },
      });
    }
  };

  showModal = (type, planItem = {}) => {
    let title = '修改保养计划';
    if (type === 'add') {
      title = '新增保养计划';
    }
    this.setState({
      visible: true,
      title,
      planItem,
    });
  };

  handleOk = () => {
    const { form, deviceItem } = this.props;
    const { id } = this.state.planItem;
    const { queryMap } = this.state;
    form.validateFieldsAndScroll((error, values) => {
      if (!error) {
        this.setState({
          visible: false,
          title: '',
        });
        if (!id) {
          // 新增
          const detail = Object.assign({}, values, {
            planDevId: deviceItem.id,
            planType: queryMap.planType,
            planStartDate: moment(values.planStartDate).format(dateFormat),
            planEndDate: moment(values.planEndDate).format(dateFormat),
          });
          this.planSave(detail);
        } else {
          // 修改
          const detail = Object.assign({}, values, {
            id,
            planType: queryMap.planType,
            planStartDate: moment(values.planStartDate).format(dateFormat),
            planEndDate: moment(values.planEndDate).format(dateFormat),
          });
          this.planUpdate(detail);
        }
      }
    });
  };

  // 添加保养计划
  planSave = async detail => {
    const res = await ajax.planSave(detail);
    if (res.code === '10001') {
      this.planListPage();
    }
  };

  // 更新保养计划
  planUpdate = async detail => {
    const res = await ajax.planUpdate(detail);
    if (res.code === '10001') {
      this.planListPage();
    }
  };

  // 删除保养计划
  planDel = async id => {
    const detail = {
      id,
      isdel: 1,
    };
    const res = await ajax.planDel(detail);
    if (res.code === '10001') {
      message.success('删除成功');
      this.planListPage();
    }
  };

  // 计划详情
  planDetail = async id => {
    const res = await ajax.planDetail(id);
    if (res.code === '10001') {
      this.setState({
        detailVisible: true,
        planDetail: res.data,
      });
    }
  };

  planDetailCancel = e => {
    this.setState({
      detailVisible: false,
    });
  };

  pageChange = pagination => {
    this.setState(
      {
        page: pagination,
      },
      () => {
        this.planListPage();
      },
    );
  };

  handleCancel = e => {
    this.setState({
      visible: false,
      title: '',
    });
  };

  render() {
    const { deviceItem } = this.props;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        this.props.changeState('maintenancePlan', selectedRows[0]);
      },
      selectedRowKeys: [this.props && this.props.planItem && this.props.planItem.id],
      type: 'radio',
    };
    const inputDisabled = true;
    const { planList, planItem, page, planDetail } = this.state;
    const {
      planName,
      planCode,
      planGroupId,
      planLevel,
      planMode,
      planPosition,
      planStatus,
      planStandard,
      planCycleNum,
      planCycleType,
      planStartDate,
      planEndDate,
      planDesc,
      id,
    } = planItem;
    return (
      <div className="maintenance-plan">
        <div>
          <div className="title">
            {/* <Input className="title-input" placeholder="用户名字/显示名字" />
            <Button className="title-query" type="ghost">
              {'查询'}
            </Button> */}
            <Button
              className="title-add"
              type="primary"
              onClick={() => this.showModal('add', {})}
              disabled={!deviceItem.id}>
              {'新增'}
            </Button>
            {/* <Button className="title-delete" type="primary">
              {'刷新'}
            </Button> */}
          </div>
          <Table
            columns={columns(this.showModal, this.planDetail, this.planDel)}
            rowSelection={rowSelection}
            dataSource={planList}
            pagination={page}
            onChange={this.pageChange}
            rowKey="id"
            scroll={{
              x: 2600,
            }}
          />
        </div>
        {this.state.visible && (
          <Modal
            title={this.state.title}
            visible={this.state.visible}
            onOk={this.handleOk}
            maskClosable={false}
            onCancel={this.handleCancel}
            width={'798px'}>
            <Form>
              <Row>
                <Col span={12}>
                  <Form.Item label="计划名字" {...formItemLayout}>
                    {getFieldDecorator('planName', {
                      rules: [
                        {
                          required: true,
                          message: '请输入计划名字',
                        },
                      ],
                      initialValue: planName,
                    })(<Input placeholder="请输入计划名字" />)}
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="计划编号" {...formItemLayout}>
                    {getFieldDecorator('planCode', {
                      initialValue: planCode,
                    })(<Input placeholder="自动生成计划编号" disabled={inputDisabled} />)}
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="计划等级" {...formItemLayout}>
                    {getFieldDecorator('planLevel', {
                      rules: [
                        {
                          required: true,
                          message: '请选择计划等级',
                        },
                      ],
                      initialValue: planLevel,
                    })(
                      <Select placeholder="请选择计划等级">
                        <Option value={0}>{'日常保养'}</Option>
                      </Select>,
                    )}
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="计划组" {...formItemLayout}>
                    {getFieldDecorator('planGroupId', {
                      rules: [
                        {
                          required: true,
                          message: '请选择计划组',
                        },
                      ],
                      initialValue: planGroupId,
                    })(
                      <Select placeholder="请选择计划组">
                        <Option value={1}>{'计划组1'}</Option>
                      </Select>,
                    )}
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="部位" {...formItemLayout}>
                    {getFieldDecorator('planPosition', {
                      rules: [
                        {
                          required: true,
                          message: '请输入部位',
                        },
                      ],
                      initialValue: planPosition,
                    })(<Input placeholder="请输入部位" />)}
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="标准" {...formItemLayout}>
                    {getFieldDecorator('planStandard', {
                      rules: [
                        {
                          required: true,
                          message: '请选择标准',
                        },
                      ],
                      initialValue: planStandard,
                    })(
                      <Select placeholder="请选择标准">
                        <Option value={'正常标准'}>{'正常标准'}</Option>
                      </Select>,
                    )}
                  </Form.Item>
                </Col>

                <Col span={12} style={{ margin: '-1px 0' }}>
                  <Form.Item label="循环方式" {...formItemLayout}>
                    {getFieldDecorator('planMode', {
                      rules: [
                        {
                          required: true,
                          message: '请选择循环方式',
                        },
                      ],
                      initialValue: planMode,
                    })(
                      <Radio.Group>
                        <Radio value={0}>单次</Radio>
                        <Radio value={1}>多次</Radio>
                      </Radio.Group>,
                    )}
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Row>
                    <Col span={14}>
                      <Form.Item label="保养周期" labelCol={{ span: 10 }} wrapperCol={{ span: 12 }}>
                        {getFieldDecorator('planCycleNum', {
                          rules: [
                            {
                              required: true,
                              message: '请输入周期时间',
                            },
                          ],
                          initialValue: planCycleNum,
                        })(<InputNumber placeholder=" " />)}
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item wrapperCol={{ span: 24 }}>
                        {getFieldDecorator('planCycleType', {
                          rules: [
                            {
                              required: true,
                              message: '请选择周期类型',
                            },
                          ],
                          initialValue: planCycleType,
                        })(
                          <Select placeholder="请选择周期类型">
                            <Option value={1}>{'天'}</Option>
                            <Option value={2}>{'周'}</Option>
                            <Option value={3}>{'月'}</Option>
                            <Option value={4}>{'年'}</Option>
                          </Select>,
                        )}
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>

                <Col span={12}>
                  <Form.Item label="计划描述" {...formItemLayout}>
                    {getFieldDecorator('planDesc', {
                      rules: [
                        {
                          required: true,
                          message: '请输入计划描述',
                        },
                      ],
                      initialValue: planDesc,
                    })(<Input placeholder="请输入计划描述" />)}
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="状态" {...formItemLayout}>
                    {getFieldDecorator('planStatus', {
                      rules: [
                        {
                          required: true,
                          message: '请选择状态',
                        },
                      ],
                      initialValue: planStatus,
                    })(
                      <Select placeholder="请选择状态">
                        <Option value={1}>{'有效'}</Option>
                        <Option value={2}>{'无效'}</Option>
                      </Select>,
                    )}
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="计划开始时间" {...formItemLayout}>
                    {getFieldDecorator('planStartDate', {
                      rules: [
                        {
                          required: true,
                          message: '请选择计划开始时间',
                        },
                      ],
                      initialValue: planStartDate && moment(planStartDate),
                    })(<DatePicker style={{ width: '100%' }} format={dateFormat} />)}
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="计划结束时间" {...formItemLayout}>
                    {getFieldDecorator('planEndDate', {
                      rules: [
                        {
                          required: true,
                          message: '请选择计划结束时间',
                        },
                      ],
                      initialValue: planEndDate && moment(planEndDate),
                    })(<DatePicker style={{ width: '100%' }} format={dateFormat} />)}
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Modal>
        )}

        {this.state.detailVisible && (
          <Modal
            title={'计划详情'}
            visible={this.state.detailVisible}
            onOk={this.planDetailCancel}
            maskClosable={false}
            onCancel={this.planDetailCancel}
            width={'668px'}
            className="plan-detail">
            <Row>
              <Col span={12}>
                <label>保养计划名称：</label>
                <span>{planDetail.planName}</span>
              </Col>
              <Col span={12}>
                <label>保养计划编号：</label>
                <span>{planDetail.planCode}</span>
              </Col>
              <Col span={12}>
                <label>计划等级：</label>
                <span>{PlanLevel[planDetail.planLevel]}</span>
              </Col>
              <Col span={12}>
                <label>计划组：</label>
                <span>{PlanGroupId[planDetail.planGroupId]}</span>
              </Col>
              <Col span={12}>
                <label>部位：</label>
                <span>{planDetail.planPosition}</span>
              </Col>
              <Col span={12}>
                <label>标准：</label>
                <span>{planDetail.planStandard}</span>
              </Col>
              <Col span={12}>
                <label>循环方式：</label>
                <span>{PlanMode[planDetail.planMode]}</span>
              </Col>
              <Col span={12}>
                <label>保养周期：</label>
                <span>
                  {planDetail.planCycleNum} {PlanCycleType[planDetail.planCycleType]}
                </span>
              </Col>
              <Col span={12}>
                <label>状态：</label>
                <span>{PlanStatus[planDetail.planStatus]}</span>
              </Col>
              <Col span={12}>
                <label>计划开始时间：</label>
                <span>{moment(planDetail.planStartDate).format(dateFormat)}</span>
              </Col>
              <Col span={12}>
                <label>计划结束时间：</label>
                <span>{moment(planDetail.planEndDate).format(dateFormat)}</span>
              </Col>
              <Col span={12}>
                <label>计划描述：</label>
                <span>{planDetail.planDesc}</span>
              </Col>
            </Row>
          </Modal>
        )}
      </div>
    );
  }
}

const MaintenancePlan = Form.create()(MaintenancePlanMain);

export default MaintenancePlan;
