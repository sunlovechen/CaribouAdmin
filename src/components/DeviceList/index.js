import React from 'react';
import './index.less';
import { Input, Button, Table, Modal, Form, Select, Row, Col } from 'antd';
import { data, columns } from './constant';

const { Option } = Select;

/**
 * 用户管理
 */
class DeviceListMain extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    const { form } = this.props;
    form.validateFieldsAndScroll((error, values) => {
      if (!error) {
        this.setState({
          visible: false,
        });
      }
      window.console.log(error, values);
    });
  };

  handleCancel = e => {
    window.console.log(e);
    this.setState({
      visible: false,
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
    return (
      <div>
        <div className="device-list">
          <div className="title">
            <Input className="title-input" placeholder="设备名/设备编号" />
            <Button className="title-query" type="ghost">
              {'查询'}
            </Button>
            <Button className="title-add" type="primary" onClick={() => this.showModal()}>
              {'新增'}
            </Button>
            <Button className="title-delete" type="danger">
              {'报废'}
            </Button>
          </div>
          <Table
            rowSelection={this.rowSelection}
            columns={columns}
            dataSource={data}
            scroll={{
              x: 1600,
            }}
          />
        </div>
          <Modal
            title="设备属性"
            visible={this.state.visible}
            onOk={this.handleOk}
            maskClosable={false}
            width={'688px'}
            onCancel={this.handleCancel}
          >
          {this.state.visible && (
            <Form>
              <Row className="device-list-row-flex">
                <Col span={12}>
                  <Form.Item label="市公司" {...formItemLayout}>
                    {getFieldDecorator('username', {
                      rules: [
                        {
                          required: true,
                          message: '请输入市公司',
                        },
                      ],
                    })(<Input placeholder={'请输入市公司'} />)}
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="油库" {...formItemLayout}>
                    {getFieldDecorator('oilDepot', {
                      rules: [
                        {
                          required: true,
                          message: '请输入油库',
                        },
                      ],
                    })(<Input placeholder={'请输入油库'} />)}
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="设备编号" {...formItemLayout}>
                    {getFieldDecorator('deviceID', {
                      rules: [
                        {
                          required: true,
                          message: '请输入设备编号',
                        },
                      ],
                    })(<Input placeholder={'请输入设备编号'} />)}
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="设备名称" {...formItemLayout}>
                    {getFieldDecorator('equipment', {
                      rules: [
                        {
                          required: true,
                          message: '请输入设备名称',
                        },
                      ],
                    })(<Input placeholder={'请输入设备名称'} />)}
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="部门" {...formItemLayout}>
                    {getFieldDecorator('brand', {
                      rules: [
                        {
                          required: true,
                          message: '请选择品牌',
                        },
                      ],
                    })(
                      <Select placeholder="请选择品牌">
                        <Option value="品牌1">品牌1</Option>
                        <Option value="品牌2">品牌2</Option>
                      </Select>,
                    )}
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="规格型号" {...formItemLayout}>
                    {getFieldDecorator('specifications', {
                      rules: [
                        {
                          required: true,
                          message: '请输入规格型号',
                        },
                      ],
                    })(<Input placeholder={'请输入规格型号'} />)}
                  </Form.Item>{' '}
                </Col>

                <Col span={12}>
                  <Form.Item label="功率" {...formItemLayout}>
                    {getFieldDecorator('power', {
                      rules: [
                        {
                          required: true,
                          message: '请输入功率',
                        },
                      ],
                    })(<Input placeholder={'请输入功率'} />)}
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="设备类别" {...formItemLayout}>
                    {getFieldDecorator('equipmentCategory', {
                      rules: [
                        {
                          required: true,
                          message: '请选择设备类别',
                        },
                      ],
                    })(
                      <Select placeholder="请选择设备类别">
                        <Option value="类别1">类别1</Option>
                        <Option value="类别2">类别2</Option>
                      </Select>,
                    )}
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="责任人" {...formItemLayout}>
                    {getFieldDecorator('responsible', {
                      rules: [
                        {
                          required: true,
                          message: '请选择责任人',
                        },
                      ],
                    })(
                      <Select placeholder="请选择责任人">
                        <Option value="你">你</Option>
                        <Option value="我">我</Option>
                        <Option value="他">他</Option>
                      </Select>,
                    )}
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="生产厂商" {...formItemLayout}>
                    {getFieldDecorator('manufacturer', {
                      rules: [
                        {
                          required: true,
                          message: '请选择生产厂商',
                        },
                      ],
                    })(
                      <Select placeholder="请选择生产厂商">
                        <Option value="aa">aa</Option>
                        <Option value="bb">bb</Option>
                        <Option value="cc">cc</Option>
                      </Select>,
                    )}
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="供应商" {...formItemLayout}>
                    {getFieldDecorator('supplier', {
                      rules: [
                        {
                          required: true,
                          message: '请选择供应商',
                        },
                      ],
                    })(
                      <Select placeholder="请选择供应商">
                        <Option value="qq">qq</Option>
                        <Option value="ww">ww</Option>
                        <Option value="ee">ee</Option>
                      </Select>,
                    )}
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="备注" {...formItemLayout}>
                    {getFieldDecorator('note', {})(<Input placeholder={'请输入备注'} />)}
                  </Form.Item>
                </Col>
              </Row>
            </Form>
            )}
          </Modal>
      </div>
    );
  }
}

const DeviceList = Form.create()(DeviceListMain);

export default DeviceList;
