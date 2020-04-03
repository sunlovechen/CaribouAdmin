import React from 'react';
import './index.less';
import WaterStatistics from './WaterStatistics';
import CoalmakingStatistics from './CoalmakingStatistics';
import ElectricityStatistics from './ElectricityStatistics';
import GasStatistics from './GasStatistics';

/**
 * 能源管理
 */
class EnergyManagement extends React.PureComponent {
  render() {
    return (
      <div className="energy-management">
        <WaterStatistics />
        <ElectricityStatistics />
        <CoalmakingStatistics />
        <GasStatistics />
      </div>
    );
  }
}

export default EnergyManagement;
