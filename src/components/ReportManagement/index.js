import React from 'react';
import './index.less';
import TotalOilSentReceived from './TotalOilSentReceived';
import OilProductionStatistics from './OilProductionStatistics';
import AlarmReport from './AlarmReport';

/**
 * 报表管理
 */
class ReportManagement extends React.PureComponent {
  render() {
    return (
      <div className="report-management">
        <TotalOilSentReceived />
        <OilProductionStatistics />
        <AlarmReport />
      </div>
    );
  }
}

export default ReportManagement;
