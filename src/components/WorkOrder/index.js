import React from 'react';
import './index.less';
import { Input, Table, Modal, Form, Select, message } from 'antd';
import { data, columns } from './constant';
import DetailOrder from './detailOrder';

/**
 * 工单
 */
class WorkOrderMain extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      item: {},
      detailVisible: false,
      detailItem: {},
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

  rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      window.console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  showDetail = (item, visible) => {
    this.setState({
      detailVisible: visible,
      detailItem: item,
    });
  }

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
          <Table
            columns={columns(this.deleteConfirm, this.showDetail, this.showModal)}
            dataSource={data}
          />
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

        {this.state.detailVisible && (
          <Modal
            title={'申请详情'}
            visible={this.state.detailVisible}
            onOk={() => this.showDetail({}, false)}
            maskClosable={false}
            onCancel={() => this.showDetail({}, false)}
            width={'668px'}
          >
            <DetailOrder detailItem={this.state.detailItem} />
          </Modal>
        )}
      </div>
    );
  }
}

const WorkOrderList = Form.create()(WorkOrderMain);

export default WorkOrderList;
