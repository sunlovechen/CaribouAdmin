import React from 'react';
import './index.less';
import Highcharts from 'Highcharts/highstock';

/**
 * 用水统计
 */
class WaterStatistics extends React.PureComponent {
  componentDidMount() {
    Highcharts.chart('WaterStatistics', {
      chart: {
        type: 'areaspline',
        backgroundColor: '#171e31',
      },
      title: {
        text: ' ',
      },
      credits: {
        enabled: false,
      },
      legend: {
        itemStyle: {
          color: '#dddddd',
        },
        itemHiddenStyle: {
          color: '#666666',
        },
      },
      xAxis: {
        labels: {
          style: {
            color: '#dddddd',
          },
        },
      },
      yAxis: {
        gridLineDashStyle: 'longdash',
        labels: {
          style: {
            color: '#dddddd',
          },
        },
        title: {
          text: '单位',
          color: '#dddddd',
        },
      },
      tooltip: {
        shared: true,
        valueSuffix: ' 单位',
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.2,
        },
      },
      series: [
        {
          name: '生产用水',
          data: [
            ['03-01', 3],
            ['03-02', 7],
            ['03-03', 5],
            ['03-04', 5],
            ['03-05', 2],
            ['03-06', 4],
            ['03-07', 1],
            ['03-08', 5],
            ['03-09', 1],
          ],
          color: 'yellow',
          fillColor: {
            // 设置渐变的填充颜色
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
            },
            stops: [[0, 'yellow'], [1, 'transparent']],
          },
        },
        {
          name: '生活用水',
          data: [
            ['03-01', 1],
            ['03-02', 2],
            ['03-03', 5],
            ['03-04', 4],
            ['03-05', 6],
            ['03-06', 1],
            ['03-07', 3],
            ['03-08', 1],
            ['03-09', 7],
          ],
        },
      ],
    });
  }

  render() {
    return (
      <div className="detail-content">
        <div className="child-title">{'用水统计'}</div>
        <div className="child-content">
          <div id="WaterStatistics" />
        </div>
      </div>
    );
  }
}

export default WaterStatistics;
