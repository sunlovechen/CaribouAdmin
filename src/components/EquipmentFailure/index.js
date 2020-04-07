import React from 'react';
import './index.less';
import { Input, Button, Table, Modal, Form, Select, Row, Col } from 'antd';
import { data, columns } from './constant';
import ajax from '../../utils/ajax';

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
      item: {},
      faultsList: [],
      page: {
        pageNum: 1,
        pageSize: 10,
      },
    };
  }

  componentWillMount() {
    this.getFaults();
  }

  // 设备故障列表
  getFaults = async () => {
    const { page } = this.state;
    const res = await ajax.getFaults(page);
    if (res.code === '10001') {
      this.setState({
        faultsList: res && res.data && res.data.list,
      });
    }
  };

  showModal = (type, item = {}) => {
    let title = '修改故障设备'
    if (type === 'add') {
      title = '新增故障设备';
    }
    this.setState({
      visible: true,
      title,
      item,
    });
  };

  handleOk = () => {
    window.console.log(this.props.form.getFieldsValue());
    this.setState({
      visible: false,
      title: '',
    });
  };

  handleCancel = e => {
    window.console.log(e);
    this.setState({
      visible: false,
      title: '',
    });
  };

  rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      window.console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  render() {
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
    const { faultsList, item } = this.state;
    const { username, name, mail, phone, status, description } = item;
    window.console.log(`faultsList: ${faultsList}`);
    return (
      <div>
        <div className="equipment-failure">
          <div className="title">
            {/* <Input className="title-input" placeholder="用户名字/显示名字" />
            <Button className="title-query" type="ghost">
              {'查询'}
            </Button> */}
            <Button className="title-add" type="primary" onClick={() => this.showModal('add')}>
              {'新增故障'}
            </Button>
            <Button className="title-delete" type="primary">
              {'刷新'}
            </Button>
          </div>
          <Table rowSelection={this.rowSelection}
            columns={columns(this.showModal)}
            dataSource={faultsList}
          />
        </div>
        {
          this.state.visible &&
          <Modal
            title={this.state.title}
            rowKey={'id'}
            visible={this.state.visible}
            onOk={this.handleOk}
            maskClosable={false}
            onCancel={this.handleCancel}
            width={'688px'}
          >
            <Form>
              <Row>
                <Col span={12}>

                  <Form.Item label="名称" {...formItemLayout}>
                    {getFieldDecorator('username', {
                      rules: [
                        {
                          required: true,
                          message: '请输入故障名称',
                        },
                      ],
                      initialValue: username,
                    })(<Input placeholder="请输入故障名称" value={username} />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="故障编号" {...formItemLayout}>
                    {getFieldDecorator('name', {
                      rules: [
                        {
                          required: true,
                          message: '请输入故障编号',
                        },
                      ],
                      initialValue: name,
                    })(<Input placeholder="请输入故障编号" disabled={inputDisabled} />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="故障等级" {...formItemLayout}>
                    {getFieldDecorator('mail', {
                      rules: [
                        {
                          required: true,
                          message: '请选择故障等级',
                        },
                      ],
                      initialValue: mail,
                    })(
                      <Select placeholder="请选择故障等级">
                        <Option value="故障等级1">故障等级1</Option>
                        <Option value="故障等级2">故障等级2</Option>
                      </Select>,
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="故障类别" {...formItemLayout}>
                    {getFieldDecorator('phone', {
                      rules: [
                        {
                          required: true,
                          message: '请选择故障类别',
                        },
                      ],
                      initialValue: phone,
                    })(
                      <Select placeholder="请选择故障类别" value={phone}>
                        <Option value="故障类别1">故障类别1</Option>
                        <Option value="故障类别2">故障类别2</Option>
                      </Select>,
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="故障状态" {...formItemLayout}>
                    {getFieldDecorator('status', {
                      rules: [
                        {
                          required: true,
                          message: '请选择故障状态',
                        },
                      ],
                      initialValue: status,
                    })(
                      <Select placeholder="请选择故障状态" value={status}>
                        <Option value="故障状态1">故障状态1</Option>
                        <Option value="故障状态2">故障状态2</Option>
                      </Select>,
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label="描述" {...formTextLayout}>
                {getFieldDecorator('description', {
                  rules: [],
                  initialValue: description,
                })(<Input type="textarea" placeholder="请输入描述" />)}
              </Form.Item>
            </Form>
          </Modal>

        }
      </div>
    );
  }
}

const EquipmentFailure = Form.create()(EquipmentFailureMain);

export default EquipmentFailure;
