import React from 'react';
import './index.less';
import { Input, Button, Table, Modal, Form, Select, Row, Col, TreeSelect, DatePicker, message, Radio } from 'antd';
import {
  columns,
  typeList,
  typeValueList,
  devSoilCodeChange,
  devBrandChange,
  devStandardsChange,
  devPowerChange,
  devManufacturersNameChange,
  devManufactureDateChange,
  devPersonIdChange,
  devStatusChange,
  devSupplierNameChange,
  devNameChange,
  devUseDateChange,
} from './constant';
import ajax from '../../utils/ajax';
import moment from 'moment';
import EquipmentService from '../EquipmentService';

const { Option } = Select;
const TreeSelectNode = TreeSelect.TreeNode;

const dateFormat = 'YYYY-MM-DD';

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
    const queryMaps = Object.assign({}, queryMap, {
      devType: typeValueList[type],
    });
    const detail = Object.assign({}, pageDetail, {
      queryMap: queryMaps,
    });
    const res = await ajax.getDevices(detail);
    if (res.code === '10001') {
      this.setState({
        devicesList: res && res.data && res.data.list,
        page: {
          current: page.current,
          pageSize: page.pageSize,
          total: parseInt(res.data.total),
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
    const { type } = this.state;
    form.validateFieldsAndScroll((error, values) => {
      if (!error) {
        this.setState({
          visible: false,
          title: '',
        });
        if (!id) {
          const detail = Object.assign({}, values, {
            // devManufactureDate: moment(values.devManufactureDate).format(dateFormat),
            // devUseDate: moment(values.devUseDate).format(dateFormat),
            devProductDate: moment(values.devProductDate).format(dateFormat),
            devProductUsedDate: moment(values.devProductUsedDate).format(dateFormat),
            devCleanSoilDate: moment(values.devCleanSoilDate).format(dateFormat),
            devType: typeValueList[type],
          });
          this.postDevice(detail);
        } else {
          const detail = Object.assign({}, values, {
            id,
            // devManufactureDate: moment(values.devManufactureDate).format(dateFormat),
            // devUseDate: moment(values.devUseDate).format(dateFormat),
            devProductDate: moment(values.devProductDate).format(dateFormat),
            devProductUsedDate: moment(values.devProductUsedDate).format(dateFormat),
            devCleanSoilDate: moment(values.devCleanSoilDate).format(dateFormat),
            devType: typeValueList[type],
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
    this.setState(
      {
        type: value,
        propsItem: {},
      },
      () => {
        this.getDevices();
      },
    );
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
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          propsItem: selectedRows[0],
        });
      },
      selectedRowKeys: [this.state && this.state.propsItem && this.state.propsItem.id],
      type: 'radio',
    };
    const { devicesList, queryMap, page, title, devicesItem, categoryList, type } = this.state;
    const {
      devCityCompany,
      devSoilName,
      devIsOk,
      devCategoryId,
      devPauseDesc,
      devMemorial,
      devStatus,
      devProductUsedDate,
      devLlfw,
      devCleanSoilDate,
      devNameCode,
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
            rowSelection={rowSelection}
            columns={columns(this.showModal, this.putDeviceStatusById, type)}
            dataSource={devicesList}
            rowKey="id"
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
                      {getFieldDecorator('devCityCompany', {
                        rules: [
                          {
                            required: true,
                            message: '请输入市公司',
                          },
                        ],
                        initialValue: devCityCompany,
                      })(<Input disabled={allDisabled} placeholder={'请输入市公司'} />)}
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="油库" {...formItemLayout}>
                      {getFieldDecorator('devSoilName', {
                        rules: [
                          {
                            required: true,
                            message: '请输入油库',
                          },
                        ],
                        initialValue: devSoilName,
                      })(<Input disabled={allDisabled} placeholder={'请输入油库'} />)}
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label={devSoilCodeChange[type].value} {...formItemLayout}>
                      {getFieldDecorator(devSoilCodeChange[type].key, {
                        rules: [
                          {
                            required: true,
                            message: `请输入${devSoilCodeChange[type].value}`,
                          },
                        ],
                        initialValue: devicesItem[devSoilCodeChange[type].key],
                      })(<Input disabled={allDisabled} placeholder={`请输入${devSoilCodeChange[type].value}`} />)}
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label={devNameChange[type]} {...formItemLayout}>
                      {getFieldDecorator('devNameCode', {
                        rules: [
                          {
                            required: true,
                            message: `请输入${devNameChange[type]}`,
                          },
                        ],
                        initialValue: devNameCode,
                      })(<Input disabled={allDisabled} placeholder={`请输入${devNameChange[type]}`} />)}
                    </Form.Item>
                  </Col>

                  {devBrandChange[type] && (
                    <Col span={12}>
                      <Form.Item label={devBrandChange[type].value} {...formItemLayout}>
                        {getFieldDecorator(devBrandChange[type].key, {
                          rules: [
                            {
                              required: true,
                              message: `请输入${devBrandChange[type].value}`,
                            },
                          ],
                          initialValue: devicesItem[devBrandChange[type].key],
                        })(<Input disabled={allDisabled} placeholder={`请输入${devBrandChange[type].value}`} />)}
                      </Form.Item>
                    </Col>
                  )}

                  <Col span={12}>
                    <Form.Item label={devStandardsChange[type].value} {...formItemLayout}>
                      {getFieldDecorator(devStandardsChange[type].key, {
                        rules: [
                          {
                            required: true,
                            message: `请输入${devStandardsChange[type].value}`,
                          },
                        ],
                        initialValue: devicesItem[devStandardsChange[type].key],
                      })(<Input disabled={allDisabled} placeholder={`请输入${devStandardsChange[type].value}`} />)}
                    </Form.Item>{' '}
                  </Col>

                  {devPowerChange[type] &&
                    (devPowerChange[type].key === 'devRksl' ? (
                      <Col span={12}>
                        <Form.Item label={devPowerChange[type].value} {...formItemLayout}>
                          {getFieldDecorator(devPowerChange[type].key, {
                            rules: [
                              {
                                required: true,
                                message: `请输入${devPowerChange[type].value}`,
                              },
                            ],
                            initialValue: devicesItem[devPowerChange[type].key],
                          })(
                            <Radio.Group disabled={allDisabled}>
                              <Radio value={1}>单</Radio>
                              <Radio value={2}>双</Radio>
                            </Radio.Group>,
                          )}
                        </Form.Item>
                      </Col>
                    ) : (
                      <Col span={12}>
                        <Form.Item label={devPowerChange[type].value} {...formItemLayout}>
                          {getFieldDecorator(devPowerChange[type].key, {
                            rules: [
                              {
                                required: true,
                                message: `请输入${devPowerChange[type].value}`,
                              },
                            ],
                            initialValue: devicesItem[devPowerChange[type].key],
                          })(<Input disabled={allDisabled} placeholder={`请输入${devPowerChange[type].value}`} />)}
                        </Form.Item>
                      </Col>
                    ))}

                  {/* <Col span={12}>
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
                  </Col> */}

                  {devPersonIdChange[type] && (
                    <Col span={12}>
                      <Form.Item label="是否完好" {...formItemLayout}>
                        {getFieldDecorator('devIsOk', {
                          rules: [
                            {
                              required: true,
                              message: '请选择是否完好',
                            },
                          ],
                          initialValue: devIsOk,
                        })(
                          <Radio.Group disabled={allDisabled}>
                            <Radio value={1}>是</Radio>
                            <Radio value={2}>否</Radio>
                          </Radio.Group>,
                        )}
                      </Form.Item>
                    </Col>
                  )}

                  {devManufacturersNameChange[type] && (
                    <Col span={12}>
                      <Form.Item label={devManufacturersNameChange[type].value} {...formItemLayout}>
                        {getFieldDecorator(devManufacturersNameChange[type].key, {
                          rules: [
                            {
                              required: true,
                              message: `请输入${devManufacturersNameChange[type].value}`,
                            },
                          ],
                          initialValue: devicesItem[devManufacturersNameChange[type].key],
                        })(
                          <Input
                            disabled={allDisabled}
                            placeholder={`请输入${devManufacturersNameChange[type].value}`}
                          />,
                        )}
                      </Form.Item>
                    </Col>
                  )}

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
                          <Radio.Group disabled={allDisabled}>
                            <Radio value={1}>是</Radio>
                            <Radio value={2}>否</Radio>
                          </Radio.Group>,
                        )}
                      </Form.Item>
                    </Col>
                  )}

                  {devSupplierNameChange[type] && (
                    <Col span={12}>
                      <Form.Item label="停用原因" {...formItemLayout}>
                        {getFieldDecorator('devPauseDesc', {
                          initialValue: devPauseDesc,
                        })(<Input disabled={allDisabled} placeholder={'请输入停用原因'} />)}
                      </Form.Item>
                    </Col>
                  )}

                  {devManufactureDateChange[type] && (
                    <Col span={12}>
                      <Form.Item label={devManufactureDateChange[type].value} {...formItemLayout}>
                        {getFieldDecorator(devManufactureDateChange[type].key, {
                          rules: [
                            {
                              required: true,
                              message: `请选择${devManufactureDateChange[type].value}`,
                            },
                          ],
                          initialValue:
                            devicesItem[devManufactureDateChange[type].key] &&
                            moment(devicesItem[devManufactureDateChange[type].key]),
                        })(
                          <DatePicker disabled={allDisabled} style={{ width: '100%' }} format={dateFormat} />,
                        )}
                      </Form.Item>
                    </Col>
                  )}

                  <Col span={12}>
                    <Form.Item label={devUseDateChange[type]} {...formItemLayout}>
                      {getFieldDecorator('devProductUsedDate', {
                        rules: [
                          {
                            required: true,
                            message: `请选择${devManufactureDateChange[type]}`,
                          },
                        ],
                        initialValue: devProductUsedDate && moment(devProductUsedDate),
                      })(<DatePicker disabled={allDisabled} style={{ width: '100%' }} format={dateFormat} />)}
                    </Form.Item>
                  </Col>

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
                        })(
                          <DatePicker disabled={allDisabled} style={{ width: '100%' }} format={dateFormat} />,
                        )}
                      </Form.Item>
                    </Col>
                  )}
                </Row>
                <Form.Item label="备注" {...formTextLayout}>
                  {getFieldDecorator('devMemorial', {
                    initialValue: devMemorial,
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
