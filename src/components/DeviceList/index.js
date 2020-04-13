import React from 'react';
import './index.less';
import { Input, Button, Table, Modal, Form, Select, Row, Col, TreeSelect, DatePicker, message, Radio } from 'antd';
import {
  columns,
  typeList,
  typeValueList,
  devOilCodeChange,
  devBrandChange,
  devSpecificationsChange,
  devPowerChange,
  devManufacturersNameChange,
  devManufactureDateChange,
  devPersonIdChange,
  devStatusChange,
  devSupplierNameChange,
} from './constant';
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
      type: 'flowmeter', // 默认类型设备
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
    const { page, queryMap, type } = this.state;
    const pageDetail = {
      pageNum: page.current,
      pageSize: page.pageSize,
    };
    // const queryMaps = Object.assign({}, queryMap, {
    //   devType: typeValueList[type],
    // });
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

  changeType = value => {
    this.setState({
      type: value,
    });
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
    const { devicesList, queryMap, page, title, devicesItem, categoryList, type } = this.state;
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
      devLlfw,
      devCleanSoilDate,
    } = devicesItem;
    const allDisabled = title === '设备详情';
    return (
      <div>
        <div className="device-list">
          <div className="title">
            <Select value={type} onChange={this.changeType} className="title-select">
              {typeList.map(item => {
                return (
                  <Option value={item.key} key={item.key}>
                    {item.value}
                  </Option>
                );
              })}
            </Select>
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
            columns={columns(this.showModal, this.putDeviceStatusById, type)}
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
            onOk={allDisabled ? this.handleCancel : this.handleOk}
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
                      })(<Input disabled={allDisabled} placeholder={'请输入市公司'} />)}
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
                      })(<Input disabled={allDisabled} placeholder={'请输入油库'} />)}
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label={devOilCodeChange[type]} {...formItemLayout}>
                      {getFieldDecorator('devOilCode', {
                        rules: [
                          {
                            required: true,
                            message: `请输入${devOilCodeChange[type]}`,
                          },
                        ],
                        initialValue: devOilCode,
                      })(<Input disabled={allDisabled} placeholder={`请输入${devOilCodeChange[type]}`} />)}
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
                      })(<Input disabled={allDisabled} placeholder={'请输入设备编号'} />)}
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
                      })(<Input disabled={allDisabled} placeholder={'请输入设备名称及编号'} />)}
                    </Form.Item>
                  </Col>

                  {devBrandChange[type] && (
                    <Col span={12}>
                      <Form.Item label={devBrandChange[type]} {...formItemLayout}>
                        {getFieldDecorator('devBrand', {
                          rules: [
                            {
                              required: true,
                              message: `请输入${devBrandChange[type]}`,
                            },
                          ],
                          initialValue: devBrand,
                        })(<Input disabled={allDisabled} placeholder={`请输入${devBrandChange[type]}`} />)}
                      </Form.Item>
                    </Col>
                  )}

                  <Col span={12}>
                    <Form.Item label={devSpecificationsChange[type]} {...formItemLayout}>
                      {getFieldDecorator('devSpecifications', {
                        rules: [
                          {
                            required: true,
                            message: `请输入${devSpecificationsChange[type]}`,
                          },
                        ],
                        initialValue: devSpecifications,
                      })(<Input disabled={allDisabled} placeholder={`请输入${devSpecificationsChange[type]}`} />)}
                    </Form.Item>{' '}
                  </Col>

                  {devPowerChange[type] && (
                    <Col span={12}>
                      <Form.Item label={devPowerChange[type]} {...formItemLayout}>
                        {getFieldDecorator('devPower', {
                          rules: [
                            {
                              required: true,
                              message: `请输入${devPowerChange[type]}`,
                            },
                          ],
                          initialValue: devPower,
                        })(<Input disabled={allDisabled} placeholder={`请输入${devPowerChange[type]}`} />)}
                      </Form.Item>
                    </Col>
                  )}

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
                          treeDefaultExpandAll
                          disabled={allDisabled}>
                          {this.getTreeSelectNode(categoryList)}
                        </TreeSelect>,
                      )}
                    </Form.Item>
                  </Col>

                  {devPersonIdChange[type] && (
                    <Col span={12}>
                      <Form.Item label="是否完好" {...formItemLayout}>
                        {getFieldDecorator('devPersonId', {
                          rules: [
                            {
                              required: true,
                              message: '请选择是否完好',
                            },
                          ],
                          initialValue: devPersonId,
                        })(
                          <Radio.Group>
                            <Radio value={'是'}>是</Radio>
                            <Radio value={'否'}>否</Radio>
                          </Radio.Group>,
                        )}
                      </Form.Item>
                    </Col>
                  )}

                  {devManufacturersNameChange[type] && (
                    <Col span={12}>
                      <Form.Item label={devManufacturersNameChange[type]} {...formItemLayout}>
                        {getFieldDecorator('devManufacturersName', {
                          rules: [
                            {
                              required: true,
                              message: `请输入${devManufacturersNameChange[type]}`,
                            },
                          ],
                          initialValue: devManufacturersName,
                        })(<Input disabled={allDisabled} placeholder={`请输入${devManufacturersNameChange[type]}`} />)}
                      </Form.Item>
                    </Col>
                  )}

                  {devSupplierNameChange[type] && (
                    <Col span={12}>
                      <Form.Item label="停用原因" {...formItemLayout}>
                        {getFieldDecorator('devSupplierName', {
                          rules: [
                            {
                              required: true,
                              message: '请输入停用原因',
                            },
                          ],
                          initialValue: devSupplierName,
                        })(<Input disabled={allDisabled} placeholder={'请输入停用原因'} />)}
                      </Form.Item>
                    </Col>
                  )}

                  {devManufactureDateChange[type] && (
                    <Col span={12}>
                      <Form.Item label={devManufactureDateChange[type]} {...formItemLayout}>
                        {getFieldDecorator('devManufactureDate', {
                          rules: [
                            {
                              required: true,
                              message: `请选择${devManufacturersNameChange[type]}`,
                            },
                          ],
                          initialValue: devManufactureDate && moment(devManufactureDate),
                        })(
                          <DatePicker disabled={allDisabled} showTime style={{ width: '100%' }} format={dateFormat} />,
                        )}
                      </Form.Item>
                    </Col>
                  )}

                  <Col span={12}>
                    <Form.Item label={devManufactureDateChange[type]} {...formItemLayout}>
                      {getFieldDecorator('devUseDate', {
                        rules: [
                          {
                            required: true,
                            message: `请选择${devManufacturersNameChange[type]}`,
                          },
                        ],
                        initialValue: devUseDate && moment(devUseDate),
                      })(<DatePicker disabled={allDisabled} showTime style={{ width: '100%' }} format={dateFormat} />)}
                    </Form.Item>
                  </Col>

                  {devStatusChange[type] && (
                    <Col span={12}>
                      <Form.Item label={'是否停用'} {...formItemLayout}>
                        {getFieldDecorator('devStatus', {
                          rules: [
                            {
                              required: true,
                              message: '请选择是否停用',
                            },
                          ],
                          initialValue: devStatus,
                        })(
                          <Radio.Group>
                            <Radio value={'是'}>是</Radio>
                            <Radio value={'否'}>否</Radio>
                          </Radio.Group>,
                        )}
                      </Form.Item>
                    </Col>
                  )}

                   {type === 'flowmeter' && (
                    <Col span={12}>
                      <Form.Item label="流量范围" {...formItemLayout}>
                        {getFieldDecorator('devLlfw', {
                          rules: [
                            {
                              required: true,
                              message: '请输入流量范围',
                            },
                          ],
                          initialValue: devLlfw,
                        })(<Input disabled={allDisabled} placeholder={'请输入流量范围'} />)}
                      </Form.Item>
                    </Col>
                  )}

                   {type === 'oilTank' && (
                    <Col span={12}>
                    <Form.Item label={'最近清罐年月'} {...formItemLayout}>
                      {getFieldDecorator('devCleanSoilDate', {
                        rules: [
                          {
                            required: true,
                            message: '请选择最近清罐年月',
                          },
                        ],
                        initialValue: devCleanSoilDate && moment(devCleanSoilDate),
                      })(<DatePicker disabled={allDisabled} showTime style={{ width: '100%' }} format={dateFormat} />)}
                    </Form.Item>
                  </Col>
                  )}

                </Row>
                <Form.Item label="备注" {...formTextLayout}>
                  {getFieldDecorator('devDesc', {
                    initialValue: devDesc,
                  })(<Input disabled={allDisabled} type="textarea" placeholder={'请输入备注'} />)}
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
