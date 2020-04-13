import React from 'react';
import { Row, Col } from 'antd';
import './index.less';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD';

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
              <span>{'萧山油库'}</span>
            </Col>
            <Col span={12}>
              <label>用火具体部位和内容：</label>
              <span>{'厂区A栋大平地'}</span>
            </Col>
            <Col span={12}>
              <label>施工用火作业单位：</label>
              <span>{'萧山房务公司'}</span>
            </Col>
            <Col span={12}>
              <label>用火人：</label>
              <span>{'李人'}</span>
            </Col>
            <Col span={12}>
              <label>用火人特殊工种类别及编号：</label>
              <span>{'JK-001'}</span>
            </Col>
            <Col span={12}>
              <label>监火人：</label>
              <span>{'李奎'}</span>
            </Col>
            <Col span={12}>
              <label>监火人证号：</label>
              <span>{'JH-001'}</span>
            </Col>
            <Col span={12}>
              <label>采样时间：</label>
              <span>{'2020-04-21'}</span>
            </Col>
            <Col span={12}>
              <label>采样点：</label>
              <span>{'萧山油库1号'}</span>
            </Col>
            <Col span={12}>
              <label>分析人：</label>
              <span>{'王大'}</span>
            </Col>
            <Col span={12}>
              <label>分析结果：</label>
              <span>{'没问题'}</span>
            </Col>
            <Col span={12}>
              <label>申请用火开始时间：</label>
              <span>{'2020-04-12'}</span>
            </Col>
            <Col span={12}>
              <label>申请用火结束时间：</label>
              <span>{'2020-04-12'}</span>
            </Col>
            <Col span={12}>
              <label>备注：</label>
              <span>{'无话可说'}</span>
            </Col>
          </Row>
        );
      case '维护申请单':
        return (
          <Row>
            <Col span={12}>
              <label>设备类型：</label>
              <span>{'油罐'}</span>
            </Col>
            <Col span={12}>
              <label>设备名称：</label>
              <span>{'G-0-11'}</span>
            </Col>
            <Col span={12}>
              <label>校验日期：</label>
              <span>{'2020-02-11'}</span>
            </Col>
            <Col span={12}>
              <label>维护日期：</label>
              <span>{'2020-02-12'}</span>
            </Col>
            <Col span={12}>
              <label>维护人：</label>
              <span>{'赵有光'}</span>
            </Col>
            <Col span={12}>
              <label>情况描述：</label>
              <span>{'维护工作'}</span>
            </Col>
            <Col span={12}>
              <label>备注：</label>
              <span>{'维护完成'}</span>
            </Col>
          </Row>
        );
      case '维修申请单':
        return (
          <Row>
            <Col span={12}>
              <label>设备类型：</label>
              <span>{'油罐'}</span>
            </Col>
            <Col span={12}>
              <label>设备名称：</label>
              <span>{'G-0-12'}</span>
            </Col>
            <Col span={12}>
              <label>维修日期：</label>
              <span>{'2020-02-11'}</span>
            </Col>
            <Col span={12}>
              <label>维修人：</label>
              <span>{'钱二'}</span>
            </Col>
            <Col span={12}>
              <label>维修部件：</label>
              <span>{'罐体'}</span>
            </Col>
            <Col span={12}>
              <label>情况描述：</label>
              <span>{'维修中ing'}</span>
            </Col>
            <Col span={12}>
              <label>备注：</label>
              <span>{'维修成功'}</span>
            </Col>
          </Row>
        );
      case '用电申请单':
        return (
          <Row>
            <Col span={12}>
              <label>标题：</label>
              <span>{'用电'}</span>
            </Col>
            <Col span={12}>
              <label>申请单位：</label>
              <span>{'杭州用电厂'}</span>
            </Col>
            <Col span={12}>
              <label>工程名称：</label>
              <span>{'某工程'}</span>
            </Col>
            <Col span={12}>
              <label>施工单位：</label>
              <span>{'某单位'}</span>
            </Col>
            <Col span={12}>
              <label>施工地点：</label>
              <span>{'某地'}</span>
            </Col>
            <Col span={12}>
              <label>用电设备及功率：</label>
              <span>{'功率大'}</span>
            </Col>
            <Col span={12}>
              <label>电源接入点：</label>
              <span>{'具体接入点'}</span>
            </Col>
            <Col span={12}>
              <label>工作电压：</label>
              <span>{'打压超级大'}</span>
            </Col>
            <Col span={12}>
              <label>临时用电人：</label>
              <span>{'孙某'}</span>
            </Col>
            <Col span={12}>
              <label>备注：</label>
              <span>{'用电申请不批'}</span>
            </Col>
          </Row>
        );
      case '高处申请单':
        return (
          <Row>
            <Col span={12}>
              <label>标题：</label>
              <span>{'高处申请单'}</span>
            </Col>
            <Col span={12}>
              <label>申请单位：</label>
              <span>{'江苏油库'}</span>
            </Col>
            <Col span={12}>
              <label>施工单位：</label>
              <span>{'江苏油库'}</span>
            </Col>
            <Col span={12}>
              <label>施工单位负责人：</label>
              <span>{'李某'}</span>
            </Col>
            <Col span={12}>
              <label>作业内容：</label>
              <span>{'作业内容'}</span>
            </Col>
            <Col span={12}>
              <label>施工地点：</label>
              <span>{'某地'}</span>
            </Col>
            <Col span={12}>
              <label>作业人：</label>
              <span>{'张某'}</span>
            </Col>
            <Col span={12}>
              <label>监护人：</label>
              <span>{'周某'}</span>
            </Col>
            <Col span={12}>
              <label>监护人证号：</label>
              <span>{'JA-002'}</span>
            </Col>
            <Col span={12}>
              <label>许可证有效期起始日期：</label>
              <span>{'2019-12-11'}</span>
            </Col>
            <Col span={12}>
              <label>许可证有效期截止日期：</label>
              <span>{'2020-04-11'}</span>
            </Col>
            <Col span={12}>
              <label>备注：</label>
              <span>{'备注暂时无'}</span>
            </Col>
          </Row>
        );
      case '盲板抽堵申请单':
        return (
          <Row>
            <Col span={12}>
              <label>标题：</label>
              <span>{'盲板抽堵申请单'}</span>
            </Col>
            <Col span={12}>
              <label>盲板编号：</label>
              <span>{'AD123'}</span>
            </Col>
            <Col span={12}>
              <label>作业类型：</label>
              <span>{'类型'}</span>
            </Col>
            <Col span={12}>
              <label>施工单位：</label>
              <span>{'单位'}</span>
            </Col>
            <Col span={12}>
              <label>施工单位负责人：</label>
              <span>{'周某'}</span>
            </Col>
            <Col span={12}>
              <label>联合装置：</label>
              <span>{'装置'}</span>
            </Col>
            <Col span={12}>
              <label>设备管道名称：</label>
              <span>{'名称'}</span>
            </Col>
            <Col span={12}>
              <label>作业人：</label>
              <span>{'夏某'}</span>
            </Col>
            <Col span={12}>
              <label>作业人证件号：</label>
              <span>{'KI789'}</span>
            </Col>
            <Col span={12}>
              <label>设备介质：</label>
              <span>{'介质'}</span>
            </Col>
            <Col span={12}>
              <label>设备温度：</label>
              <span>{'36.8'}</span>
            </Col>
            <Col span={12}>
              <label>设备压力：</label>
              <span>{'21'}</span>
            </Col>
            <Col span={12}>
              <label>盲板材料：</label>
              <span>{'P2'}</span>
            </Col>
            <Col span={12}>
              <label>盲板规格：</label>
              <span>{'A5'}</span>
            </Col>
            <Col span={12}>
              <label>垫片材质：</label>
              <span>{'D2'}</span>
            </Col>
            <Col span={12}>
              <label>垫片规格：</label>
              <span>{'PP'}</span>
            </Col>
            <Col span={12}>
              <label>备注：</label>
              <span>{'备注了'}</span>
            </Col>
          </Row>
        );
      case '起重申请单':
        return (
          <Row>
            <Col span={12}>
              <label>标题：</label>
              <span>{'起重申请单'}</span>
            </Col>
            <Col span={12}>
              <label>申请单位：</label>
              <span>{'江苏油库'}</span>
            </Col>
            <Col span={12}>
              <label>作业地点：</label>
              <span>{'江苏某地'}</span>
            </Col>
            <Col span={12}>
              <label>作业内容：</label>
              <span>{'认真作业'}</span>
            </Col>
            <Col span={12}>
              <label>起重指挥人员：</label>
              <span>{'郑某'}</span>
            </Col>
            <Col span={12}>
              <label>指挥人操作证编号：</label>
              <span>{'AK-011'}</span>
            </Col>
            <Col span={12}>
              <label>起重操作人员：</label>
              <span>{'刘某人'}</span>
            </Col>
            <Col span={12}>
              <label>操作人操作证编号：</label>
              <span>{'KK-002'}</span>
            </Col>
            <Col span={12}>
              <label>司索人员：</label>
              <span>{'刘某人'}</span>
            </Col>
            <Col span={12}>
              <label>司索人操作证编号：</label>
              <span>{'DD-01'}</span>
            </Col>
            <Col span={12}>
              <label>监护人：</label>
              <span>{'刘某'}</span>
            </Col>
            <Col span={12}>
              <label>监护人资格证编号：</label>
              <span>{'AS-022'}</span>
            </Col>
            <Col span={12}>
              <label>作业开始时间：</label>
              <span>{'2020-04-15'}</span>
            </Col>
            <Col span={12}>
              <label>作业结束时间：</label>
              <span>{'2020-04-16'}</span>
            </Col>
            <Col span={12}>
              <label>备注：</label>
              <span>{'备注'}</span>
            </Col>
          </Row>
        );
      case '受限申请单':
        return (
          <Row>
            <Col span={12}>
              <label>标题：</label>
              <span>{'受限申请单'}</span>
            </Col>
            <Col span={12}>
              <label>申请单位：</label>
              <span>{'萧山单位'}</span>
            </Col>
            <Col span={12}>
              <label>施工单位：</label>
              <span>{'某施工单位'}</span>
            </Col>
            <Col span={12}>
              <label>设备所属单位：</label>
              <span>{'萧山单位'}</span>
            </Col>
            <Col span={12}>
              <label>受限空间名称：</label>
              <span>{'计加名'}</span>
            </Col>
            <Col span={12}>
              <label>原有介质：</label>
              <span>{'P3'}</span>
            </Col>
            <Col span={12}>
              <label>主要危险因素：</label>
              <span>{'无'}</span>
            </Col>
            <Col span={12}>
              <label>作业内容：</label>
              <span>{'工作'}</span>
            </Col>
            <Col span={12}>
              <label>作业人：</label>
              <span>{'华某'}</span>
            </Col>
            <Col span={12}>
              <label>监护人：</label>
              <span>{'沈某'}</span>
            </Col>
            <Col span={12}>
              <label>采样时间：</label>
              <span>{'2020-11-12'}</span>
            </Col>
            <Col span={12}>
              <label>分析人：</label>
              <span>{'贾某'}</span>
            </Col>
            <Col span={12}>
              <label>分析结果：</label>
              <span>{'受限'}</span>
            </Col>
            <Col span={12}>
              <label>开工时间：</label>
              <span>{'2020-01-11'}</span>
            </Col>
            <Col span={12}>
              <label>备注：</label>
              <span>{'受限申请'}</span>
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
