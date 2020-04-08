import React from 'react';
import { Tag, Popconfirm } from 'antd';

export const columns = (deleteConfirm, deleteCancel, showModal) => {
  return [
    {
      title: '标题',
      dataIndex: 'username',
    },
    {
      title: '申请单位',
      dataIndex: 'name',
    },
    {
      title: '创建日期',
      dataIndex: 'mail',
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '操作',
      dataIndex: 'id',
      render: (value, item) => {
        return <div>
          {
            item.status === '已审批' ? <a onClick={deleteConfirm}>删除</a> : <a onClick={() => showModal(item)}>审批</a>
          }
        </div>;
      },
    },
  ]
};
export const data = [
  {
    id: 1,
    username: '焚毁废弃物',
    name: '萧山油库',
    mail: '2020-03-19',
    status: '待审批',
  },
  {
    id: 2,
    username: '焚毁废弃物',
    name: '杭州油库',
    mail: '2020-04-11',
    status: '待审批',
  },
  {
    id: 3,
    username: '焚毁废弃物',
    name: '江苏油库',
    mail: '2020-02-09',
    status: '已审批',
  },
];
