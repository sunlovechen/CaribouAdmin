import React from 'react';
import './index.less';
import { Row, Col } from 'antd';
import { Icon } from 'antd';
import OilPlatform from './oilPlatform';

const image = require('../../assets/kanban.png');
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
      list: [{}, {}, {}],
    };
  }

  render() {
    return (
      <div className="spectacular">
        <div className="main">
          <div className="left-main">
            <div className="spectacular-child">
              <div className="child-title">{'储量统计'}</div>
              <div className="child-content">
                <Row>
                  <Col span={3}>92号</Col>
                  <Col span={16}>
                    <div className="step">
                      <div className="tip-content"></div>
                      <div className="percent" style={{ width: `${this.state.len}%` }}></div>
                    </div>
                  </Col>
                  <Col span={5}>5202.5吨</Col>
                </Row>
                <Row>
                  <Col span={3}>92号</Col>
                  <Col span={16}>
                    <div className="step">
                      <div className="tip-content"></div>
                      <div className="percent" style={{ width: `${this.state.len}%` }}></div>
                    </div>
                  </Col>
                  <Col span={5}>5202.5吨</Col>
                </Row>
                <Row>
                  <Col span={3}>92号</Col>
                  <Col span={16}>
                    <div className="step">
                      <div className="tip-content"></div>
                      <div className="percent" style={{ width: `${this.state.len}%` }}></div>
                    </div>
                  </Col>
                  <Col span={5}>5202.5吨</Col>
                </Row>
              </div>
            </div>
            <div className="spectacular-child">
              <div className="child-title">{'报警信息'}</div>
              <div className="child-content">
                <Row>
                  <Col span={8}>
                    <p>
                      危险源异常&nbsp;&nbsp;
                      <Icon type="bulb" style={{ color: 'red' }} theme="twoTone" />
                    </p>
                    <p className="bottom-line">
                      <i style={{ background: 'red' }}></i>
                      <i></i>
                      <i></i>
                    </p>
                  </Col>
                  <Col span={8}>
                    <p>
                      危险源异常&nbsp;&nbsp;
                      <Icon type="bulb" style={{ color: 'red' }} theme="twoTone" />
                    </p>
                    <p className="bottom-line">
                      <i style={{ background: 'red' }}></i>
                      <i></i>
                      <i></i>
                    </p>
                  </Col>
                  <Col span={8}>
                    <p>
                      危险源异常&nbsp;&nbsp;
                      <Icon type="bulb" style={{ color: 'red' }} theme="twoTone" />
                    </p>
                    <p className="bottom-line">
                      <i style={{ background: 'red' }}></i>
                      <i style={{ background: 'red' }}></i>
                      <i style={{ background: 'red' }}></i>
                    </p>
                  </Col>
                  <Col span={8}>
                    <p>
                      危险源异常&nbsp;&nbsp;
                      <Icon type="bulb" style={{ color: '#eaaa00' }} theme="twoTone" />
                    </p>
                    <p className="bottom-line">
                      <i style={{ background: '#eaaa00' }}></i>
                      <i></i>
                      <i></i>
                    </p>
                  </Col>
                  <Col span={8}>
                    <p>
                      危险源异常&nbsp;&nbsp;
                      <Icon type="bulb" style={{ color: '#eaaa00' }} theme="twoTone" />
                    </p>
                    <p className="bottom-line">
                      <i style={{ background: '#eaaa00' }}></i>
                      <i></i>
                      <i></i>
                    </p>
                  </Col>
                  <Col span={8}>
                    <p>
                      危险源异常&nbsp;&nbsp;
                      <Icon type="bulb" style={{ color: '#eaaa00' }} theme="twoTone" />
                    </p>
                    <p className="bottom-line">
                      <i style={{ background: '#eaaa00' }}></i>
                      <i></i>
                      <i></i>
                    </p>
                  </Col>
                  <Col span={8}>
                    <p>
                      危险源异常&nbsp;&nbsp;
                      <Icon type="bulb" style={{ color: '#eaaa00' }} theme="twoTone" />
                    </p>
                    <p className="bottom-line">
                      <i style={{ background: '#eaaa00' }}></i>
                      <i></i>
                      <i></i>
                    </p>
                  </Col>
                  <Col span={8}>
                    <p>
                      危险源异常&nbsp;&nbsp;
                      <Icon type="bulb" style={{ color: '#eaaa00' }} theme="twoTone" />
                    </p>
                    <p className="bottom-line">
                      <i style={{ background: '#eaaa00' }}></i>
                      <i style={{ background: '#eaaa00' }}></i>
                      <i></i>
                    </p>
                  </Col>
                  <Col span={8}>
                    <p>
                      危险源异常&nbsp;&nbsp;
                      <Icon type="bulb" style={{ color: '#eaaa00' }} theme="twoTone" />
                    </p>
                    <p className="bottom-line">
                      <i style={{ background: '#eaaa00' }}></i>
                      <i style={{ background: '#eaaa00' }}></i>
                      <i style={{ background: '#eaaa00' }}></i>
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="spectacular-child">
              <div className="child-title">
                {'待办事项'} <Icon type="minus-circle" />
              </div>
              <div className="child-content">
                <p className="wait">
                  <Icon type="exclamation-circle" theme="filled" style={{ color: 'red' }} />
                  &nbsp;&nbsp;仓库线路出现故障，要及时增派相关人员去现场
                </p>
                <p className="wait">
                  <Icon type="exclamation-circle" theme="filled" style={{ color: 'red' }} />
                  &nbsp;&nbsp;仓库线路出现故障，要及时增派相关人员去现场
                </p>
                <p className="wait">
                  <Icon type="exclamation-circle" theme="filled" style={{ color: 'red' }} />
                  &nbsp;&nbsp;仓库线路出现故障，要及时增派相关人员去现场
                </p>
                <p className="wait">
                  <Icon type="exclamation-circle" theme="filled" style={{ color: 'red' }} />
                  &nbsp;&nbsp;仓库线路出现故障，要及时增派相关人员去现场
                </p>
                <p className="wait">
                  <Icon type="exclamation-circle" theme="filled" style={{ color: 'red' }} />
                  &nbsp;&nbsp;仓库线路出现故障，要及时增派相关人员去现场
                </p>
                <p className="wait">
                  <Icon type="clock-circle" theme="filled" style={{ color: '#66ccff' }} />
                  &nbsp;&nbsp;仓库线路出现故障，要及时增派相关人员去现场
                </p>
                <p className="wait">
                  <Icon type="clock-circle" theme="filled" style={{ color: '#66ccff' }} />
                  &nbsp;&nbsp;仓库线路出现故障，要及时增派相关人员去现场
                </p>
                <p className="wait">
                  <Icon type="clock-circle" theme="filled" style={{ color: '#66ccff' }} />
                  &nbsp;&nbsp;仓库线路出现故障，要及时增派相关人员去现场
                </p>
                <p className="wait">
                  <Icon type="clock-circle" theme="filled" style={{ color: '#66ccff' }} />
                  &nbsp;&nbsp;仓库线路出现故障，要及时增派相关人员去现场
                </p>
                <p className="wait">
                  <Icon type="clock-circle" theme="filled" style={{ color: '#66ccff' }} />
                  &nbsp;&nbsp;仓库线路出现故障，要及时增派相关人员去现场
                </p>
              </div>
            </div>
          </div>
          <div className="vedio-main">
            <img className="image" src={image} />
          </div>
          <div className="right-main">
            <div className="spectacular-child">
              <div className="child-title">{'发油台'}</div>
              <div className="child-content">
                {this.state.list.map(_item => {
                  return <OilPlatform />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Spectacular;
