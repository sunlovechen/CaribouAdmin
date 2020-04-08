import React from 'react';
import './index.less';
import { Tabs } from 'antd';
import MaintenancePlan from './MaintenancePlan';
import EquipmentFailure from './EquipmentFailure';
import PassivePlan from './PassivePlan';
import MaintenanceRecords from './MaintenanceRecords';

const { TabPane } = Tabs;

/**
 * 设备保养
 */
class EquipmentService extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="equipment-service">
        <Tabs defaultActiveKey="1">
          <TabPane tab="保养计划" key="1">
            <MaintenancePlan deviceItem={this.props.deviceItem} />
          </TabPane>
          <TabPane tab="保养记录" key="2">
            <MaintenanceRecords deviceItem={this.props.deviceItem} />
          </TabPane>
          <TabPane tab="被动保养记录" key="3">
            被动保养记录
          </TabPane>
          <TabPane tab="维修计划" key="4">
            维修计划
          </TabPane>
          <TabPane tab="维修记录" key="5">
            维修记录
          </TabPane>
          <TabPane tab="被动维修记录" key="6">
            被动维修记录
          </TabPane>
          <TabPane tab="被动计划" key="7">
            <PassivePlan deviceItem={this.props.deviceItem} />
          </TabPane>
          <TabPane tab="设备故障" key="8">
            <EquipmentFailure deviceItem={this.props.deviceItem} />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default EquipmentService;
