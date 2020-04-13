import React from 'react';
// import { Tag } from 'antd';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD HH:mm:ss';

export const devPersonIdList = {
  1: '是',
  2: '否',
};

export const devStatusList = {
  1: '是',
  2: '否',
};

export const devRkslList = {
  1: '单',
  2: '双',
};

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

export const typeValueList = {
  flowmeter: 1,
  oilTank: 2,
  submersibleOilPump: 3,
  craneTube: 4,
  videoSurveillance: 5,
  distributionCabinet: 6,
  transformer: 7,
  generator: 8,
  canopy: 9,
  floorOrFence: 10,
  oilPipeline: 11,
  extinguiserPool: 12,
  centrifugalPump: 13,
  pipelinePump: 14,
  rotorPump: 15,
  motor: 16,
  railwayTrestle: 17,
  oilSpillElectrostaticProtector: 18,
  explosionProofSolenoidValve: 19,
  filter: 20,
  checkValve: 21,
  valve: 22,
  electronicScale: 23,
  combustibleGasAlarm: 24,
  fireTruck: 25,
  fireExtinguisher: 26,
};

/**
 * 油库编码
 */
export const devSoilCodeChange = {
  flowmeter: { key: 'devSoilCode', value: '油库编码' },
  oilTank: { key: 'devSoilCode', value: '油库编码' },
  submersibleOilPump: { key: 'devSoilCode', value: '油库编码' },
  craneTube: { key: 'devSoilCode', value: '油库编码' },
  videoSurveillance: { key: 'devSoilCode', value: '油库编码' },
  distributionCabinet: { key: 'devSoilCode', value: '油库编码' },
  transformer: { key: 'devSoilCode', value: '油库编码' },
  generator: { key: 'devSoilCode', value: '油库编码' },
  canopy: { key: 'devSoilCode', value: '油库编码' },
  floorOrFence: { key: 'devJqzCode', value: '加油站编码' },
  oilPipeline: { key: 'devSoilCode', value: '油库编码' },
  extinguiserPool: { key: 'devJqzCode', value: '加油站编码' },
  centrifugalPump: { key: 'devSoilCode', value: '油库编码' },
  pipelinePump: { key: 'devSoilCode', value: '油库编码' },
  rotorPump: { key: 'devSoilCode', value: '油库编码' },
  motor: { key: 'devSoilCode', value: '油库编码' },
  railwayTrestle: { key: 'devSoilCode', value: '油库编码' },
  oilSpillElectrostaticProtector: { key: 'devSoilCode', value: '油库编码' },
  explosionProofSolenoidValve: { key: 'devSoilCode', value: '油库编码' },
  filter: { key: 'devSoilCode', value: '油库编码' },
  checkValve: { key: 'devSoilCode', value: '油库编码' },
  valve: { key: 'devSoilCode', value: '油库编码' },
  electronicScale: { key: 'devSoilCode', value: '油库编码' },
  combustibleGasAlarm: { key: 'devSoilCode', value: '油库编码' },
  fireTruck: { key: 'devSoilCode', value: '油库编码' },
  fireExtinguisher: { key: 'devSoilCode', value: '油库编码' },
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
  floorOrFence: '设备名称及编号',
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
  flowmeter: { key: 'devBrand', value: '品牌' },
  oilTank: { key: 'devSoilMode', value: '油罐形式' },
  submersibleOilPump: { key: 'devBrand', value: '品牌' },
  craneTube: { key: 'devBrand', value: '品牌' },
  videoSurveillance: { key: 'devBrand', value: '品牌' },
  distributionCabinet: { key: 'devBrand', value: '品牌' },
  transformer: { key: 'devBrand', value: '品牌' },
  generator: { key: 'devBrand', value: '品牌' },
  canopy: { key: 'devYkxs', value: '檐口形式' },
  floorOrFence: { key: 'devWqxs', value: '围墙样式' },
  centrifugalPump: { key: 'devBrand', value: '品牌' },
  pipelinePump: { key: 'devBrand', value: '品牌' },
  rotorPump: { key: 'devBrand', value: '品牌' },
  motor: { key: 'devBrand', value: '品牌' },
  railwayTrestle: { key: 'devBrand', value: '品牌' },
  oilSpillElectrostaticProtector: { key: 'devBrand', value: '品牌' },
  explosionProofSolenoidValve: { key: 'devBrand', value: '品牌' },
  filter: { key: 'devBrand', value: '品牌' },
  checkValve: { key: 'devBrand', value: '品牌' },
  valve: { key: 'devBrand', value: '品牌' },
  electronicScale: { key: 'devBrand', value: '品牌' },
  combustibleGasAlarm: { key: 'devBrand', value: '品牌' },
  fireTruck: { key: 'devBrand', value: '品牌' },
  fireExtinguisher: { key: 'devBrand', value: '品牌' },
};

