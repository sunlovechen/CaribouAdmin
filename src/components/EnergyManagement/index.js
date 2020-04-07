import React from 'react';
import './index.less';
import WaterStatistics from './WaterStatistics';
import CoalmakingStatistics from './CoalmakingStatistics';
import ElectricityStatistics from './ElectricityStatistics';
import GasStatistics from './GasStatistics';
import Header from '../HeaderBlack';

/**
 * 能源管理
 */
class EnergyManagement extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <div className="energy-management">
          <WaterStatistics />
          <ElectricityStatistics />
          <CoalmakingStatistics />
          <GasStatistics />
        </div>
      </div>
    );
  }
}

export default EnergyManagement;
