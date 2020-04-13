import React from 'react';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD';

export const FaultLevel = ['一般', '紧急', '严重'];
const FaultStatus = ['正常', '不正常'];
export const PassiveStatus = ['', '待处理', '处理中', '处理成功', '处理失败'];
export const PassiveType = ['', '维修', '保养'];

export const columns = (showModal, passiveDeletePassive) => {
  return [
    {
      title: '设备名',
      dataIndex: 'passiveDevName',
    },
    {
      title: '计划类型',
      dataIndex: 'passiveType',
      render: text => {
        return <span>{PassiveType[text]}</span>
      },
    },
    {
      title: '计划状态',
      dataIndex: 'passiveStatus',
      render: text => {
        return <span>{PassiveStatus[text]}</span>
      },
    },
    {
      title: '创建人',
      dataIndex: 'createdId',
    },
    {
      title: '修改人',
      dataIndex: 'updatedId',
    },
    {
      title: '被动获取的时间',
      dataIndex: 'passiveReceiveDate',
      render: text => {
        return <span>{moment(text).format(dateFormat)}</span>;
      },
    },
    {
      title: '操作',
      dataIndex: 'id',
      render: (text, item) => {
        return <div><a onClick={() => showModal('edit', item)}>修改 </a> <a onClick={() => passiveDeletePassive(text)}> 删除</a></div>;
      },
    },
  ]
};
