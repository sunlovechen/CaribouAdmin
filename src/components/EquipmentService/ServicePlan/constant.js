import React from 'react';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD';

export const PlanStatus = ['', '有效', '无效'];
export const PlanLevel = ['日常维修'];
export const PlanGroupId = ['计划组1', '计划组2'];
export const PlanMode = ['单次', '多次'];
export const PlanCycleType = ['', '天', '周', '月', '年'];

export const columns = (showModal, planDetail, planDel) => {
  return [
    {
      title: '计划编号',
      dataIndex: 'planCode',
      width: '140px',
      fixed: 'left',
    },
    {
      title: '计划名字',
      dataIndex: 'planName',
      width: '140px',
      fixed: 'left',
    },
    {
      title: '计划开始时间',
      dataIndex: 'planStartDate',
      render: text => {
        return <span>{text && moment(text).format(dateFormat)}</span>;
      },
    },
    {
      title: '计划结束时间',
      dataIndex: 'planEndDate',
      render: text => {
        return <span>{text && moment(text).format(dateFormat)}</span>;
      },
    },
    // {
    //   title: '计划负责人Id',
    //   dataIndex: 'planUserId',
    // },
    {
      title: '计划等级',
      dataIndex: 'planLevel',
      render: text => {
        return <span>{PlanLevel[text]}</span>;
      },
    },
    {
      title: '计划组',
      dataIndex: 'planGroupId',
      render: text => {
        return <span>{PlanGroupId[text]}</span>;
      },
    },
    {
      title: '计划方式',
      dataIndex: 'planMode',
      render: text => {
        return <span>{PlanMode[text]}</span>;
      },
    },
    {
      title: '计划周期',
      dataIndex: 'planCycleNum',
      render: (_text, record) => {
        const { planCycleNum, planCycleType } = record;
        return <span>{planCycleNum} {PlanCycleType[planCycleType]}</span>;
      },
    },
    {
      title: '计划位置',
      dataIndex: 'planPosition',
    },
    {
      title: '计划标准',
      dataIndex: 'planStandard',
    },
    {
      title: '计划状态',
      dataIndex: 'planStatus',
      render: text => {
        return <span>{PlanStatus[text]}</span>;
      },
    },
    // {
    //   title: '创建人Id',
    //   dataIndex: 'createdId',
    // },
    {
      title: '创建时间',
      dataIndex: 'createdDate',
      render: text => {
        return <span>{text && moment(text).format(dateFormat)}</span>;
      },
    },
    {
      title: '修改人Id',
      dataIndex: 'updatedId',
    },
    {
      title: '修改时间',
      dataIndex: 'updatedDate',
      render: text => {
        return <span>{text && moment(text).format(dateFormat)}</span>;
      },
    },
    {
      title: '计划描述',
      dataIndex: 'planDesc',
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
