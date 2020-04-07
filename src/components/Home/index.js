import React from 'react';
import './index.less';
import { Row, Col } from 'antd';
import Highcharts from 'Highcharts/highstock';

/**
 * 首页
 */
class Home extends React.PureComponent {

  componentDidMount() {
    Highcharts.chart('home-container', {
      chart: {
        type: 'column',
      },
      title: {
        text: '',
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        categories: [
          '周一', '周二', '周三', '周四', '周五', '周六', '周日',
        ],
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: '',
        },
      },
      tooltip: {
        // head + 每个 point + footer 拼接成完整的 table
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          borderWidth: 0,
        },
      },
      series: [{
        name: '1',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5],
      }, {
        name: '2',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3],
      }, {
        name: '3',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6],
      }, {
        name: '4',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4],
      }],
    });
  }

  render() {
    return (
      <div className="home-main">
        <Row>
          <Col span={12} className="content-detail">
            <h4>会议通知</h4>
            <p>2020-01-会议通知</p>
            <p>会议通知1。。。。</p>
            <p>会议通知2</p>
            <p>会议通知3</p>
            <p>会议通知4</p>
          </Col>
          <Col span={12} className="content-detail">
            <h4>公告纪要</h4>
            <p>2020-01-10公告纪要</p>
            <p>公告纪要1。。。。</p>
            <p>公告纪要2</p>
            <p>公告纪要3</p>
            <p>公告纪要4</p>
          </Col>

          <Col span={12} className="content-detail">
            <h4>紧急待办</h4>
            <p>2020-01-紧急待办</p>
            <p>紧急待办1。。。。</p>
            <p>紧急待办2</p>
            <p>紧急待办3</p>
            <p>紧急待办4</p>
          </Col>
          <Col span={12} className="content-detail">
            <h4>巡检检修</h4>
            <p>2020-01-10巡检检修</p>
            <p>巡检检修1。。。。</p>
            <p>巡检检修2</p>
            <p>巡检检修3</p>
            <p>巡检检修4</p>
          </Col>
        </Row>
        <h4>危险化学品类型统计</h4>
        <div id="home-container" />
      </div>
    );
  }

}

export default Home;
