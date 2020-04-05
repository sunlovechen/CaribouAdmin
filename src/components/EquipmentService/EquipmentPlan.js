import React from 'react';
import './index.less';
import { Input, Button, Table, Modal, Form, Select, Row, Col } from 'antd';
import { data, columns } from './constant';

const { Option } = Select;

/**
 * 保养计划
 */
class EquipmentPlanMain extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      title: '',
      item: {},
    };
  }

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
    const { username, name, mail, phone, status, description } = this.state.item;
    return (
      <div>
        <div className="equipment-plan">
          <Table rowSelection={this.rowSelection}
            columns={columns(this.showModal)}
            dataSource={data}
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

const EquipmentPlan = Form.create()(EquipmentPlanMain);

export default EquipmentPlan;
