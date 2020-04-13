import React from 'react';
import './index.less';
import { Input, Button, Table, Modal, Form, Select, Row, Col, Radio, message } from 'antd';
import { columns, RecodeShutdownType, RecordType } from './constant';
import ajax from '../../../utils/ajax';
import moment from 'moment';

const { Option } = Select;
const dateFormat = 'YYYY-MM-DD';

/**
 * 维修记录
 */
class ServiceRecordsMain extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      detailVisible: false,
      title: '',
      recordItem: {},
      recordList: [],
      page: {
        current: 1,
        pageSize: 10,
        total: 0,
      },
      queryMap: {
        recordType: 3,
      },
      recordDetail: {},
    };
  }

  componentWillMount() {
    this.recordListPage();
  }

  // 设备维修记录
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
    let title = '修改维修记录';
    if (type === 'add') {
      title = '新增维修记录';
    }
    this.setState({
      visible: true,
      title,
      recordItem,
    });
  };

  handleOk = () => {
    const { form, planItem } = this.props;
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
            recodeDevId: planItem.id,
            recordType: queryMap.recordType,
          });
          this.recordSave(detail);
        } else {
          // 修改
          const detail = Object.assign({}, values, {
            id,
            recordType: queryMap.recordType,
          });
          this.recordUpdate(detail);
        }
      }
    });
  };

  // 添加维修记录
  recordSave = async detail => {
    const res = await ajax.recordSave(detail);
    if (res.code === '10001') {
      this.recordListPage();
    }
  };

  // 更新维修记录
  recordUpdate = async detail => {
    const res = await ajax.recordUpdate(detail);
    if (res.code === '10001') {
      this.recordListPage();
    }
  };

  // 删除维修记录
  recordDel = async id => {
    const detail = {
      id,
      isdel: 1,
    };
    const res = await ajax.recordDel(detail);
    if (res.code === '10001') {
      message.success('删除成功');
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
        this.recordListPage();
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
    const { planItem } = this.props;
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
    const { recordList, recordItem, page, recordDetail } = this.state;
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
    return (
      <div>
        <div className="service-records">
          <div className="title">
            {/* <Input className="title-input" placeholder="用户名字/显示名字" />
            <Button className="title-query" type="ghost">
              {'查询'}
            </Button> */}
            <Button disabled={!planItem.id} className="title-add" type="primary" onClick={() => this.showModal('add', {})}>
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
              x: 1200,
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
                {/* <Col span={12}>
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
                </Col> */}
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
                  initialValue: recodeDesc,
                })(<Input type="textarea" placeholder="请输入记录描述" />)}
              </Form.Item>
            </Form>
          </Modal>
        )}

        {this.state.detailVisible && (
          <Modal
            title={'记录详情'}
            visible={this.state.detailVisible}
            onOk={this.recordDetailCancel}
            maskClosable={false}
            onCancel={this.recordDetailCancel}
            width={'668px'}
            className="plan-detail">
            <Row>
              <Col span={12}>
                <label>记录编号：</label>
                <span>{recordDetail.recordCode}</span>
              </Col>
              <Col span={12}>
                <label>是否停机：</label>
                <span>{RecodeShutdownType[recordDetail.recodeShutdownType]}</span>
              </Col>
              <Col span={12}>
                <label>停机时长：</label>
                <span>{recordDetail.recodeShutdownTime}</span>
              </Col>
              <Col span={12}>
                <label>创建者：</label>
                <span>{recordDetail.createdUserName}</span>
              </Col>
              <Col span={12}>
                <label>费用：</label>
                <span>{recordDetail.recodeMoney}</span>
              </Col>
              <Col span={12}>
                <label>记录内容：</label>
                <span>{recordDetail.recodeContent}</span>
              </Col>
              <Col span={12}>
                <label>记录描述：</label>
                <span>{recordDetail.recodeDesc}</span>
              </Col>
            </Row>
          </Modal>
        )}
      </div>
    );
  }
}

const ServiceRecords = Form.create()(ServiceRecordsMain);

export default ServiceRecords;
