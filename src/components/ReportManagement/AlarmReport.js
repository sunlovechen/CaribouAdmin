import React from 'react';
import './index.less';
import Highcharts from 'Highcharts/highstock';

/**
 * 报警报表
 */
class AlarmReport extends React.PureComponent {

  componentDidMount() {
    Highcharts.chart('AlarmReport', {
      chart: {
        type: 'column',
      },
      credits: {
        enabled: false,
      },
      title: {
        text: '报警统计',
      },
      xAxis: {
        type: 'category',
      },
      yAxis: {
        title: {
          text: '单位/个',
        },
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y}',
          },
        },
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> 个<br/>'
      },
      series: [{
        name: '报警统计',
        colorByPoint: true,
        data: [{
          name: '一级报警',
          y: 56,
        }, {
          name: '二级报警',
          y: 24,
        }, {
          name: '三级报警',
          y: 10,
        }],
      }],
    });
  }

  render() {
    return (
      <div className="alarm-report">
        <p className="title">{'报警报表'}</p>
        <div className="detail">
          <div id="AlarmReport" />
        </div>
      </div>
    );
  }
}

export default AlarmReport;
