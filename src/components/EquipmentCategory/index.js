import React from 'react';
import './index.less';
import { Tree, Form, Input, Row, Col, Button, Select, TreeSelect } from 'antd';
import ajax from '../../utils/ajax';

const { TreeNode } = Tree;
const TreeSelectNode = TreeSelect.TreeNode;

const Option = Select.Option;

/**
 * 设备类别
 */

class EquipmentCategoryMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      categoryDetail: {},
      addOrEdit: 'add',
    };
  }

  componentWillMount() {
    this.getCategorys();
  }

  onSelect = async (selectedKeys, info) => {
    if (selectedKeys[0]) {
      const res = await ajax.getCategoryById(selectedKeys);
      if (res.code === '10001') {
        this.setState({
          categoryDetail: res && res.data,
          addOrEdit: 'edit',
        });
      }
    } else {
      this.setState({
        categoryDetail: {},
        addOrEdit: 'add',
      });
    }

    window.console.log('selected', selectedKeys, info);
  };

  onTreeSelectChange = e => {
    window.console.log(e);
    const { categoryDetail } = this.state;
    const { categoryName } = categoryDetail;
    this.setState({
      categoryDetail: {
        categoryName,
        categoryPid: e,
      },
    });
  };

  // 生成TreeNode
  getTreeNode = (list = []) => {
    return list.map(item => {
      return (
        <TreeNode title={item.categoryName} key={item.id}>
          {item.soilCategoriesList && this.getTreeNode(item.soilCategoriesList)}
        </TreeNode>
      );
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

  // 获取类别
  getCategorys = async () => {
    const res = await ajax.getCategorys();
    if (res.code === '10001') {
      this.setState({
        categoryList: (res && res.data) || [],
      });
    }
  };

  // 更新
  updateCategory = async () => {
    const { form } = this.props;
    form.validateFieldsAndScroll(async (error, values) => {
      if (!error) {
        const { categoryDetail } = this.state;
        window.console.log(this.props.form.getFieldsValue(), categoryDetail);
        const fromContent = this.props.form.getFieldsValue();
        const detail = Object.assign({}, fromContent, {
          id: categoryDetail.id,
        });
        const res = await ajax.updateCategory(detail);
        if (res.code === '10001') {
          this.getCategorys();
          this.props.form.resetFields();
        }
      }
    });
  };

  // 新增
  postCategory = async () => {
    const { form } = this.props;
    form.validateFieldsAndScroll(async (error, values) => {
      if (!error) {
        window.console.log(this.props.form.getFieldsValue());
        const fromContent = this.props.form.getFieldsValue();
        const detail = {
          categoryPid: fromContent.categoryPid,
          categoryName: fromContent.categoryName,
        };
        const res = await ajax.postCategory(detail);
        if (res.code === '10001') {
          this.getCategorys();
          this.props.form.resetFields();
        }
      }
    });
  };

  // 删除
  delCategory = async () => {
    const { form } = this.props;
    form.validateFieldsAndScroll(async (error, values) => {
      if (!error) {
        const { categoryDetail } = this.state;
        const detail = {
          id: categoryDetail.id,
          isdel: 1,
        };
        const res = await ajax.delCategory(detail);
        if (res.code === '10001') {
          this.getCategorys();
          this.props.form.resetFields();
        }
      }
    });
  };

  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    const defaultExpandAll = true;
    const { getFieldDecorator } = this.props.form;
    const { categoryList, categoryDetail, addOrEdit } = this.state;
    const { categoryPid, categoryName } = categoryDetail;
    window.console.log('asd', categoryList, categoryDetail);
    return (
      <div className="equipment-category">
        <div>
          <p className="equipment-category-fom-title">类别架构树</p>
          <Tree
            defaultExpandAll={defaultExpandAll}
            className="equipment-category-tree"
            defaultExpandedKeys={this.state.expandedKeys}
            onSelect={this.onSelect}
          >
            {this.getTreeNode(categoryList)}
          </Tree>
        </div>
        <div className="equipment-category-form">
          <p className="equipment-category-fom-title">类别属性</p>
          <Form>
            <Row className="equipment-category-row-flex">
              <Col span={12}>
                <Form.Item label="名称" {...formItemLayout}>
                  {getFieldDecorator('categoryName', {
                    rules: [
                      {
                        required: true,
                        message: '请输入类别名称',
                      },
                    ],
                    initialValue: categoryName,
                  })(<Input placeholder="请输入类别名称" />)}
                </Form.Item>
              </Col>
              {/* <Col span={12}>
                <Form.Item label="类别" {...formItemLayout}>
                  {getFieldDecorator('categoryName', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your username',
                      },
                    ],
                  })(<Input />)}
                </Form.Item>
              </Col> */}

              {/* <Col span={12}>
                <Form.Item label="描述" {...formItemLayout}>
                  {getFieldDecorator('description', {
                    rules: [],
                  })(<Input />)}
                </Form.Item>
              </Col> */}

              <Col span={12}>
                {/* <Row>
                  <Col span={6} className="category-tree-select">
                    <span>所属设备</span>
                  </Col>
                  <Col span={16}>
                    <TreeSelect
                      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                      placeholder="请选择所属设备"
                      onChange={this.onTreeSelectChange}
                      value={categoryPid}
                      treeDefaultExpandAll
                    >
                    <TreeSelectNode value={0} title={'父级设备'} key={0}>
                        {this.getTreeSelectNode(categoryList)}
                      </TreeSelectNode>
                    </TreeSelect>
                  </Col>
                </Row> */}
                <Form.Item label="所属设备" {...formItemLayout}>
                  {getFieldDecorator('categoryPid', {
                    rules: [
                      {
                        required: true,
                        message: '请选择所属设备',
                      },
                    ],
                    initialValue: categoryPid,
                  })(
                    <TreeSelect
                      dropdownStyle={{ maxHeight: 320, overflow: 'auto' }}
                      placeholder="请选择所属设备"
                      treeDefaultExpandAll>
                      <TreeSelectNode value={0} title={'父级设备'} key={0}>
                        {this.getTreeSelectNode(categoryList)}
                      </TreeSelectNode>
                    </TreeSelect>,
                  )}
                </Form.Item>
              </Col>

              {/* <Col span={12}>
                <Form.Item label="创建者" {...formItemLayout}>
                  {getFieldDecorator('username', {
                    rules: [],
                  })(<Input disabled={formDisabled} />)}
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="创建时间" {...formItemLayout}>
                  {getFieldDecorator('username', {
                    rules: [],
                  })(<Input disabled={formDisabled} />)}
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="最后修改者" {...formItemLayout}>
                  {getFieldDecorator('username', {
                    rules: [],
                  })(<Input disabled={formDisabled} />)}
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="最后修改时间" {...formItemLayout}>
                  {getFieldDecorator('username', {
                    rules: [],
                  })(<Input disabled={formDisabled} />)}
                </Form.Item>
              </Col> */}
            </Row>
          </Form>
          <div className="equipment-category-button-list">
            {addOrEdit === 'add' && (
              <Button type="primary" onClick={this.postCategory}>
                {'新增'}
              </Button>
            )}
            {addOrEdit === 'edit' && (
              <Button type="primary" onClick={this.updateCategory}>
                {'修改'}
              </Button>
            )}
            {addOrEdit === 'edit' && (
              <Button type="primary" onClick={this.delCategory}>
                {'删除'}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const EquipmentCategory = Form.create()(EquipmentCategoryMain);

export default EquipmentCategory;
