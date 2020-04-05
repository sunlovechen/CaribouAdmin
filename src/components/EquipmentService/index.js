import React from 'react';
import './index.less';
import { Tabs } from 'antd';
// import EquipmentPlan from './EquipmentPlan';

const { TabPane } = Tabs;

/**
 * 设备保养
 */
class EquipmentService extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="equipment-service">
        <Tabs defaultActiveKey="1">
          <TabPane tab="保养计划" key="1">
            {/* <EquipmentPlan /> */}
            保养计划
          </TabPane>
          <TabPane tab="保养记录" key="2">
            保养记录
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default EquipmentService;
