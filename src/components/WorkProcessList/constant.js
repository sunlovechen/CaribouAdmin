import React from 'react';
import { Tag, Popconfirm } from 'antd';

export const columns = (deleteConfirm, deleteCancel, showModal) => {
  return [
    {
      title: '业务ID',
      dataIndex: 'username',
    },
    {
      title: '流程名称',
      dataIndex: 'name',
    },
    {
      title: '流程key',
      dataIndex: 'mail',
    },
    {
      title: '流程ID',
      dataIndex: 'phone',
    },
    {
      title: '版本',
      dataIndex: 'department',
    },
    {
      title: '创建时间',
      dataIndex: 'post',
      filters: [
        {
          text: '从高到低',
          value: '工程师',
        },
        {
          text: '从低到高',
          value: '专员',
        },
      ],
      onFilter: (value, record) => record.post.indexOf(value) === 0,
    },
    {
      title: '操作',
      dataIndex: 'id',
      render: (value, item) => {
        return <div><a onClick={() => showModal(item)}>任务情况 </a>
          <Popconfirm
            title="是否确认删除？"
            onConfirm={deleteConfirm}
            onCancel={deleteCancel}
            okText="确定"
            cancelText="取消"
          >
            <a href="#">删除</a>
          </Popconfirm>,
    </div>;
      },
    },
  ]
};
export const data = [
  {
    id: 1,
    username: '32432ewswrdsa3vdsr33',
    name: '收货单送审',
    mail: 'xsfd',
    phone: 'w432sr234',
    department: '3',
    post: '2020-04-10',
    status: '正常',
    createTime: '创建日期',
    userType: '1',
    confirmpassword: '1223223',
    jaiose: '角色1',
  },
  {
    id: 2,
    username: '243sxsfdsfdsxcxzcf',
    name: '收货单送审',
    mail: '54xxx',
    phone: '4543543fdegt',
    department: '3',
    post: '2020-04-10',
    status: '正常',
    createTime: '创建日期',
    userType: '1',
    confirmpassword: '1223223',
    jaiose: '角色1',
  },
  {
    id: 3,
    username: '432332ewswrdsa3vdsr33',
    name: '收货单送审',
    mail: '543gffrd',
    phone: 'dsfdhgf5',
    department: '3',
    post: '2020-04-10',
    status: '正常',
    createTime: '创建日期',
    userType: '1',
    confirmpassword: '1223223',
    jaiose: '角色1',
  },
 
];
