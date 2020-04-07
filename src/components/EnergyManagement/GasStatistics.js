import React from 'react';
import './index.less';
import { Icon } from 'antd';

/**
 * 用电统计
 */
class GasStatistics extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: [11, 72, 80, 66, 79, 45, 49, 69],
    };
  }

  bodyContentRender = (value, name) => {
    return (<div className="gas-detail">
      <p>{value}%</p>
      <div className="gas-detail-content">
        <div className="gas-progress">
          <div className="warn"></div>
          <div className="normal"></div>
          <div className="low"></div>
        </div>
        <div className="gas-progress-icon" style={{ marginTop: `-${34 / 100 * value}vh` }}>
          <Icon type="caret-right" />
          <Icon type="caret-left" />
        </div>
      </div>
      <p>{name}</p>
    </div>);
  }

  render() {
    return (
      <div className="detail-content">
        <div className="child-title">{'用电统计'}</div>
        <div className="child-content gas-statistics-content">
          {
            this.state.list.map((item, index) => {
              return this.bodyContentRender(item, `气${index + 1}`);
            })
          }
        </div>
      </div>
    );
  }

}

export default GasStatistics;