/**
 * 规格型号
 */
export const devStandardsChange = {
  flowmeter: { key: 'devStandards', value: '规格型号' },
  oilTank: { key: 'devVolume', value: '容积(立方米)' },
  submersibleOilPump: { key: 'devStandards', value: '规格型号' },
  craneTube: { key: 'devStandards', value: '规格型号' },
  videoSurveillance: { key: 'devStandards', value: '规格型号' },
  distributionCabinet: { key: 'devStandards', value: '规格型号' },
  transformer: { key: 'devStandards', value: '规格型号' },
  generator: { key: 'devStandards', value: '规格型号' },
  canopy: { key: 'devArea', value: '面积(平方米)' },
  floorOrFence: { key: 'devArea', value: '面积(平方米)' },
  oilPipeline: { key: 'devStandards', value: '规格型号' },
  extinguiserPool: { key: 'devArea', value: '面积(平方米)' },
  centrifugalPump: { key: 'devStandards', value: '规格型号' },
  pipelinePump: { key: 'devStandards', value: '规格型号' },
  rotorPump: { key: 'devStandards', value: '规格型号' },
  motor: { key: 'devStandards', value: '规格型号' },
  railwayTrestle: { key: 'devStandards', value: '规格型号' },
  oilSpillElectrostaticProtector: { key: 'devStandards', value: '规格型号' },
  explosionProofSolenoidValve: { key: 'devStandards', value: '规格型号' },
  filter: { key: 'devStandards', value: '规格型号' },
  checkValve: { key: 'devStandards', value: '规格型号' },
  valve: { key: 'devStandards', value: '规格型号' },
  electronicScale: { key: 'devStandards', value: '规格型号' },
  combustibleGasAlarm: { key: 'devStandards', value: '规格型号' },
  fireTruck: { key: 'devStandards', value: '规格型号' },
  fireExtinguisher: { key: 'devStandards', value: '规格型号' },
};

/**
 * 生产厂商
 */
export const devManufacturersNameChange = {
  flowmeter: { key: 'devLevel', value: '等级' },
  oilTank: { key: 'devSitePosition', value: '安装位置' },
  craneTube: { key: 'devCaliber', value: '口径' },
  videoSurveillance: { key: 'devSwtt', value: '室外探头' },
  distributionCabinet: { key: 'devSitePosition', value: '安装位置' },
  transformer: { key: 'devSetMode', value: '安装方式' },
  generator: { key: 'devSitePosition', value: '安装位置' },
  canopy: { key: 'devStructure', value: '结构' },
  floorOrFence: { key: 'devWqgd', value: '围墙高度（米）' },
  oilPipeline: { key: 'devNums', value: '数量' },
};

/**
 * 功率（KW)
 */
export const devPowerChange = {
  flowmeter: { key: 'devGcyl', value: '公称压力' },
  oilTank: { key: 'devRksl', value: '入孔数量' },
  submersibleOilPump: { key: 'devSoilPower', value: '功率(KW)' },
  transformer: { key: 'devRlkwa', value: '容量(KVA)' },
  generator: { key: 'devSoilPower', value: '功率(KW)' },
  floorOrFence: { key: 'devWqcd', value: '围墙长度（米）' },
  centrifugalPump: { key: 'devSoilPower', value: '功率(KW)' },
  pipelinePump: { key: 'devSoilPower', value: '功率(KW)' },
  rotorPump: { key: 'devSoilPower', value: '功率(KW)' },
  motor: { key: 'devSoilPower', value: '功率(KW)' },
};

/**
 * 出厂日期
 */
