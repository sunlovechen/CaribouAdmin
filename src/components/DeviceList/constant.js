import React from 'react';
// import { Tag } from 'antd';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD HH:mm:ss';

/**
 * 设备类型
 */
export const typeList = [
  {
    key: 'flowmeter',
    value: '流量计',
  },
  {
    key: 'oilTank',
    value: '油罐',
  },
  {
    key: 'submersibleOilPump',
    value: '潜油泵',
  },
  {
    key: 'craneTube',
    value: '鹤管',
  },
  {
    key: 'videoSurveillance',
    value: '视频监控',
  },
  {
    key: 'distributionCabinet',
    value: '配电柜',
  },
  {
    key: 'transformer',
    value: '变压器',
  },
  {
    key: 'generator',
    value: '发电机',
  },
  {
    key: 'canopy',
    value: '罩棚',
  },
  {
    key: 'floorOrFence',
    value: '地坪、围墙',
  },
  {
    key: 'oilPipeline',
    value: '输油管线',
  },
  {
    key: 'extinguiserPool',
    value: '消防水池',
  },
  {
    key: 'centrifugalPump',
    value: '离心泵',
  },
  {
    key: 'pipelinePump',
    value: '管道泵',
  },
  {
    key: 'rotorPump',
    value: '转子泵',
  },
  {
    key: 'motor',
    value: '电机',
  },
  {
    key: 'railwayTrestle',
    value: '铁路栈桥',
  },
  {
    key: 'oilSpillElectrostaticProtector',
    value: '溢油静电保护器',
  },
  {
    key: 'explosionProofSolenoidValve',
    value: '隔爆电磁阀',
  },
  {
    key: 'filter',
    value: '过滤器',
  },
  {
    key: 'checkValve',
    value: '止回阀',
  },
  {
    key: 'valve',
    value: '阀门',
  },
  {
    key: 'electronicScale',
    value: '电子衡',
  },
  {
    key: 'combustibleGasAlarm',
    value: '可燃气体报警器',
  },
  {
    key: 'fireTruck',
    value: '消防车',
  },
  {
    key: 'fireExtinguisher',
    value: '灭火器',
  },
];

/**
 * 油库编码
 */
export const devOilCodeChange = {
  flowmeter: '油库编码',
  oilTank: '油库编码',
  submersibleOilPump: '油库编码',
  craneTube: '油库编码',
  videoSurveillance: '油库编码',
  distributionCabinet: '油库编码',
  transformer: '油库编码',
  generator: '油库编码',
  canopy: '油库编码',
  floorOrFence: '加油站编码',
  oilPipeline: '油库编码',
  extinguiserPool: '加油站编码',
  centrifugalPump: '油库编码',
  pipelinePump: '油库编码',
  rotorPump: '油库编码',
  motor: '油库编码',
  railwayTrestle: '油库编码',
  oilSpillElectrostaticProtector: '油库编码',
  explosionProofSolenoidValve: '油库编码',
  filter: '油库编码',
  checkValve: '油库编码',
  valve: '油库编码',
  electronicScale: '油库编码',
  combustibleGasAlarm: '油库编码',
  fireTruck: '油库编码',
  fireExtinguisher: '油库编码',
};

/**
 * 设备名称及编号
 */
export const devNameChange = {
  flowmeter: '设备名称及编号',
  oilTank: '设备名称及编号',
  submersibleOilPump: '设备名称及编号',
  craneTube: '设备名称及编号',
  videoSurveillance: '设备名称及编号',
  distributionCabinet: '设备名称及编号',
  transformer: '设备名称及编号',
  generator: '设备名称及编号',
  canopy: '设备名称及编号',
  floorOrFence: '加油站编码',
  oilPipeline: '名称及编号',
  extinguiserPool: '名称及编号',
  centrifugalPump: '设备名称及编号',
  pipelinePump: '设备名称及编号',
  rotorPump: '设备名称及编号',
  motor: '设备名称及编号',
  railwayTrestle: '设备名称及编号',
  oilSpillElectrostaticProtector: '设备名称及编号',
  explosionProofSolenoidValve: '设备名称及编号',
  filter: '设备名称及编号',
  checkValve: '设备名称及编号',
  valve: '设备名称及编号',
  electronicScale: '设备名称及编号',
  combustibleGasAlarm: '设备名称及编号',
  fireTruck: '设备名称及编号',
  fireExtinguisher: '设备名称及编号',
};

