import React from 'react';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD HH:mm:ss';

export const FaultLevel = ['一般', '紧急', '严重'];
const FaultStatus = ['正常', '不正常'];

export const columns = (showModal, delFaultRecord) => {
  return [
    {
      title: '故障编号',
      dataIndex: 'faultCode',
    },
    {
      title: '故障等级',
      dataIndex: 'faultLevel',
      render: text => {
        return <span>{FaultLevel[text]}</span>
      },
    },
    {
      title: '故障类别',
      dataIndex: 'faultCateName',
    },
    {
      title: '故障状态',
      dataIndex: 'faultStatus',
      render: text => {
        return <span>{FaultStatus[text]}</span>
      },
    },
    {
      title: '创建人',
      dataIndex: 'createdId',
    },
    {
      title: '创建时间',
      dataIndex: 'createdDate',
      render: text => {
        return <span>{moment(text).format(dateFormat)}</span>;
      },
    },
    {
      title: '修改人',
      dataIndex: 'updatedId',
    },
    {
      title: '修改时间',
      dataIndex: 'updatedDate',
      render: text => {
        return <span>{moment(text).format(dateFormat)}</span>;
      },
    },
    {
      title: '操作',
      dataIndex: 'id',
      render: (text, item) => {
        return <div><a onClick={() => showModal('edit', item)}>修改 </a> <a onClick={() => delFaultRecord(text)}> 删除</a></div>;
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
