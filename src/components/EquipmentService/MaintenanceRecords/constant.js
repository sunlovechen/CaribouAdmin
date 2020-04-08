import React from 'react';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD HH:mm:ss';

export const RecodeShutdownType = ['', '是', '否'];
export const RecordType = ['', '保养', '被动保养', '维修', '被动维修'];

export const columns = (showModal, planDetail, planDel) => {
  return [
    {
      title: '记录编号',
      dataIndex: 'recordCode',
      width: '160px',
      fixed: 'left',
    },
    {
      title: '记录类型',
      dataIndex: 'recordType',
      width: '100px',
      fixed: 'left',
      render: text => {
        return <span>{RecordType[text]}</span>;
      },
    },
    {
      title: '负责人',
      dataIndex: 'recordUserName',
    },
    {
      title: '是否停机',
      dataIndex: 'recodeShutdownType',
      render: text => {
        return <span>{RecodeShutdownType[text]}</span>;
      },
    },
    {
      title: '停机时长',
      dataIndex: 'recodeShutdownTime',
    },
    {
      title: '记录金额',
      dataIndex: 'recodeMoney',
    },
    {
      title: '记录内容',
      dataIndex: 'recodeContent',
    },
    {
      title: '创建人',
      dataIndex: 'createdUserName',
    },
    {
      title: '创建时间',
      dataIndex: 'planStartDate',
      render: text => {
        return <span>{text && moment(text).format(dateFormat)}</span>;
      },
    },
    {
      title: '修改人',
      dataIndex: 'updatedUserName',
    },
    {
      title: '修改时间',
      dataIndex: 'planEndDate',
      render: text => {
        return <span>{text && moment(text).format(dateFormat)}</span>;
      },
    },
    {
      title: '负责人',
      dataIndex: 'planUserId',
    },
    {
      title: '记录描述',
      dataIndex: 'recodeDesc',
    },
    {
      title: '操作',
      dataIndex: 'id',
      fixed: 'right',
      width: '140px',
      render: (text, item) => {
        return (
          <div>
            <a onClick={() => showModal('edit', item)}>修改 </a>{ ' '}
            <a onClick={() => planDetail(text)}> 详情</a>{' '}
            <a onClick={() => planDel(text)}> 删除</a>
          </div>
        );
      },
    },
  ];
};
