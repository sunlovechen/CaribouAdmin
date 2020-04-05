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
export const data = [
  {
    id: 1,
    username: '用户名1',
    name: '故障编号1',
    mail: '故障等级2',
    phone: '故障类别1',
    status: '故障状态1',
    description: '描述12345678',
  },
  {
    id: 2,
    username: '用户名2',
    name: '故障编号2',
    mail: '故障等级2',
    phone: '故障类别2',
    status: '故障状态2',
    description: '描述0987654345678',
  },
];
