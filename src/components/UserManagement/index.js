import React from 'react';
import './index.less';
import { Input, Button, Table } from 'antd';
import { data, columns } from './constant';

/**
 * 用户管理
 */
class UserManagement extends React.PureComponent {

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
    return (<div className="user-management">
      <div className="title">
        <Input className="title-input" placeholder="用户名字/显示名字" />
        <Button className="title-query" type="ghost">{'查询'}</Button>
        <Button className="title-add" type="primary">{'新增'}</Button>
        <Button className="title-delete" type="danger">{'批量删除'}</Button>
      </div>
      <Table rowSelection={this.rowSelection} columns={columns} dataSource={data} />
    </div>);
  }

}

export default UserManagement;