/**
 * 品牌
 */
export const devBrandChange = {
  flowmeter: '品牌',
  oilTank: '油罐形式',
  submersibleOilPump: '品牌',
  craneTube: '品牌',
  videoSurveillance: '品牌',
  distributionCabinet: '品牌',
  transformer: '品牌',
  generator: '品牌',
  canopy: '檐口形式',
  floorOrFence: '围墙样式',
  oilPipeline: '',
  extinguiserPool: '',
  centrifugalPump: '品牌',
  pipelinePump: '品牌',
  rotorPump: '品牌',
  motor: '品牌',
  railwayTrestle: '品牌',
  oilSpillElectrostaticProtector: '品牌',
  explosionProofSolenoidValve: '品牌',
  filter: '品牌',
  checkValve: '品牌',
  valve: '品牌',
  electronicScale: '品牌',
  combustibleGasAlarm: '品牌',
  fireTruck: '品牌',
  fireExtinguisher: '品牌',
};

/**
 * 规格型号
 */
export const devSpecificationsChange = {
  flowmeter: '规格型号',
  oilTank: '容积(立方米)',
  submersibleOilPump: '规格型号',
  craneTube: '规格型号',
  videoSurveillance: '规格型号',
  distributionCabinet: '规格型号',
  transformer: '规格型号',
  generator: '规格型号',
  canopy: '面积(平方米)',
  floorOrFence: '面积(平方米)',
  oilPipeline: '规格型号',
  extinguiserPool: '面积',
  centrifugalPump: '规格型号',
  pipelinePump: '规格型号',
  rotorPump: '规格型号',
  motor: '规格型号',
  railwayTrestle: '规格型号',
  oilSpillElectrostaticProtector: '规格型号',
  explosionProofSolenoidValve: '规格型号',
  filter: '规格型号',
  checkValve: '规格型号',
  valve: '规格型号',
  electronicScale: '规格型号',
  combustibleGasAlarm: '规格型号',
  fireTruck: '规格型号',
  fireExtinguisher: '规格型号',
};

/**
 * 生产厂商
 */
export const devManufacturersNameChange = {
  flowmeter: '等级',
  oilTank: '安装位置',
  submersibleOilPump: '',
  craneTube: '口径',
  videoSurveillance: '室外探头',
  distributionCabinet: '安装位置',
  transformer: '安装方式',
  generator: '安装位置',
  canopy: '结构',
  floorOrFence: '围墙高度（米）',
  oilPipeline: '数量',
  extinguiserPool: '',
  centrifugalPump: '',
  pipelinePump: '',
  rotorPump: '',
  motor: '',
  railwayTrestle: '',
  oilSpillElectrostaticProtector: '',
  explosionProofSolenoidValve: '',
  filter: '',
  checkValve: '',
  valve: '',
  electronicScale: '',
  combustibleGasAlarm: '',
  fireTruck: '',
  fireExtinguisher: '',
};

/**
 * 功率（KW)
 */
export const devPowerChange = {
  flowmeter: '公称压力',
  oilTank: '人孔数量（单、双）',
  submersibleOilPump: '功率(KW)',
  craneTube: '',
  videoSurveillance: '',
  distributionCabinet: '',
  transformer: '容量(KVA)',
  generator: '功率(KW)',
  canopy: '',
  floorOrFence: '围墙长度（米）',
  oilPipeline: '',
  extinguiserPool: '',
  centrifugalPump: '功率(KW)',
  pipelinePump: '功率(KW)',
  rotorPump: '功率(KW)',
  motor: '功率(KW)',
  railwayTrestle: '',
  oilSpillElectrostaticProtector: '',
  explosionProofSolenoidValve: '',
  filter: '',
  checkValve: '',
  valve: '',
  electronicScale: '',
  combustibleGasAlarm: '',
  fireTruck: '',
  fireExtinguisher: '',
};

