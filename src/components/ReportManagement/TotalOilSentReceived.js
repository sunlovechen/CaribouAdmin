import React from 'react';
import './index.less';
import Highcharts from 'Highcharts/highstock';

/**
 * 总收发油
 */
class TotalOilSentReceived extends React.PureComponent {

  componentDidMount() {
    Highcharts.chart('TotalOilSentReceived', {
      chart: {
        type: 'column',
      },
      title: {
        text: '收发油储量分类统计',
      },
      xAxis: {
        categories: ['95号车用汽油', '0号车用柴油', '92号车用汽油', '10号车专用柴油'],
      },
      credits: {
        enabled: false,
      },
      yAxis: {
        min: 0,
        title: {
          text: '单位/顿',
        },
        stackLabels: {  // 堆叠数据标签
          enabled: true,
          style: {
            // fontWeight: 'bold',
            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray',
          },
        },
      },
      legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false,
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.x + '</b><br/>' +
            this.series.name + ': ' + this.y + '顿<br/>' +
            '占比：' + Number(this.y / this.point.stackTotal * 100).toFixed(2) + ' %' + '<br/>' +
            '总量: ' + this.point.stackTotal + '顿';
        },
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
            style: {
              // 如果不需要数据标签阴影，可以将 textOutline 设置为 'none'
              textOutline: '1px 1px black',
            },
          },
        },
      },
      series: [{
        name: '实发',
        data: [2212.15, 9013, 4762.11, 5781.22],
      }, {
        name: '剩余',
        data: [4532.98, 9812.2, 3131.8, 4441.09],
      }],
    });
  }

  render() {
    return (
      <div className="total-oil">
        <p className="title">{'储量统计'}</p>
        <div className="detail">
          <div id="TotalOilSentReceived" />
        </div>
      </div>
    );
  }
}

export default TotalOilSentReceived;
