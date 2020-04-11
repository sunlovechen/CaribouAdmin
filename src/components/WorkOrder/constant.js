import React from 'react';
import { Tag, Popconfirm } from 'antd';

export const columns = (deleteConfirm, showDetail, showModal) => {
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
      title: '类型',
      dataIndex: 'type',
    },
    {
      title: '操作',
      dataIndex: 'id',
      render: (value, item) => {
        return (
          <div>
            {item.status === '已审批' ? (
              <a onClick={deleteConfirm}>删除</a>
            ) : (
              <a onClick={() => showModal(item)}>审批</a>
            )}
            <a onClick={() => showDetail(item, true)} style={{ marginLeft: '14px' }}>详情</a>
          </div>
        );
      },
    },
  ];
};
export const data = [
  {
    id: 1,
    username: '焚毁废弃物',
    name: '萧山油库',
    mail: '2020-03-19',
    status: '待审批',
    type: '用火申请单',
  },
  {
    id: 2,
    username: '油罐维护',
    name: '杭州油库',
    mail: '2020-04-11',
    status: '待审批',
    type: '维护申请单',
  },
  {
    id: 3,
    username: '油罐车维修',
    name: '江苏油库',
    mail: '2020-02-09',
    status: '已审批',
    type: '维修申请单',
  },
  {
    id: 4,
    username: '用电',
    name: '无锡油库',
    mail: '2020-02-09',
    status: '已审批',
    type: '用电申请单',
  },
  {
    id: 5,
    username: '高处申请',
    name: '苏州油库',
    mail: '2020-02-09',
    status: '已审批',
    type: '高处申请单',
  },
  {
    id: 6,
    username: '盲板抽堵申请',
    name: '河南油库',
    mail: '2020-02-09',
    status: '待审批',
    type: '盲板抽堵申请单',
  },
  {
    id: 7,
    username: '起重申请',
    name: '南通油库',
    mail: '2019-12-09',
    status: '已审批',
    type: '起重申请单',
  },
  {
    id: 8,
    username: '受限申请',
    name: '新疆油库',
    mail: '2020-03-09',
    status: '待审批',
    type: '受限申请单',
  },
];
