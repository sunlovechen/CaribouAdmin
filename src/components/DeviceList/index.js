import React from 'react';
import './index.less';
import { Input, Button, Table, Modal, Form, Select, Row, Col, TreeSelect, DatePicker, message } from 'antd';
import { columns } from './constant';
import ajax from '../../utils/ajax';
import moment from 'moment';
import EquipmentService from '../EquipmentService';

const { Option } = Select;
const TreeSelectNode = TreeSelect.TreeNode;

const dateFormat = 'YYYY-MM-DD HH:mm:ss';

/**
 * 用户管理
 */
class DeviceListMain extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      devicesList: [],
      title: '',
      page: {
        current: 1,
        pageSize: 5,
        total: 0,
      },
      queryMap: {
        devName: null,
        devCode: null,
      },
      devicesItem: {},
      categoryList: [],
      propsItem: {},
    };
  }

  componentWillMount() {
    this.getDevices();
    this.getCategorys();
  }

  // 获取类别
  getCategorys = async () => {
    const res = await ajax.getCategorys();
    if (res.code === '10001') {
      this.setState({
        categoryList: (res && res.data) || [],
      });
    }
  };

  // 设备故障列表
  getDevices = async () => {
    const { page, queryMap } = this.state;
    const pageDetail = {
      pageNum: page.current,
      pageSize: page.pageSize,
    };
    const detail = Object.assign({}, pageDetail, {
      queryMap,
    });
    const res = await ajax.getDevices(detail);
    if (res.code === '10001') {
      this.setState({
        devicesList: res && res.data && res.data.list,
        page: {
          current: page.current,
          pageSize: page.pageSize,
          total: res.data.total,
        },
      });
    }
  };

  showModal = (title, devicesItem) => {
    this.setState({
      visible: true,
      title,
      devicesItem,
    });
  };

  handleOk = () => {
    const { form } = this.props;
    const { id } = this.state.devicesItem;
    form.validateFieldsAndScroll((error, values) => {
      if (!error) {
        this.setState({
          visible: false,
          title: '',
        });
        if (!id) {
          const detail = Object.assign({}, values, {
            devManufactureDate: moment(values.devManufactureDate).format(dateFormat),
            devUseDate: moment(values.devUseDate).format(dateFormat),
          });
          this.postDevice(detail);
        } else {
          const detail = Object.assign({}, values, {
            id,
            devManufactureDate: moment(values.devManufactureDate).format(dateFormat),
            devUseDate: moment(values.devUseDate).format(dateFormat),
          });
          this.putDeviceById(detail);
        }
      }
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
      title: '',
    });
  };

  rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      this.setState({
        propsItem: selectedRows[0],
      });
    },
    getCheckboxProps: record => ({
      disabled: record.devStatus !== '使用中', // Column configuration not to be checked
      // name: record.name,
    }),
    type: 'radio',
  };

  changeDevName = e => {
    const { queryMap } = this.state;
    this.setState({
      queryMap: {
        devName: e.target.value,
        devCode: queryMap.devCode,
      },
    });
  };

  changeDevCode = e => {
    const { queryMap } = this.state;
    this.setState({
      queryMap: {
        devName: queryMap.devName,
        devCode: e.target.value,
      },
    });
  };

  // 生成TreeSelectNode
  getTreeSelectNode = (list = []) => {
    return list.map(item => {
      return (
        <TreeSelectNode value={item.id} title={item.categoryName} key={item.id}>
          {item.soilCategoriesList && this.getTreeSelectNode(item.soilCategoriesList)}
        </TreeSelectNode>
      );
    });
  };

  // 添加设备
  postDevice = async detail => {
    const res = await ajax.postDevice(detail);
    if (res.code === '10001') {
      this.getDevices();
    }
  };

  // 更新设备
  putDeviceById = async detail => {
    const res = await ajax.putDeviceById(detail);
    if (res.code === '10001') {
      this.getDevices();
    }
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

  // 报废
  putDeviceStatusById = async id => {
    const detail = {
      id,
      devStatus: '报废',
    };
    const res = await ajax.putDeviceStatusById(detail);
    if (res.code === '10001') {
      message.success('报废成功');
      this.getDevices();
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const formTextLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    const { devicesList, queryMap, page, title, devicesItem, categoryList } = this.state;
    const {
      devCompanyName,
      devOilName,
      devOilCode,
      devName,
      devBrand,
      devSpecifications,
      devPower,
      devCategoryId,
      devPersonId,
      devManufacturersName,
      devSupplierName,
      devDesc,
      devStatus,
      devCode,
      devUseDate,
      devManufactureDate,
    } = devicesItem;
    return (
      <div>
        <div className="device-list">
          <div className="title">
            <Input
              className="title-input"
              placeholder="设备名"
              value={queryMap.devName}
              onChange={this.changeDevName}
            />
            <Input
              className="title-input"
              placeholder="设备编号"
              value={queryMap.devCode}
              onChange={this.changeDevCode}
            />
            <Button className="title-query" type="ghost" onClick={this.getDevices}>
              {'查询'}
            </Button>
            <Button className="title-add" type="primary" onClick={() => this.showModal('新增设备', {})}>
              {'新增'}
            </Button>
            {/* <Button className="title-delete" type="danger">
              {'报废'}
            </Button> */}
          </div>
          <Table
            rowSelection={this.rowSelection}
            columns={columns(this.showModal, this.putDeviceStatusById)}
            dataSource={devicesList}
            pagination={page}
            onChange={this.pageChange}
            scroll={{
              x: 1600,
            }}
          />
        </div>
        {this.state.visible && (
          <Modal
            title={title}
            visible={this.state.visible}
            onOk={this.handleOk}
            maskClosable={false}
            width={'728px'}
            onCancel={this.handleCancel}>
            {this.state.visible && (
              <Form>
                <Row className="device-list-row-flex">
                  <Col span={12}>
                    <Form.Item label="市公司" {...formItemLayout}>
                      {getFieldDecorator('devCompanyName', {
                        rules: [
                          {
                            required: true,
                            message: '请输入市公司',
                          },
                        ],
                        initialValue: devCompanyName,
                      })(<Input placeholder={'请输入市公司'} />)}
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="油库" {...formItemLayout}>
                      {getFieldDecorator('devOilName', {
                        rules: [
                          {
                            required: true,
                            message: '请输入油库',
                          },
                        ],
                        initialValue: devOilName,
                      })(<Input placeholder={'请输入油库'} />)}
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="油库编号" {...formItemLayout}>
                      {getFieldDecorator('devOilCode', {
                        rules: [
                          {
                            required: true,
                            message: '请输入设备编号',
                          },
                        ],
                        initialValue: devOilCode,
                      })(<Input placeholder={'请输入设备编号'} />)}
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="设备编号" {...formItemLayout}>
                      {getFieldDecorator('devCode', {
                        rules: [
                          {
                            required: true,
                            message: '请输入设备编号',
                          },
                        ],
                        initialValue: devCode,
                      })(<Input placeholder={'请输入设备编号'} />)}
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="设备名称" {...formItemLayout}>
                      {getFieldDecorator('devName', {
                        rules: [
                          {
                            required: true,
                            message: '请输入设备名称',
                          },
                        ],
                        initialValue: devName,
                      })(<Input placeholder={'请输入设备名称及编号'} />)}
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="品牌" {...formItemLayout}>
                      {getFieldDecorator('devBrand', {
                        rules: [
                          {
                            required: true,
                            message: '请输入品牌',
                          },
                        ],
                        initialValue: devBrand,
                      })(<Input placeholder={'请输入品牌'} />)}
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="规格型号" {...formItemLayout}>
                      {getFieldDecorator('devSpecifications', {
                        rules: [
                          {
                            required: true,
                            message: '请输入规格型号',
                          },
                        ],
                        initialValue: devSpecifications,
                      })(<Input placeholder={'请输入规格型号'} />)}
                    </Form.Item>{' '}
                  </Col>

                  <Col span={12}>
                    <Form.Item label="功率" {...formItemLayout}>
                      {getFieldDecorator('devPower', {
                        rules: [
                          {
                            required: true,
                            message: '请输入功率',
                          },
                        ],
                        initialValue: devPower,
                      })(<Input placeholder={'请输入功率'} />)}
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="设备类别" {...formItemLayout}>
                      {getFieldDecorator('devCategoryId', {
                        rules: [
                          {
                            required: true,
                            message: '请选择设备类别',
                          },
                        ],
                        initialValue: devCategoryId,
                      })(
                        <TreeSelect
                          dropdownStyle={{ maxHeight: 320, overflow: 'auto' }}
                          placeholder="请选择所属设备"
                          treeDefaultExpandAll>
                          {this.getTreeSelectNode(categoryList)}
                        </TreeSelect>,
                      )}
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="责任人" {...formItemLayout}>
                      {getFieldDecorator('devPersonId', {
                        rules: [
                          {
                            required: true,
                            message: '请输入责任人',
                          },
                        ],
                        initialValue: devPersonId,
                      })(<Input placeholder={'请输入责任人'} />)}
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="生产厂商" {...formItemLayout}>
                      {getFieldDecorator('devManufacturersName', {
                        rules: [
                          {
                            required: true,
                            message: '请输入生产厂商',
                          },
                        ],
                        initialValue: devManufacturersName,
                      })(<Input placeholder={'请输入生产厂商'} />)}
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="供应商" {...formItemLayout}>
                      {getFieldDecorator('devSupplierName', {
                        rules: [
                          {
                            required: true,
                            message: '请输入供应商',
                          },
                        ],
                        initialValue: devSupplierName,
                      })(<Input placeholder={'请输入供应商'} />)}
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="出厂日期" {...formItemLayout}>
                      {getFieldDecorator('devManufactureDate', {
                        rules: [
                          {
                            required: true,
                            message: '请选择出厂日期',
                          },
                        ],
                        initialValue: devManufactureDate && moment(devManufactureDate),
                      })(<DatePicker showTime style={{ width: '100%' }} format={dateFormat} />)}
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="使用日期" {...formItemLayout}>
                      {getFieldDecorator('devUseDate', {
                        rules: [
                          {
                            required: true,
                            message: '请选择使用日期',
                          },
                        ],
                        initialValue: devUseDate && moment(devUseDate),
                      })(<DatePicker showTime style={{ width: '100%' }} format={dateFormat} />)}
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="设备状态	" {...formItemLayout}>
                      {getFieldDecorator('devStatus', {
                        rules: [
                          {
                            required: true,
                            message: '请选择设备状态',
                          },
                        ],
                        initialValue: devStatus,
                      })(
                        <Select placeholder="请选择设备状态">
                          <Option value="使用中">使用中</Option>
                          <Option value="停止">停止</Option>
                          <Option value="报废">报废</Option>
                          <Option value="保养">保养</Option>
                          <Option value="维修">维修</Option>
                        </Select>,
                      )}
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item label="备注" {...formTextLayout}>
                  {getFieldDecorator('devDesc', {
                    initialValue: devDesc,
                  })(<Input type="textarea" placeholder={'请输入备注'} />)}
                </Form.Item>
              </Form>
            )}
          </Modal>
        )}

        <EquipmentService deviceItem={this.state.propsItem} />
      </div>
    );
  }
}

const DeviceList = Form.create()(DeviceListMain);

export default DeviceList;
