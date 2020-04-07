import React from 'react';
import { Tag, Popconfirm } from 'antd';

export const columns = (deleteConfirm, deleteCancel, showModal) => {
  return [
    {
      title: '角色名称',
      dataIndex: 'username',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
    },
    {
      title: '备注',
      dataIndex: 'department',
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: text => {
        return <Tag color={'blue'}>{text}</Tag>
      },
    },
    {
      title: '操作',
      dataIndex: 'id',
      render: (value, item) => {
        return <div><a onClick={() => showModal(item)}>修改 </a>
          <Popconfirm
            title="是否确认删除？"
            onConfirm={deleteConfirm}
            onCancel={deleteCancel}
            okText="确定"
            cancelText="取消"
          >
            <a href="#">删除</a>
          </Popconfirm></div>;
      },
    },
  ]
};
export const data = [
  {
    id: 1,
    username: '用户名',
    name: '姓名',
    mail: '邮箱',
    phone: '手机号',
    department: '部门',
    post: '岗位',
    status: '正常',
    createTime: '创建日期',
  },
  {
    id: 2,
    username: 'sunyu',
    name: '陈老大',
    mail: '12345@qq.com',
    phone: '16678761912',
    department: '设备部',
    post: '工程师',
    status: '正常',
    createTime: '2020-1-11',
  },
  {
    id: 3,
    username: 'yuanyuan',
    name: '陈老二',
    mail: '1312345@qq.com',
    phone: '16678761912',
    department: '设备部',
    post: '专员',
    status: '正常',
    createTime: '2020-1-12',
  },
  {
    id: 4,
    username: 'xiaoyuan',
    name: '陈老三',
    mail: '12123345@qq.com',
    phone: '16678761912',
    department: '材料部',
    post: '工程师',
    status: '正常',
    createTime: '2020-1-13',
  },
];
export const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
      },
    ],
  },
];
