import React from 'react';
import './index.less';
import Highcharts from 'Highcharts/highstock';

/**
 * 炼煤统计
 */
class CoalmakingStatistics extends React.PureComponent {

  componentDidMount() {
    const chart = Highcharts.chart('CoalmakingStatistics', {
      chart: {
        spacing: [40, 0, 40, 0],
        type: 'pie',
        backgroundColor: '#171e31',
      },
      title: {
        floating: true,
        text: ' ',
        style: {
          color: '#dddddd',
        },
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      legend: {
        enabled: true,
        floating: true,
        width: 120,
        align: 'left',
        y: -100,
        itemStyle: {
          color: '#dddddd',
        },
        itemHiddenStyle: {
          color: '#666666',
        },
      },
      plotOptions: {
        pie: {
          showInLegend: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            },
          },
          point: {
            events: {
              mouseOver: function (e) {  // 鼠标滑过时动态更新标题
                // 标题更新函数，API 地址：https://api.hcharts.cn/highcharts#Chart.setTitle
                // chart.setTitle({
                //   text: e.target.name + '\t' + e.target.y + ' %',
                // });
              },
            },
          },
        },
      },
      series: [{
        innerSize: '40%',
        name: '占比',
        dataLabels: {
          color: '#dddddd',
        },
        data: [
          ['煤炭A', 26.8],
          ['煤炭B', 32.8],
          ['煤炭C', 12.8],
          ['煤炭D', 18.5],
          ['煤炭E', 5.2],
        ],
      }],
    }, function (e) { // 图表初始化完毕后的会掉函数
      // 环形图圆心
      const centerY = e.series[0].center[1];
      // 动态设置标题位置
      e.setTitle({
        y: centerY,
      });
    });
  }

  render() {
    return (
      <div className="detail-content" style={{ height: '48vh' }}>
        <div className="child-title">{'炼煤统计'}</div>
        <div className="child-content">
          <div id="CoalmakingStatistics" style={{ height: '42vh' }} />
        </div>
      </div>
    );
  }

}

export default CoalmakingStatistics;
