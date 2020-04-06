import React from 'react';
import './index.less';
import { Input, Button, Table, Modal, Form, Select, Radio, Tree, message } from 'antd';
import { data, columns, treeData } from './constant';

const { Option } = Select;
const { TreeNode } = Tree;

/**
 * 用户管理
 */
class RoleManage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { visible: false, item: {}  };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  editModal = (value) => {
    window.console.log(value);
    this.setState({
      visible: true,
      item: value,
    });
  }
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
  onSelect = (selectedKeys, info) => {
    window.console.log('selected', selectedKeys, info);
  };

  onCheck = (checkedKeys, info) => {
    window.console.log('onCheck', checkedKeys, info);
  };

  deleteConfirm = (e) => {
    window.console.log(e);
    message.success('删除成功');
    message.error('删除失败');
  }
  deleteCancel = (e) => {
    window.console.log(e);
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
          title="角色信息"
          visible={this.state.visible}
          onOk={this.handleOk}
          maskClosable={false}
          onCancel={this.handleCancel}
          width={'688px'}
        >
          <Form>
            <Form.Item label="角色名称" {...formItemLayout}>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: '请输入角色名称',
                  },
                ],
                initialValue: username,
              })(<Input placeholder="请输入岗位名称" />)}
            </Form.Item>
            <Form.Item label="备注" {...formItemLayout}>
              {getFieldDecorator('phone', {
                initialValue: phone,
              })(<Input placeholder="请输入备注" />)}
            </Form.Item>
            <Form.Item label="菜单授权" {...formItemLayout}>
              {getFieldDecorator('phone', {
                initialValue: phone,
              })(<Tree
                checkable
                defaultExpandedKeys={['0-0-0', '0-0-1']}
                defaultSelectedKeys={['0-0-0', '0-0-1']}
                defaultCheckedKeys={['0-0-0', '0-0-1']}
                onSelect={this.onSelect}
                onCheck={this.onCheck}
              >
                <TreeNode title="公告管理" key="0-0"></TreeNode>
                <TreeNode title="基础档案库" key="0-1"></TreeNode>
                <TreeNode title="系统管理" key="0-2"></TreeNode>
                <TreeNode title="流程管理" key="0-3"></TreeNode>
              </Tree>)}
            </Form.Item>
            <Form.Item label="资源授权" {...formItemLayout}>
              {getFieldDecorator('phone', {
                initialValue: phone,
              })(<Tree
                checkable
                defaultExpandedKeys={['0-0-0', '0-0-1']}
                defaultSelectedKeys={['0-0-0', '0-0-1']}
                defaultCheckedKeys={['0-0-0', '0-0-1']}
                onSelect={this.onSelect}
                onCheck={this.onCheck}
              >
                <TreeNode title="公告管理" key="0-0"></TreeNode>
                <TreeNode title="基础档案库" key="0-1"></TreeNode>
                <TreeNode title="系统管理" key="0-2"></TreeNode>
              </Tree>)}
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
          </Form>
        </Modal>
      </div>
    );
  }
}

const RoleManagement = Form.create()(RoleManage);

export default RoleManagement;
