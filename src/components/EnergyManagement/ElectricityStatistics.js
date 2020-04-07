import React from 'react';
import './index.less';
import Highcharts from 'Highcharts/highstock';
require('highcharts/highcharts-more')(Highcharts);

/**
 * 用电统计
 */
class ElectricityStatistics extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: [11, 72, 80, 66, 79, 45, 49, 69],
    };
  }
  componentDidMount() {
    this.state.list.forEach((item, index) => {
      this.setHightCharts(item, `ElectricityStatistics${index}`);
    })
  }

  setHightCharts(value, id) {
    Highcharts.chart(id, {
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
      plotOptions: {
        series: {
          enableMouseTracking: false,
        },
        gauge: {
          dial: {
            radius: '70%',
            backgroundColor: '#2287d7',
          },
          pivot: {
            radius: 0,
            backgroundColor: '#2287d7',
          },
        },
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
          enabled: false,
          // rotation: 'auto'
        },
        title: {
          text: ' ',
        },
        plotBands: [
          {
            from: 0,
            to: 25,
            color: '#ffe600',
          },
          {
            from: 25,
            to: 75,
            color: '#2287d7',
          },
          {
            from: 75,
            to: 100,
            color: '#ff0000',
          },
        ],
      },
      series: [
        {
          name: '乙醇发油泵',
          data: [value],
          tooltip: {
            valueSuffix: ' %',
          },
          dataLabels: {
            borderColor: 'transpant',
            formatter: function () {
              return '<div style="color:#dddddd; text-align: center;"><div style="font-size:14px; font-weight: bold">' + this.y + '%</div><div>' + this.series.name + '</div></div>';
            },
            useHTML: true,
            y: 78,
          },
        },
      ],
    });
  }

  render() {
    return (
      <div className="detail-content">
        <div className="child-title">{'用电统计'}</div>
        <div className="child-content electricity-statistics-content">
          {
            this.state.list.map((_item, index) => {
              return <div className="ElectricityStatistics" key={`ElectricityStatistics${index}`} id={`ElectricityStatistics${index}`} />
            })
          }
        </div>
      </div>
    );
  }
}

export default ElectricityStatistics;
