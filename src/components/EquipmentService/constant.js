import React from 'react';
import { Tag } from 'antd';

export const columns = showModal => {
  return [
    {
      title: '名称',
      dataIndex: 'username',
    },
    {
      title: '故障编号',
      dataIndex: 'name',
    },
    {
      title: '故障等级',
      dataIndex: 'mail',
    },
    {
      title: '故障类别',
      dataIndex: 'phone',
    },
    {
      title: '故障状态',
      dataIndex: 'status',
      width: '120px',
      render: text => {
        return <Tag color={'blue'}>{text}</Tag>
      },
    },
    {
      title: '描述',
      dataIndex: 'description',
      width: '120px',
      render: text => {
        return (
          <p className="hide-text" style={{ width: '120px' }} title={text}>
            {text}
          </p>
        );
      },
    },
    {
      title: '操作',
      dataIndex: 'id',
      render: (_text, item) => {
        return <div><a onClick={() => showModal('edit', item)}>修改 </a> <a> 删除</a></div>;
      },
    },
  ]
};
