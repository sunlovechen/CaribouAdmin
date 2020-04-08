import React from 'react';
import './index.less';
import { Progress } from 'antd';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import { imgUrl } from './coinstant';

/**
 * 发油台
 */
class OilPlatform extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bg: {
        width: '140px',
        height: '140px',
        background: `url(${imgUrl[this.props.id]})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'top left',
      },
    };
  }
  render() {
    return (
      <div className="oil-platform">
        <div className="circle">
          <div style={this.state.bg}></div>
          {/* <div className="percent-circle percent-circle-left">
            <div className="left-content"></div>
          </div>
          <div className="percent-circle percent-circle-right">
            <div className="right-content"></div>
          </div>
          <div className="c-c-inside"><div className="inside-content"></div></div> */}
        </div>
        <div className="detail-content">
          <div className="content-left">{'油品名称'}</div>
          <div className="content-right">{'橡胶工业溶剂油'}</div>

          <div className="content-left">{'编号'}</div>
          <div className="content-right">{'49987454210'}</div>

          <div className="content-left">{'瞬时流量'}</div>
          <div className="content-right">
            <Progress strokeColor="#0ff" className="ontime-pro" percent={60} status="active" />
          </div>

          <div className="content-left">{'预质量'}</div>
          <div className="content-right">
            <Progress percent={77} className="expected-pro" status="active" />
          </div>

          <div className="content-left">{'已发量'}</div>
          <div className="content-right">
            <Progress percent={69} className="already-pro" status="active" />
          </div>

          <div className="content-left">{'已装车数量'}</div>
          <div className="content-right">{'3辆'}</div>

          <div className="content-left">{'正在排队数量'}</div>
          <div className="content-right">{'5辆'}</div>
        </div>
      </div>
    );
  }
}

export default OilPlatform;
