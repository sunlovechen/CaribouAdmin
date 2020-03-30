import React from 'react';
import { Tag } from 'antd';

export const columns = [
  {
    title: '市公司',
    dataIndex: 'companyName',
    width: '100px',
    fixed: 'left',
  },
  {
    title: '油库',
    dataIndex: 'oilDepot',
    width: '100px',
    fixed: 'left',
  },
  {
    title: '设备编号',
    dataIndex: 'deviceID',
  },
  {
    title: '设备名称及编号',
    dataIndex: 'equipment',
  },
  {
    title: '品牌',
    dataIndex: 'brand',
    filters: [
      {
        text: '品牌1',
        value: '品牌1',
      },
      {
        text: '品牌2',
        value: '品牌2',
      },
    ],
    onFilter: (value, record) => record.brand.indexOf(value) === 0,
  },
  {
    title: '规格型号',
    dataIndex: 'specifications',
  },
  {
    title: '功率',
    dataIndex: 'power',
  },
  {
    title: '设备类别',
    dataIndex: 'equipmentCategory',
  },
  {
    title: '责任人',
    dataIndex: 'responsible',
  },
  {
    title: '出厂日期',
    dataIndex: 'manufactureDate',
  },
  {
    title: '使用日期',
    dataIndex: 'useDate',
  },
  {
    title: '生产厂商',
    dataIndex: 'manufacturer',
  },
  {
    title: '供应商',
    dataIndex: 'supplier',
  },
  {
    title: '设备状态',
    dataIndex: 'deviceStatus',
    render: text => {
      return <Tag color={'blue'}>{text}</Tag>;
    },
  },
  {
    title: '备注',
    dataIndex: 'note',
    width: '100px',
    render: text => {
      return (
        <p className="hide-text" style={{ width: '100px' }} title={text}>
          {text}
        </p>
      );
    },
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width: '120px',
    fixed: 'right',
    render: () => {
      return <div><a>修改 </a> <a> 报废</a></div>;
    },
  },
];
export const data = [
  {
    companyName: '市公司1',
    oilDepot: '油库1',
    deviceID: '10001',
    equipment: '设备1（10001）',
    brand: '品牌1',
    specifications: '规格型号1',
    power: '999',
    equipmentCategory: '213456786',
    responsible: '我',
    manufactureDate: '2020-01-12',
    useDate: '2020-02-02',
    manufacturer: 'aa',
    supplier: 'qq',
    deviceStatus: '使用中',
    note: '1这个备注不知道备注说明设备写写1',
  },
  {
    companyName: '市公司2',
    oilDepot: '油库2',
    deviceID: '10002',
    equipment: '设备2（10002）',
    brand: '品牌2',
    specifications: '规格型号2',
    power: '991',
    equipmentCategory: '9876543',
    responsible: '你',
    manufactureDate: '2020-02-13',
    useDate: '2020-03-22',
    manufacturer: 'ww',
    supplier: 'df',
    deviceStatus: '停止',
    note: '2这个备注不知道备注说明设备写写2',
  },
  {
    companyName: '市公司3',
    oilDepot: '油库3',
    deviceID: '10003',
    equipment: '设备3（10003）',
    brand: '品牌2',
    specifications: '规格型号3',
    power: '991',
    equipmentCategory: '9876543',
    responsible: '他',
    manufactureDate: '2020-02-13',
    useDate: '2020-03-22',
    manufacturer: 're',
    supplier: 'df',
    deviceStatus: '维修',
    note: '3这个备注不知道备注说明设备写写3',
  },
];
