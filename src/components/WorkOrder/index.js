import React from 'react';
import './index.less';
import { Input, Button, Table, Modal, Form, Select, Radio, Row, Col, message, TextArea } from 'antd';
import { data, columns } from './constant';

const { Option } = Select;

/**
 * 工单
 */
class WorkOrderMain extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      item: {},
    };
  }

  showModal = (value = {}) => {
    this.setState({
      visible: true,
      item: value,
    })
  };
  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
  deleteConfirm = (e) => {
    message.success('删除成功');
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
    const { des } = this.state.item;
    return (
      <div>
        <div className="user-management">
          {/* <div className="title">
            <Input className="title-input" placeholder="流程名/流程编号" />
            <Button className="title-query" type="ghost">
              {'查询'}
            </Button>
            <Button className="title-add" type="primary" onClick={() => this.showModal()}>
              {'新增'}
            </Button>
            <Button className="title-delete" type="danger">
              {'批量删除'}
            </Button>
          </div> */}
          <Table columns={columns(this.deleteConfirm, this.deleteCancel, this.showModal)} dataSource={data} />
        </div>
        {this.state.visible &&
          <Modal
            title="审批"
            visible={this.state.visible}
            onOk={this.handleOk}
            maskClosable={false}
            onCancel={this.handleCancel}
            width={'688px'}
          >
            <Form>
              <Form.Item label="审批意见" {...formItemLayout}>
                {getFieldDecorator('des', {
                  rules: [
                    {
                      required: true,
                      message: '请输入审批意见',
                    },
                  ],
                  initialValue: des,
                })(<Input placeholder="请输入审批意见" type="textarea" />)}
              </Form.Item>
            </Form>
          </Modal>
        }
      </div>
    );
  }
}

const WorkOrderList = Form.create()(WorkOrderMain);

export default WorkOrderList;
