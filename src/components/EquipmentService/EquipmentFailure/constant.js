import React from 'react';
import { Tag } from 'antd';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD HH:mm:ss';

export const columns = (showModal, putDeviceStatusById) => {
  return [
    {
      title: '市公司',
      dataIndex: 'devCompanyName',
      width: '100px',
      fixed: 'left',
    },
    {
      title: '油库',
      dataIndex: 'devOilName',
      width: '100px',
      fixed: 'left',
    },
    {
      title: '油库编号',
      dataIndex: 'devOilCode',
    },
    {
      title: '设备名称及编号',
      dataIndex: 'devName',
    },
    {
      title: '品牌',
      dataIndex: 'devBrand',
      // filters: [
      //   {
      //     text: '品牌1',
      //     value: '品牌1',
      //   },
      //   {
      //     text: '品牌2',
      //     value: '品牌2',
      //   },
      // ],
      // onFilter: (value, record) => record.brand.indexOf(value) === 0,
    },
    {
      title: '规格型号',
      dataIndex: 'devSpecifications',
    },
    {
      title: '功率',
      dataIndex: 'devPower',
    },
    {
      title: '设备类别',
      dataIndex: 'devCategoryName',
    },
    {
      title: '责任人',
      dataIndex: 'devPersonId',
    },
    {
      title: '出厂日期',
      dataIndex: 'devManufactureDate',
      render: text => {
        return <span>{moment(text).format(dateFormat)}</span>;
      },
    },
    {
      title: '使用日期',
      dataIndex: 'devUseDate',
      render: text => {
        return <span>{moment(text).format(dateFormat)}</span>;
      },
    },
    {
      title: '生产厂商',
      dataIndex: 'devManufacturersName',
    },
    {
      title: '供应商',
      dataIndex: 'devSupplierName',
    },
    {
      title: '设备状态',
      dataIndex: 'devStatus',
      render: text => {
        return <Tag color={'blue'}>{text}</Tag>;
      },
    },
    {
      title: '备注',
      dataIndex: 'devDesc',
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
      dataIndex: 'id',
      width: '120px',
      fixed: 'right',
      render: (text, record) => {
        return <div><a onClick={() => showModal('修改设备信息', record)}>修改 </a>
        <a onClick={() => putDeviceStatusById(text)}> 报废</a></div>;
      },
    },
  ]
};
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
