import React from 'react';
import './index.less';
import { Tree, Form, Input, Row, Col, Button, Select } from 'antd';

const { TreeNode } = Tree;
const Option = Select.Option;

/**
 * 设备类别
 */

class EquipmentCategoryMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onSelect = (selectedKeys, info) => {
    window.console.log('selected', selectedKeys, info);
  };

  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    const defaultExpandAll = true;
    const formDisabled = true;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="equipment-category">
        <Tree
          defaultExpandAll={defaultExpandAll}
          className="equipment-category-tree"
          defaultExpandedKeys={this.state.expandedKeys}
          onSelect={this.onSelect}
        >
          <TreeNode title="parent 1" key="0-0">
            <TreeNode title="parent 1-0" key="0-0-0">
              <TreeNode title="leaf" key="0-0-0-0" />
              <TreeNode title="leaf" key="0-0-0-1" />
              <TreeNode title="leaf" key="0-0-0-2" />
            </TreeNode>
            <TreeNode title="parent 1-1" key="0-0-1">
              <TreeNode title="leaf" key="0-0-1-0" />
            </TreeNode>
            <TreeNode title="parent 1-2" key="0-0-2">
              <TreeNode title="leaf" key="0-0-2-0" />
              <TreeNode title="leaf" key="0-0-2-1" />
            </TreeNode>
          </TreeNode>
        </Tree>
        <div className="equipment-category-form">
          <p className="equipment-category-fom-title">类别属性</p>
          <Form>
            <Row className="equipment-category-row-flex">
              <Col span={12}>
                <Form.Item label="名称" {...formItemLayout}>
                  {getFieldDecorator('name', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your username',
                      },
                    ],
                  })(<Input />)}
                </Form.Item>
              </Col>
              <Col span={12}>
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
              </Col>

              <Col span={12}>
                <Form.Item label="描述" {...formItemLayout}>
                  {getFieldDecorator('description', {
                    rules: [],
                  })(<Input />)}
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="父类" {...formItemLayout}>
                  {getFieldDecorator('category', {
                    rules: [{
                      required: true,
                      message: 'Please input your username',
                    }],
                  })(
                    <Select placeholder="请选择父类">
                      <Option value="总类">总类</Option>
                      <Option value="通用设备">通用设备</Option>
                      <Option value="工具类">工具类</Option>
                      <Option value="机械设备">机械设备</Option>
                    </Select>,
                  )}
                </Form.Item>
              </Col>

              <Col span={12}>
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
              </Col>
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