/**
 * 出厂日期
 */
export const devManufactureDateChange = {
  flowmeter: '出厂日期',
  oilTank: '出厂日期',
  submersibleOilPump: '出厂日期',
  craneTube: '出厂日期',
  videoSurveillance: '出厂日期',
  distributionCabinet: '出厂日期',
  transformer: '',
  generator: '出厂日期',
  canopy: '出厂日期',
  floorOrFence: '',
  oilPipeline: '',
  extinguiserPool: '',
  centrifugalPump: '出厂日期',
  pipelinePump: '出厂日期',
  rotorPump: '出厂日期',
  motor: '出厂日期',
  railwayTrestle: '出厂日期',
  oilSpillElectrostaticProtector: '出厂日期',
  explosionProofSolenoidValve: '出厂日期',
  filter: '出厂日期',
  checkValve: '出厂日期',
  valve: '出厂日期',
  electronicScale: '出厂日期',
  combustibleGasAlarm: '出厂日期',
  fireTruck: '出厂日期',
  fireExtinguisher: '出厂日期',
};

/**
 * 是否完好 (责任人)
 */
export const devPersonIdChange = {
  flowmeter: '是否完好',
  oilTank: '是否完好',
  submersibleOilPump: '是否完好',
  craneTube: '是否完好',
  videoSurveillance: '是否完好',
  distributionCabinet: '是否完好',
  transformer: '是否完好',
  generator: '是否完好',
  canopy: '',
  floorOrFence: '',
  oilPipeline: '',
  extinguiserPool: '',
  centrifugalPump: '是否完好',
  pipelinePump: '是否完好',
  rotorPump: '是否完好',
  motor: '是否完好',
  railwayTrestle: '是否完好',
  oilSpillElectrostaticProtector: '是否完好',
  explosionProofSolenoidValve: '是否完好',
  filter: '是否完好',
  checkValve: '是否完好',
  valve: '是否完好',
  electronicScale: '是否完好',
  combustibleGasAlarm: '是否完好',
  fireTruck: '是否完好',
  fireExtinguisher: '是否完好',
};

/**
 * 使用日期
 */
export const devUseDateChange = {
  flowmeter: '使用日期',
  oilTank: '使用年月',
  submersibleOilPump: '使用日期',
  craneTube: '使用日期',
  videoSurveillance: '使用日期',
  distributionCabinet: '使用日期',
  transformer: '使用日期',
  generator: '使用日期',
  canopy: '使用日期',
  floorOrFence: '使用日期',
  oilPipeline: '使用日期',
  extinguiserPool: '投用日期',
  centrifugalPump: '使用日期',
  pipelinePump: '使用日期',
  rotorPump: '使用日期',
  motor: '使用日期',
  railwayTrestle: '使用日期',
  oilSpillElectrostaticProtector: '使用日期',
  explosionProofSolenoidValve: '使用日期',
  filter: '使用日期',
  checkValve: '使用日期',
  valve: '使用日期',
  electronicScale: '使用日期',
  combustibleGasAlarm: '使用日期',
  fireTruck: '使用日期',
  fireExtinguisher: '使用日期',
};

/**
 * 是否停用 (原设备状态)
 */
export const devStatusChange = {
  flowmeter: '是否停用',
  oilTank: '是否停用',
  submersibleOilPump: '是否停用',
  craneTube: '是否停用',
  videoSurveillance: '是否停用',
  distributionCabinet: '是否停用',
  transformer: '是否停用',
  generator: '是否停用',
  canopy: '',
  floorOrFence: '',
  oilPipeline: '',
  extinguiserPool: '',
  centrifugalPump: '是否停用',
  pipelinePump: '是否停用',
  rotorPump: '是否停用',
  motor: '是否停用',
  railwayTrestle: '是否停用',
  oilSpillElectrostaticProtector: '是否停用',
  explosionProofSolenoidValve: '是否停用',
  filter: '是否停用',
  checkValve: '是否停用',
  valve: '是否停用',
  electronicScale: '是否停用',
  combustibleGasAlarm: '是否停用',
  fireTruck: '是否停用',
  fireExtinguisher: '是否停用',
};

