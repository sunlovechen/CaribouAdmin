import React from 'react';
import './index.less';
import { Tree, Form, Input, Row, Col, Button, Select, TreeSelect } from 'antd';
import ajax from '../../utils/ajax';

const { TreeNode } = Tree;
const { TreeSelectNode } = TreeSelect.TreeNode;

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
    };
  }

  async componentWillMount() {
    const res = await ajax.getCategorys();
    if (res.code === '10001') {
      this.setState({
        categoryList: (res && res.data) || [],
      });
    }
    window.console.log(res.data);
  }

  onSelect = async (selectedKeys, info) => {
    if (selectedKeys[0]) {
      const res = await ajax.getCategoryById(selectedKeys);
      if (res.code === '10001') {
        this.setState({
          categoryDetail: res && res.data,
        });
      }
    } else {
      this.setState({
        categoryDetail: {},
      });
    }

    window.console.log('selected', selectedKeys, info);
  };

  // 生成TreeNode
  getTreeNode = (list = []) => {
    return list.map(item => {
      return <TreeNode title={item.categoryName} key={item.id}>
        {item.soilCategoriesList && this.getTreeNode(item.soilCategoriesList)}
      </TreeNode>
    });
  }

  // 生成TreeSelectNode
  getTreeSelectNode = (list = []) => {
    return list.map(item => {
      return <TreeSelectNode value={item.id} title={item.categoryName} key={item.id}>
        {item.soilCategoriesList && this.getTreeNode(item.soilCategoriesList)}
      </TreeSelectNode>
    });
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    const defaultExpandAll = true;
    const formDisabled = true;
    const { getFieldDecorator } = this.props.form;
    const { categoryList, categoryDetail } = this.state;
    const { categoryPid, categoryName } = categoryDetail;
    window.console.log('asd', categoryList, categoryDetail);
    return (
      <div className="equipment-category">
        <Tree
          defaultExpandAll={defaultExpandAll}
          className="equipment-category-tree"
          defaultExpandedKeys={this.state.expandedKeys}
          onSelect={this.onSelect}
        >
          {this.getTreeNode(categoryList)}
        </Tree>
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
                    <span>父设备</span>
                  </Col>
                  <Col span={16}>
                    <TreeSelect
                      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                      placeholder="请选择所属设备"
                      onChange={this.onChange}
                    >
                      {this.getTreeSelectNode(categoryList)}
                    </TreeSelect>
                  </Col>
                </Row> */}
                <Form.Item label="所属设备" {...formItemLayout}>
                  {getFieldDecorator('categoryPid', {
                    rules: [{
                      required: true,
                      message: '请选择所属设备',
                    }],
                    initialValue: categoryPid,
                  })(
                    <div>
                      <TreeSelect
                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                        placeholder="请选择所属设备"
                        treeDefaultExpandAll
                      >
                        <TreeSelectNode value={''} title={'父级设备'} key={0}>
                          {this.getTreeSelectNode(categoryList)}
                        </TreeSelectNode>
                      </TreeSelect></div>,
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
            <Button type="primary">{'保存'}</Button>
            <Button type="primary">{'删除'}</Button>
          </div>
        </div>
      </div>
    );
  }
}

const EquipmentCategory = Form.create()(EquipmentCategoryMain);

export default EquipmentCategory;
