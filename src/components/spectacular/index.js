import React from 'react';
import './index.less';
import { Row, Col } from 'antd';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import { Icon } from 'antd';
/**
 * 测试用
 */
class Spectacular extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      notMerge: true,
      lazyUpdate: true,
      len: '60',
    };
  }
  getOption() {
    const option = {
      title: {
        text: '',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: [''],
        textStyle: {
          fontSize: 18, //字体大小
          color: '#6c707b', //字体颜色
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        show: false,

      },
      yAxis: {
        // type: 'category',
        data: ['92号', '95', '0号'],
        splitLine: {
          show: false,
        },
        axisTick: {       //y轴刻度线
          show: false,
        },
      },
      series: [
        {
          name: '2011年',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230],
          lineStyle: {
            width: 0, // 线宽是0
            color: '#189ba3', // 线的颜色是透明的
          },
        },
      ],
    };
    return option;
  }
  render() {
    return <div className="spectacular">
      <Row>
        <Col span={6}>
          <div className="spectacular-child">
            <div className="child-title">
              {'储量统计'}
            </div>
            <div className="child-content">
              {/* <ReactEcharts
                className="chart-content"
                option={this.getOption()}
                notMerge={this.state.notMerge}
                lazyUpdate={this.state.lazyUpdate}
                theme={"theme_name"}
                style={{width: '100%', height: '150px'}}
              // onChartReady={this.onChartReadyCallback}
              // onEvents={EventsDict}
              /> */}
              <Row>
                <Col span={3}>
                  92号
                </Col>
                <Col span={16}>
                  <div className="step">
                    <div className="tip-content"></div>
                    <div className="percent" style={{ width: `${this.state.len}%` }}></div>
                  </div>
                </Col>
                <Col span={5}>
                  5202.5吨
                </Col>
              </Row>
              <Row>
                <Col span={3}>
                  92号
                </Col>
                <Col span={16}>
                  <div className="step">
                    <div className="tip-content"></div>
                    <div className="percent" style={{ width: `${this.state.len}%` }}></div>
                  </div>
                </Col>
                <Col span={5}>
                  5202.5吨
                </Col>
              </Row>
              <Row>
                <Col span={3}>
                  92号
                </Col>
                <Col span={16}>
                  <div className="step">
                    <div className="tip-content"></div>
                    <div className="percent" style={{ width: `${this.state.len}%` }}></div>
                  </div>
                </Col>
                <Col span={5}>
                  5202.5吨
                </Col>
              </Row>
            </div>
          </div>
          <div className="spectacular-child">
            <div className="child-title">
              {'报警信息'}
            </div>
            <div className="child-content">
              <Row>
                <Col span={8}>
                  <p>危险源异常<Icon type="bulb" style={{ color: "red" }} theme="twoTone" /></p>
                  <p className="bottom-line"><i style={{ background: "red" }}></i><i></i><i></i></p>
                </Col>
                <Col span={8}>
                  <p>危险源异常<Icon type="bulb" style={{ color: "red" }} theme="twoTone" /></p>
                  <p className="bottom-line"><i style={{ background: "red" }}></i><i></i><i></i></p>
                </Col>
                <Col span={8}>
                  <p>危险源异常<Icon type="bulb" style={{ color: "red" }} theme="twoTone" /></p>
                  <p className="bottom-line"><i style={{ background: "red" }}></i><i style={{ background: "red" }}></i><i style={{ background: "red" }}></i></p>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <p>危险源异常<Icon type="bulb" style={{ color: "#eaaa00" }} theme="twoTone" /></p>
                  <p className="bottom-line"><i style={{ background: "#eaaa00" }}></i><i></i><i></i></p>
                </Col>
                <Col span={8}>
                  <p>危险源异常<Icon type="bulb" style={{ color: "#eaaa00" }} theme="twoTone" /></p>
                  <p className="bottom-line"><i style={{ background: "#eaaa00" }}></i><i></i><i></i></p>
                </Col>
                <Col span={8}>
                  <p>危险源异常<Icon type="bulb" style={{ color: "#eaaa00" }} theme="twoTone" /></p>
                  <p className="bottom-line"><i style={{ background: "#eaaa00" }}></i><i style={{ background: "#eaaa00" }}></i><i style={{ background: "#eaaa00" }}></i></p>
                </Col>
              </Row>
            </div>
          </div>
          <div className="spectacular-child">
            <div className="child-title">
              {'待办事项'} <Icon type="minus-circle" />
            </div>
            <div className="child-content">
              <p className="wait"><Icon type="exclamation-circle" theme="filled" style={{ color: "red"}}/>&nbsp;&nbsp;仓库线路出现故障，要及时增派相关人员去现场</p>
              <p className="wait"><Icon type="clock-circle" theme="filled" style={{ color: "#66ccff"}}/>&nbsp;&nbsp;仓库线路出现故障，要及时增派相关人员去现场</p>
            </div>
          </div>
        </Col>
        <Col span={12}>col-16</Col>
        <Col span={6}>col-4</Col>
      </Row>
    </div >;
  }
}

export default Spectacular;