/**
 * 停用原因 (原供应商)
 */
export const devSupplierNameChange = {
  flowmeter: '停用原因',
  oilTank: '停用原因',
  submersibleOilPump: '停用原因',
  craneTube: '停用原因',
  videoSurveillance: '停用原因',
  distributionCabinet: '停用原因',
  transformer: '停用原因',
  generator: '停用原因',
  canopy: '',
  floorOrFence: '',
  oilPipeline: '',
  extinguiserPool: '',
  centrifugalPump: '停用原因',
  pipelinePump: '停用原因',
  rotorPump: '停用原因',
  motor: '停用原因',
  railwayTrestle: '停用原因',
  oilSpillElectrostaticProtector: '停用原因',
  explosionProofSolenoidValve: '停用原因',
  filter: '停用原因',
  checkValve: '停用原因',
  valve: '停用原因',
  electronicScale: '停用原因',
  combustibleGasAlarm: '停用原因',
  fireTruck: '停用原因',
  fireExtinguisher: '停用原因',
};

export const columns = (showModal, putDeviceStatusById, type) => {
  const defauitList = [
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
  ];

  defauitList.push({
    title: devOilCodeChange[type],
    dataIndex: 'devOilCode',
  });
  defauitList.push({
    title: devNameChange[type],
    dataIndex: 'devName',
  });

  if (devOilCodeChange[type]) {
    defauitList.push({
      title: devBrandChange[type],
      dataIndex: 'devBrand',
    });
  }

  defauitList.push({
    title: devSpecificationsChange[type],
    dataIndex: 'devSpecifications',
  });

  if (devManufacturersNameChange[type]) {
    defauitList.push({
      title: devManufacturersNameChange[type],
      dataIndex: 'devManufacturersName',
    });
  }

  if (devPowerChange[type]) {
    defauitList.push({
      title: devPowerChange[type],
      dataIndex: 'devPower',
    });
  }

  if (devManufactureDateChange[type]) {
    defauitList.push({
      title: devManufactureDateChange[type],
      dataIndex: 'devManufactureDate',
      render: text => {
        return <span>{moment(text).format(dateFormat)}</span>;
      },
    });
  }

  if (devPersonIdChange[type]) {
    defauitList.push({
      title: devPersonIdChange[type],
      dataIndex: 'devPersonId',
    });
  }

  if (devUseDateChange[type]) {
    defauitList.push({
      title: devUseDateChange[type],
      dataIndex: 'devUseDate',
      render: text => {
        return <span>{moment(text).format(dateFormat)}</span>;
      },
    });
  }

  if (devStatusChange[type]) {
    defauitList.push({
      title: devStatusChange[type],
      dataIndex: 'devStatus',
    });
  }

  if (devSupplierNameChange[type]) {
    defauitList.push({
      title: devSupplierNameChange[type],
      dataIndex: 'devSupplierName',
    });
  }

  if (type === 'flowmeter') {
    defauitList.push({
      title: '流量范围',
      dataIndex: 'devFlowRange',
    });
  }

  if (type === 'oilTank') {
    defauitList.push({
      title: '最近清罐年月',
      dataIndex: 'devClearingDate',
    });
  }

  defauitList.push({
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
  });
  defauitList.push({
    title: '操作',
    dataIndex: 'id',
    width: '120px',
    fixed: 'right',
    render: (text, record) => {
      return <div><a onClick={() => showModal('修改设备信息', record)}>修改 </a>
        <a onClick={() => showModal('设备详情', record)}>详情 </a>
        <a onClick={() => putDeviceStatusById(text)}> 报废</a></div>;
    },
  });

  return defauitList;
};
