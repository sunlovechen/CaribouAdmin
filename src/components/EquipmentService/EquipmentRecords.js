import React from 'react';
import './index.less';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

/**
 * 保养记录
 */
class EquipmentRecords extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="保养计划" key="1">
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

export default EquipmentRecords;
