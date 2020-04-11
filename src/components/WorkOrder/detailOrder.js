import React from 'react';
import { Row, Col } from 'antd';
import './index.less';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD HH:mm:ss';

/**
 * 详情
 */
class DetailOrder extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // 根据type返回对应的详情页面
  getRenderByType = () => {
    window.console.log(this.props.detailItem);
    const { detailItem } = this.props;
    const { type } = detailItem;
    switch (type) {
      case '用火申请单':
        return (
          <Row>
            <Col span={12}>
              <label>标题：</label>
              <span>{'焚毁废弃物'}</span>
            </Col>
            <Col span={12}>
              <label>申请单位：</label>
              <span>{''}</span>
            </Col>
            <Col span={12}>
              <label>用火具体部位和内容：</label>
              <span>{''}</span>
            </Col>
            <Col span={12}>
              <label>施工用火作业单位：</label>
              <span>{''}</span>
            </Col>
            <Col span={12}>
              <label>用火人：</label>
              <span>{''}</span>
            </Col>
            <Col span={12}>
              <label>用火人特殊工种类别及编号：</label>
              <span>{''}</span>
            </Col>
            <Col span={12}>
              <label>监火人：</label>
              <span>{''}</span>
            </Col>
            <Col span={12}>
              <label>监火人证号：</label>
              <span>{''}</span>
            </Col>
            <Col span={12}>
              <label>采样时间：</label>
              <span>{''}</span>
            </Col>
            <Col span={12}>
              <label>采样点：</label>
              <span>{''}</span>
            </Col>
            <Col span={12}>
              <label>分析人：</label>
              <span>{''}</span>
            </Col>
            <Col span={12}>
              <label>分析结果：</label>
              <span>{''}</span>
            </Col>
            <Col span={12}>
              <label>申请用火开始时间：</label>
              <span>{''}</span>
            </Col>
            <Col span={12}>
              <label>申请用火结束时间：</label>
              <span>{''}</span>
            </Col>
            <Col span={12}>
              <label>备注：</label>
              <span>{''}</span>
            </Col>
          </Row>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="plan-detail">
        {this.getRenderByType()}
      </div>
    );
  }
}

export default DetailOrder;
