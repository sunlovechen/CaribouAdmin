import React from 'react';
import './index.less';
import Highcharts from 'Highcharts/highstock';
require('highcharts/highcharts-more')(Highcharts);

/**
 * 用电统计
 */
class ElectricityStatistics extends React.PureComponent {
  componentDidMount() {
    Highcharts.chart('ElectricityStatistics', {
      chart: {
        type: 'gauge',
        backgroundColor: '#171e31',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
      },
      title: {
        text: ' ',
      },
      credits: {
        enabled: false,
      },
      pane: {
        startAngle: -150,
        endAngle: 150,
        background: [
          {
            backgroundColor: 'transparent',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%',
          },
        ],
      },
      yAxis: {
        min: 0,
        max: 100,
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 5,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
        tickPixelInterval: 45,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
          step: 2,
          // rotation: 'auto'
        },
        title: {
          text: ' ',
        },
        plotBands: [
          {
            from: 0,
            to: 25,
            color: '#DDDF0D', // green
          },
          {
            from: 25,
            to: 75,
            color: 'blue', // yellow
          },
          {
            from: 75,
            to: 100,
            color: '#DF5353', // red
          },
        ],
      },
      series: [
        {
          name: 'value',
          data: [80],
          tooltip: {
            valueSuffix: ' %',
          },
          dataLabels: {
            format:
              '<div style="text-align:center"><span style="font-size:25px;color:' +
              ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') +
              '">{y}</span><br/>' +
              '<span style="font-size:12px;color:silver">乙醛发油泵</span></div>',
          },
        },
      ],
    });
  }

  render() {
    return (
      <div className="detail-content">
        <div className="child-title">{'用电统计'}</div>
        <div className="child-content">
          <div id="ElectricityStatistics" />
        </div>
      </div>
    );
  }
}

export default ElectricityStatistics;