export const devManufactureDateChange = {
  flowmeter: { key: 'devProductDate', value: '出厂日期' },
  oilTank: { key: 'devProductDate', value: '出厂日期' },
  submersibleOilPump: { key: 'devProductDate', value: '出厂日期' },
  craneTube: { key: 'devProductDate', value: '出厂日期' },
  videoSurveillance: { key: 'devProductDate', value: '出厂日期' },
  distributionCabinet: { key: 'devProductDate', value: '出厂日期' },
  generator: { key: 'devProductUsedDate', value: '生产日期' },
  canopy: { key: 'devProductUsedDate', value: '安装日期' },
  centrifugalPump: { key: 'devProductDate', value: '出厂日期' },
  pipelinePump: { key: 'devProductDate', value: '出厂日期' },
  rotorPump: { key: 'devProductDate', value: '出厂日期' },
  motor: { key: 'devProductDate', value: '出厂日期' },
  railwayTrestle: { key: 'devProductDate', value: '出厂日期' },
  oilSpillElectrostaticProtector: { key: 'devProductDate', value: '出厂日期' },
  explosionProofSolenoidValve: { key: 'devProductDate', value: '出厂日期' },
  filter: { key: 'devProductDate', value: '出厂日期' },
  checkValve: { key: 'devProductDate', value: '出厂日期' },
  valve: { key: 'devProductDate', value: '出厂日期' },
  electronicScale: { key: 'devProductDate', value: '出厂日期' },
  combustibleGasAlarm: { key: 'devProductDate', value: '出厂日期' },
  fireTruck: { key: 'devProductDate', value: '出厂日期' },
  fireExtinguisher: { key: 'devProductDate', value: '出厂日期' },
};

/**
 * 是否完好 (原责任人)
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
      dataIndex: 'devCityCompany',
      width: '100px',
      fixed: 'left',
    },
    {
      title: '油库',
      dataIndex: 'devSoilName',
      width: '100px',
      fixed: 'left',
    },
  ];

  defauitList.push({
    title: devSoilCodeChange[type].value,
    dataIndex: devSoilCodeChange[type].key,
  });
  defauitList.push({
    title: devNameChange[type],
    dataIndex: 'devNameCode',
  });

  if (devBrandChange[type]) {
    defauitList.push({
      title: devBrandChange[type].value,
      dataIndex: devBrandChange[type].key,
    });
  }

  defauitList.push({
    title: devStandardsChange[type].value,
    dataIndex: devStandardsChange[type].key,
  });

  if (devManufacturersNameChange[type]) {
    defauitList.push({
      title: devManufacturersNameChange[type].value,
      dataIndex: devManufacturersNameChange[type].key,
    });
  }

  if (devPowerChange[type]) {
    defauitList.push({
      title: devPowerChange[type].value,
      dataIndex: devPowerChange[type].key,
      render: text => {
        return <span>{devPowerChange[type].key === 'devRksl' ? devRkslList[text] : text}</span>
      },
    });
  }

  if (devManufactureDateChange[type]) {
    defauitList.push({
      title: devManufactureDateChange[type].value,
      dataIndex: devManufactureDateChange[type].key,
      render: text => {
        return <span>{moment(text).format(dateFormat)}</span>;
      },
    });
  }

  if (devPersonIdChange[type]) {
    defauitList.push({
      title: devPersonIdChange[type],
      dataIndex: 'devIsOk',
      render: text => {
        return <span>{devPersonIdList[text]}</span>;
      },
    });
  }

  if (devUseDateChange[type]) {
    defauitList.push({
      title: devUseDateChange[type],
      dataIndex: 'devProductUsedDate',
      render: text => {
        return <span>{moment(text).format(dateFormat)}</span>;
      },
    });
  }

  if (devStatusChange[type]) {
    defauitList.push({
      title: devStatusChange[type],
      dataIndex: 'devStatus',
      render: text => {
        return <span>{devStatusList[text]}</span>
      },
    });
  }

  if (devSupplierNameChange[type]) {
    defauitList.push({
      title: devSupplierNameChange[type],
      dataIndex: 'devPauseDesc',
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
    dataIndex: 'devMemorial',
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
      return (
        <div>
          <a onClick={() => showModal('修改设备信息', record)}>修改 </a>
          <a onClick={() => showModal('设备详情', record)}>详情 </a>
          <a onClick={() => putDeviceStatusById(text)}> 报废</a>
        </div>
      );
    },
  });

  return defauitList;
};
