import React from 'react';
import './index.less';
import { Input, Button, Table, Modal, Form, Select, message } from 'antd';
import { columns, PassiveStatus, PassiveType } from './constant';
import ajax from '../../../utils/ajax';

const { Option } = Select;

/**
 * 被动计划
 */
class PassivePlanMain extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      title: '',
      passiveItem: {},
      passiveList: [],
      page: {
        current: 1,
        pageSize: 10,
        total: 0,
      },
    };
  }

  componentWillMount() {
    this.passiveListPage();
  }

  // 设备被动计划列表
  passiveListPage = async () => {
    const { page } = this.state;
    const pageDetail = {
      pageNum: page.current,
      pageSize: page.pageSize,
    };
    const res = await ajax.passiveListPage(pageDetail);
    if (res.code === '10001') {
      this.setState({
        passiveList: res && res.data && res.data.list,
        page: {
          current: page.current,
          pageSize: page.pageSize,
          total: res.data.total,
        },
      });
    }
  };

  showModal = (type, passiveItem = {}) => {
    let title = '修改被动计划';
    if (type === 'add') {
      title = '新增被动计划';
    }
    this.setState({
      visible: true,
      title,
      passiveItem,
    });
  };

  handleOk = () => {
    const { form, deviceItem } = this.props;
    const { id } = this.state.passiveItem;
    form.validateFieldsAndScroll((error, values) => {
      if (!error) {
        this.setState({
          visible: false,
          title: '',
        });
        if (!id) {
          // 新增
          const detail = Object.assign({}, values, {
            passiveDevId: deviceItem.id,
          });
          this.passiveSavePassive(detail);
        } else {
          // 修改
          const detail = Object.assign({}, values, {
            id,
            passiveDevId: deviceItem.id,
          });
          this.passiveUpdatePassive(detail);
        }
      }
    });
  };

  // 添加设备被动计划
  passiveSavePassive = async detail => {
    const res = await ajax.passiveSavePassive(detail);
    if (res.code === '10001') {
      this.passiveListPage();
    }
  };

  // 更新设备被动计划
  passiveUpdatePassive = async detail => {
    const res = await ajax.passiveUpdatePassive(detail);
    if (res.code === '10001') {
      this.passiveListPage();
    }
  };

  // 删除设备被动计划
  passiveDeletePassive = async id => {
    const detail = {
      id,
      isdel: 1,
    };
    const res = await ajax.passiveDeletePassive(detail);
    if (res.code === '10001') {
      message.success('删除成功');
      this.passiveListPage();
    }
  };

  pageChange = pagination => {
    this.setState(
      {
        page: pagination,
      },
      () => {
        this.passiveListPage();
      },
    );
  };

  handleCancel = e => {
    this.setState({
      visible: false,
      title: '',
    });
  };

  rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      this.props.changeState('passivePlan', selectedRows[0]);
    },
    // getCheckboxProps: record => ({
    //   disabled: record.devStatus !== '使用中', // Column configuration not to be checked
    //   // name: record.name,
    // }),
    type: 'radio',
  };

  render() {
    const { deviceItem } = this.props;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    const { passiveList, passiveItem, page } = this.state;
    const { passiveType, passiveStatus } = passiveItem;
    return (
      <div>
        <div className="equipment-failure">
          <div className="title">
            {/* <Input className="title-input" placeholder="用户名字/显示名字" />
            <Button className="title-query" type="ghost">
              {'查询'}
            </Button> */}
            <Button
              className="title-add"
              type="primary"
              onClick={() => this.showModal('add', {})}
              disabled={!deviceItem.id}>
              {'新增'}
            </Button>
            {/* <Button className="title-delete" type="primary">
              {'刷新'}
            </Button> */}
          </div>
          <Table
            columns={columns(this.showModal, this.passiveDeletePassive)}
            dataSource={passiveList}
            pagination={page}
            onChange={this.pageChange}
            rowSelection={this.rowSelection}
          />
        </div>
        {this.state.visible && (
          <Modal
            title={this.state.title}
            rowKey={'id'}
            visible={this.state.visible}
            onOk={this.handleOk}
            maskClosable={false}
            onCancel={this.handleCancel}
            width={'548px'}>
            <Form>
              <Form.Item label="计划类型" {...formItemLayout}>
                {getFieldDecorator('passiveType', {
                  rules: [
                    {
                      required: true,
                      message: '请选择计划类型',
                    },
                  ],
                  initialValue: passiveType,
                })(
                  <Select placeholder="请选择计划类型">
                    <Option value={1}>{'维修'}</Option>
                    <Option value={2}>{'保养'}</Option>
                  </Select>,
                )}
              </Form.Item>
              <Form.Item label="计划状态" {...formItemLayout}>
                {getFieldDecorator('passiveStatus', {
                  rules: [
                    {
                      required: true,
                      message: '请选择被动计划状态',
                    },
                  ],
                  initialValue: passiveStatus,
                })(
                  <Select placeholder="请选择被动计划状态">
                    <Option value={1}>{'待处理'}</Option>
                    <Option value={2}>{'处理中'}</Option>
                    <Option value={3}>{'处理成功'}</Option>
                    <Option value={4}>{'处理失败'}</Option>
                  </Select>,
                )}
              </Form.Item>
            </Form>
          </Modal>
        )}
      </div>
    );
  }
}

const PassivePlan = Form.create()(PassivePlanMain);

export default PassivePlan;
