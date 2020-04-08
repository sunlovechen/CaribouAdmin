import React from 'react';
import './index.less';
import { Input, Button, Table, Modal, Form, Select, Row, Col, Radio, InputNumber, DatePicker } from 'antd';
import { columns, PlanStatus, PlanLevel, PlanGroupId, PlanMode, PlanCycleType } from './constant';
import ajax from '../../../utils/ajax';
import moment from 'moment';

const { Option } = Select;
const dateFormat = 'YYYY-MM-DD HH:mm:ss';

/**
 * 保养记录
 */
class MaintenanceRecordsMain extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      detailVisible: false,
      title: '',
      recordItem: {},
      recordList: [],
      planList: [],
      page: {
        current: 1,
        pageSize: 10,
        total: 0,
      },
      queryMap: {
        planType: 1,
      },
      recordDetail: {},
    };
  }

  componentWillMount() {
    this.recordListPage();
    this.planListPage();
  }

  // 设备计划
  planListPage = async () => {
    const { queryMap } = this.state;
    const detail = {
      pageNum: 1,
      pageSize: 100,
      queryMap,
    };
    const res = await ajax.planListPage(detail);
    if (res.code === '10001') {
      this.setState({
        planList: res && res.data && res.data.list,
      });
    }
  };

  // 设备保养记录
  recordListPage = async () => {
    const { page, queryMap } = this.state;
    const detail = {
      pageNum: page.current,
      pageSize: page.pageSize,
      queryMap,
    };
    const res = await ajax.recordListPage(detail);
    if (res.code === '10001') {
      this.setState({
        recordList: res && res.data && res.data.list,
        page: {
          current: page.current,
          pageSize: page.pageSize,
          total: res.data.total,
        },
      });
    }
  };

  showModal = (type, recordItem = {}) => {
    let title = '修改保养记录';
    if (type === 'add') {
      title = '新增保养记录';
    }
    this.setState({
      visible: true,
      title,
      recordItem,
    });
  };

  handleOk = () => {
    const { form, deviceItem } = this.props;
    const { id } = this.state.recordItem;
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
            recordDevId: deviceItem.id,
            recordType: queryMap.planType,
          });
          this.planSave(detail);
        } else {
          // 修改
          const detail = Object.assign({}, values, {
            id,
            recordType: queryMap.planType,
          });
          this.planUpdate(detail);
        }
      }
      window.console.log(error, values);
    });
  };

  // 添加保养记录
  recordSave = async detail => {
    const res = await ajax.recordSave(detail);
    if (res.code === '10001') {
      this.recordListPage();
    }
  };

  // 更新保养记录
  recordUpdate = async detail => {
    const res = await ajax.recordUpdate(detail);
    if (res.code === '10001') {
      this.recordListPage();
    }
  };

  // 删除保养记录
  recordDel = async id => {
    const detail = {
      id,
      isdel: 1,
    };
    const res = await ajax.recordDel(detail);
    if (res.code === '10001') {
      this.recordListPage();
    }
  };

  // 记录详情
  recordDetail = async id => {
    const res = await ajax.recordDetail({ id });
    if (res.code === '10001') {
      this.setState({
        detailVisible: true,
        recordDetail: res.data,
      });
    }
  };

  recordDetailCancel = e => {
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
        this.getDevices();
      },
    );
  };

  handleCancel = e => {
    window.console.log(e);
    this.setState({
      visible: false,
      title: '',
    });
  };

  render() {
    window.console.log('deviceItem', this.props.deviceItem, this.state.recordDetail);
    const { deviceItem } = this.props;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    const formTextLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 20 },
    };
    const inputDisabled = true;
    const { recordList, recordItem, page, recordDetail, planList } = this.state;
    const {
      id,
      recordCode,
      recordPlanId,
      recodeShutdownType,
      recodeShutdownTime,
      recordUserName,
      recodeMoney,
      recodeDesc,
      recodeContent,
    } = recordItem;
    window.console.log(`recordList: ${recordList}`);
    return (
      <div>
        <div className="equipment-failure">
          <div className="title">
            {/* <Input className="title-input" placeholder="用户名字/显示名字" />
            <Button className="title-query" type="ghost">
              {'查询'}
            </Button> */}
            <Button className="title-add" type="primary" onClick={() => this.showModal('add', {})}>
              {'新增'}
            </Button>
            {/* <Button className="title-delete" type="primary">
              {'刷新'}
            </Button> */}
          </div>
          <Table
            columns={columns(this.showModal, this.recordDetail, this.recordDel)}
            dataSource={recordList}
            pagination={page}
            onChange={this.pageChange}
            scroll={{
              x: 1800,
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
                  <Form.Item label="记录编号" {...formItemLayout}>
                    {getFieldDecorator('recordCode', {
                      initialValue: recordCode,
                    })(<Input placeholder="自动生成记录编号" disabled={inputDisabled} />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="保养计划" {...formItemLayout}>
                    {getFieldDecorator('recordPlanId', {
                      rules: [
                        {
                          required: true,
                          message: '请选择保养计划',
                        },
                      ],
                      initialValue: recordPlanId,
                    })(
                      <Select placeholder="请选择保养计划">
                        {planList.map(item => {
                          return (
                            <Option key={item.planCode} value={item.id}>
                              {item.planName}
                            </Option>
                          );
                        })}
                      </Select>,
                    )}
                  </Form.Item>
                </Col>
                <Col span={12} style={{ margin: '-1px 0' }}>
                  <Form.Item label="是否停机" {...formItemLayout}>
                    {getFieldDecorator('recodeShutdownType', {
                      rules: [
                        {
                          required: true,
                          message: '请选择是否停机',
                        },
                      ],
                      initialValue: recodeShutdownType,
                    })(
                      <Radio.Group>
                        <Radio value={1}>是</Radio>
                        <Radio value={2}>否</Radio>
                      </Radio.Group>,
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="停机时长" {...formItemLayout}>
                    {getFieldDecorator('recodeShutdownTime', {
                      rules: [
                        {
                          required: true,
                          message: '请输入停机时长',
                        },
                      ],
                      initialValue: recodeShutdownTime,
                    })(<Input placeholder="请输入停机时长" />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="负责人" {...formItemLayout}>
                    {getFieldDecorator('recordUserName', {
                      rules: [
                        {
                          required: true,
                          message: '请输入负责人',
                        },
                      ],
                      initialValue: recordUserName,
                    })(<Input placeholder="请输入负责人" />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="费用" {...formItemLayout}>
                    {getFieldDecorator('recodeMoney', {
                      rules: [
                        {
                          required: true,
                          message: '请输入费用',
                        },
                      ],
                      initialValue: recodeMoney,
                    })(<Input placeholder="请输入费用" />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="记录内容" {...formItemLayout}>
                    {getFieldDecorator('recodeContent', {
                      rules: [
                        {
                          required: true,
                          message: '请输入记录内容',
                        },
                      ],
                      initialValue: recodeContent,
                    })(<Input placeholder="请输入记录内容" />)}
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item label="记录描述" {...formTextLayout}>
                {getFieldDecorator('recodeDesc', {
                  rules: [
                    {
                      required: true,
                      message: '请输入记录描述',
                    },
                  ],
                  initialValue: recodeDesc,
                })(<Input type="textarea" placeholder="请输入记录描述" />)}
              </Form.Item>
            </Form>
          </Modal>
        )}

        {this.state.detailVisible && (
          <Modal
            title={'计划详情'}
            visible={this.state.detailVisible}
            onOk={this.recordDetailCancel}
            maskClosable={false}
            onCancel={this.recordDetailCancel}
            width={'668px'}>
            <Row>
              <Col span={12}>
                <label>保养计划名称：</label>
                <span>{recordDetail.planName}</span>
              </Col>
              <Col span={12}>
                <label>保养计划编号：</label>
                <span>{recordDetail.planCode}</span>
              </Col>
              <Col span={12}>
                <label>计划等级：</label>
                <span>{PlanLevel[recordDetail.planLevel]}</span>
              </Col>
              <Col span={12}>
                <label>计划组：</label>
                <span>{PlanGroupId[recordDetail.planGroupId]}</span>
              </Col>
              <Col span={12}>
                <label>部位：</label>
                <span>{recordDetail.planPosition}</span>
              </Col>
              <Col span={12}>
                <label>标准：</label>
                <span>{recordDetail.planStandard}</span>
              </Col>
              <Col span={12}>
                <label>循环方式：</label>
                <span>{PlanMode[recordDetail.planMode]}</span>
              </Col>
              <Col span={12}>
                <label>保养周期：</label>
                <span>
                  {recordDetail.planCycleNum} {PlanCycleType[recordDetail.planCycleType]}
                </span>
              </Col>
              <Col span={12}>
                <label>状态：</label>
                <span>{PlanStatus[recordDetail.planStatus]}</span>
              </Col>
              <Col span={12}>
                <label>计划开始时间：</label>
                <span>{moment(recordDetail.planStartDate).format(dateFormat)}</span>
              </Col>
              <Col span={12}>
                <label>计划结束时间：</label>
                <span>{moment(recordDetail.planEndDate).format(dateFormat)}</span>
              </Col>
              <Col span={12}>
                <label>计划描述：</label>
                <span>{recordDetail.planDesc}</span>
              </Col>
            </Row>
          </Modal>
        )}
      </div>
    );
  }
}

const MaintenanceRecords = Form.create()(MaintenanceRecordsMain);

export default MaintenanceRecords;
