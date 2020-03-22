import React from 'react';
import './index.less';
import { Row, Col } from 'antd';
/**
 * 测试用
 */
class Spectacular extends React.PureComponent {

  render() {
    return <div className="spectacular">
      <Row>
        <Col span={4}>
          <div className="spectacular-child">
            <div className="child-title">
              {'储量统计'}
            </div>
            {/* <div className="child-content"></div> */}
          </div>
        </Col>
        <Col span={16}>col-16</Col>
        <Col span={4}>col-4</Col>
      </Row>
    </div>;
  }
}

export default Spectacular;
