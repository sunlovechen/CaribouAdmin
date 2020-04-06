import React from 'react';
import './index.less';
import { Input, Button, Table, Modal, Form, Select, Radio, Row, Col, message } from 'antd';
import { data, columns } from './constant';

const { Option } = Select;

/**
 * 用户管理
 */
class UserManagementMain extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      item: {},
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    window.console.log(this.props.form.getFieldsValue());
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    window.console.log(e);
    this.setState({
      visible: false,
    });
  };
  deleteConfirm = (e) => {
    window.console.log(e);
    message.success('删除成功');
    message.error('删除失败');
  }
  deleteCancel = (e) => {
    window.console.log(e);
  }
  editModal = (value) => {
    window.console.log(value);
    this.setState({
      visible: true,
      item: value,
    });
  }
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
    const { userType, username, name, password, confirmpassword, mail, phone, department, post, jaiose, status } = this.state.item;
    return (
      <div>
        <div className="user-management">
          <div className="title">
            <Input className="title-input" placeholder="用户名字/显示名字" />
            <Button className="title-query" type="ghost">
              {'查询'}
            </Button>
            <Button className="title-add" type="primary" onClick={() => this.showModal()}>
              {'新增'}
            </Button>
            <Button className="title-delete" type="danger">
              {'批量删除'}
            </Button>
          </div>
          <Table rowSelection={this.rowSelection} columns={columns(this.deleteConfirm, this.deleteCancel, this.editModal)} dataSource={data} />
        </div>
        <Modal
          title="用户信息"
          visible={this.state.visible}
          onOk={this.handleOk}
          maskClosable={false}
          onCancel={this.handleCancel}
          width={'688px'}
        >
          <Form>
            <Row>
              <Col span={12}>
                <Form.Item label="用户类型" {...formItemLayout}>
                  {getFieldDecorator('userType', { initialValue: userType })(
                    <Radio.Group>
                      <Radio value="1">普通用户</Radio>
                      <Radio value="2">系统管理员</Radio>
                    </Radio.Group>,
                  )}
                </Form.Item>

                <Form.Item label="用户名" {...formItemLayout}>
                  {getFieldDecorator('username', {
                    rules: [
                      {
                        required: true,
                        message: '请输入用户名',
                      },
                    ],
                    initialValue: username,
                  })(<Input placeholder="请输入用户名" />)}
                </Form.Item>

                <Form.Item label="姓名" {...formItemLayout}>
                  {getFieldDecorator('name', {
                    rules: [
                      {
                        required: true,
                        message: '请输入姓名',
                      },
                    ],
                    initialValue: name,
                  })(<Input placeholder="请输入姓名" />)}
                </Form.Item>

                <Form.Item label="密码" {...formItemLayout}>
                  {getFieldDecorator('password', {
                    rules: [
                      {
                        required: true,
                        message: '请输入密码',
                      },
                    ],
                    initialValue: password,
                  })(<Input type="password" placeholder="请输入密码" />)}
                </Form.Item>

                <Form.Item label="确认密码" {...formItemLayout}>
                  {getFieldDecorator('confirmpassword', {
                    rules: [
                      {
                        required: true,
                        message: '请输入确认密码',
                      },
                    ],
                    initialValue: confirmpassword,
                  })(<Input type="password" placeholder="请输入确认密码" />)}
                </Form.Item>

                <Form.Item label="邮箱" {...formItemLayout}>
                  {getFieldDecorator('mail', {
                    rules: [
                      {
                        required: true,
                        message: '请输入邮箱',
                      },
                    ],
                    initialValue: mail,
                  })(<Input placeholder="请输入邮箱" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="手机号" {...formItemLayout}>
                  {getFieldDecorator('phone', {
                    rules: [
                      {
                        required: true,
                        message: '请输入手机号',
                      },
                    ],
                    initialValue: phone,
                  })(<Input placeholder="请输入手机号" />)}
                </Form.Item>

                <Form.Item label="部门" {...formItemLayout}>
                  {getFieldDecorator('department', {
                    rules: [
                      {
                        required: true,
                        message: '请选择部门',
                      },
                    ],
                    initialValue: department,
                  })(
                    <Select placeholder="请选择部门">
                      <Option value="设备部">设备部</Option>
                      <Option value="材料部">材料部</Option>
                    </Select>,
                  )}
                </Form.Item>

                <Form.Item label="岗位" {...formItemLayout}>
                  {getFieldDecorator('post', {
                    rules: [
                      {
                        required: true,
                        message: '请选择岗位',
                      },
                    ],
                    initialValue: post,
                  })(
                    <Select placeholder="请选择岗位">
                      <Option value="工程师">工程师</Option>
                      <Option value="专员">专员</Option>
                    </Select>,
                  )}
                </Form.Item>

                <Form.Item label="角色" {...formItemLayout}>
                  {getFieldDecorator('jaiose', {
                    rules: [
                      {
                        required: true,
                        message: '请选择角色',
                      },
                    ],
                    initialValue: jaiose,
                  })(
                    <Select placeholder="请选择角色">
                      <Option value="角色1">角色1</Option>
                      <Option value="角色2">角色2</Option>
                    </Select>,
                  )}
                </Form.Item>

                <Form.Item label="状态" {...formItemLayout}>
                  {getFieldDecorator('status', {
                    initialValue: status,
                  })(
                    <Radio.Group>
                      <Radio value="1">正常</Radio>
                      <Radio value="2">禁用</Radio>
                    </Radio.Group>,
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>
    );
  }
}

const UserManagement = Form.create()(UserManagementMain);

export default UserManagement;
