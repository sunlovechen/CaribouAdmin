/* eslint-disable max-len */
import React from 'react';
import './index.less';
import { Input, Button, Table, Modal, Form, Select, Row, Col, message } from 'antd';
import { columns, FaultLevel } from './constant';
import ajax from '../../../utils/ajax';

const { Option } = Select;

/**
 * 设备故障
 */
class EquipmentFailureMain extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      title: '',
      faultsItem: {},
      faultsList: [],
      page: {
        current: 1,
        pageSize: 10,
        total: 0,
      },
    };
  }

  componentWillMount() {
    this.getFaults();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.deviceItem.id !== this.props.deviceItem.id) {
      this.getFaults();
    }
  }

  // 设备故障列表
  getFaults = async () => {
    const { page } = this.state;
    const { deviceItem } = this.props;
    const pageDetail = {
      pageNum: page.current,
      pageSize: page.pageSize,
      queryMap: {
        // eslint-disable-next-line radix
        faultDevId: parseInt(deviceItem.id),
      },
    };
    const res = await ajax.getFaults(pageDetail);
    if (res.code === '10001') {
      this.setState({
        faultsList: res && res.data && res.data.list,
        page: {
          current: page.current,
          pageSize: page.pageSize,
          total: res.data.total,
        },
      });
    }
  };

  showModal = (type, faultsItem = {}) => {
    let title = '修改故障设备';
    if (type === 'add') {
      title = '新增故障设备';
    }
    this.setState({
      visible: true,
      title,
      faultsItem,
    });
  };

  handleOk = () => {
    const { form, deviceItem } = this.props;
    const { id } = this.state.faultsItem;
    form.validateFieldsAndScroll((error, values) => {
      if (!error) {
        this.setState({
          visible: false,
          title: '',
        });
        if (!id) { // 新增
          const detail = Object.assign({}, values, {
            faultDevId: deviceItem.id,
          });
          this.addFault(detail);
        } else {  // 修改
          const detail = Object.assign({}, values, {
            id,
            faultDevId: deviceItem.id,
          });
          this.updateFault(detail);
        }
      }
    });
  };

  // 添加设备故障
  addFault = async detail => {
    const res = await ajax.addFault(detail);
    if (res.code === '10001') {
      this.getFaults();
    }
  };

  // 更新设备故障
  updateFault = async detail => {
    const res = await ajax.updateFault(detail);
    if (res.code === '10001') {
      this.getFaults();
    }
  };

  // 删除设备故障
  delFaultRecord = async id => {
    const detail = {
      id,
      isdel: 1,
    };
    const res = await ajax.delFaultRecord(detail);
    if (res.code === '10001') {
      message.success('删除成功');
      this.getFaults();
    }
  };

  pageChange = pagination => {
    this.setState(
      {
        page: pagination,
      },
      () => {
        this.getFaults();
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
    const inputDisabled = true;
    const { faultsList, faultsItem, page } = this.state;
    const { faultCateId, faultLevel, faultStatus, faultCode, id } = faultsItem;
    return (
      <div>
        <div className="equipment-failure">
          <div className="title">
            {/* <Input className="title-input" placeholder="用户名字/显示名字" />
            <Button className="title-query" type="ghost">
              {'查询'}
            </Button> */}
            <Button
              className="title-add"
              type="primary"
              onClick={() => this.showModal('add', {})}
              disabled={!deviceItem.id}
            >
              {'新增故障'}
            </Button>
            {/* <Button className="title-delete" type="primary">
              {'刷新'}
            </Button> */}
          </div>
          <Table columns={columns(this.showModal, this.delFaultRecord)} dataSource={faultsList} pagination={page} onChange={this.pageChange} />
        </div>
        {this.state.visible && (
          <Modal
            title={this.state.title}
            rowKey={'id'}
            visible={this.state.visible}
            onOk={this.handleOk}
            maskClosable={false}
            onCancel={this.handleCancel}
            // eslint-disable-next-line react/jsx-closing-bracket-location
            width={'688px'}>
            <Form>
              <Row>
                {
                  id && <Col span={12}>
                  <Form.Item label="故障编号" {...formItemLayout}>
                    {getFieldDecorator('faultCode', {
                      rules: [
                        {
                          required: true,
                          message: '请输入故障编号',
                        },
                      ],
                      initialValue: faultCode,
                    })(<Input placeholder="请输入故障编号" disabled={inputDisabled} />)}
                  </Form.Item>
                </Col>
                }
                <Col span={12}>
                  <Form.Item label="故障等级" {...formItemLayout}>
                    {getFieldDecorator('faultLevel', {
                      rules: [
                        {
                          required: true,
                          message: '请选择故障等级',
                        },
                      ],
                      initialValue: faultLevel,
                    })(
                      <Select placeholder="请选择故障等级">
                        {FaultLevel.map((faultLevelItem, index) => {
                          return <Option value={parseFloat(index)}>{faultLevelItem}</Option>;
                        })}
                      </Select>,
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="故障类别" {...formItemLayout}>
                    {getFieldDecorator('faultCateId', {
                      rules: [
                        {
                          required: true,
                          message: '请选择故障类别',
                        },
                      ],
                      initialValue: faultCateId,
                    })(
                      <Select placeholder="请选择故障类别">
                        <Option value={1}>致命错误</Option>
                      </Select>,
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="故障状态" {...formItemLayout}>
                    {getFieldDecorator('faultStatus', {
                      rules: [
                        {
                          required: true,
                          message: '请选择故障状态',
                        },
                      ],
                      initialValue: faultStatus,
                    })(
                      <Select placeholder="请选择故障状态">
                        <Option value={0}>正常</Option>
                        <Option value={1}>不正常</Option>
                      </Select>,
                    )}
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Modal>
        )}
      </div>
    );
  }
}

const EquipmentFailure = Form.create()(EquipmentFailureMain);

export default EquipmentFailure;
