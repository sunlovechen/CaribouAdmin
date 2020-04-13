import React from 'react';
import './index.less';
import Highcharts from 'Highcharts/highstock';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';

/**
 * 发油台出油统计
 */
class OilProductionStatistics extends React.PureComponent {
  componentDidMount() {
    Highcharts.chart('OilProductionStatistics', {
      title: {
        text: '发油台出油统计',
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        categories: ['2020-04-01', '2020-04-02', '2020-04-03', '2020-04-04', '2020-04-05', '2020-04-06', '2020-04-07'],
      },
      yAxis: {
        title: {
          text: '单位/顿',
        },
      },
      tooltip: {
        crosshairs: true,
        shared: true,
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },
      // plotOptions: {
      //   series: {
      //     label: {
      //       connectorAllowed: false,
      //     },
      //     pointStart: 201012,
      //   },
      // },
      series: [
        {
          name: '95号车用汽油',
          data: [43934, 52503, 69658, 97031, 119931, 137133, 154175],
        },
        {
          name: '0号车用启柴油',
          data: [24916, 24064, 29851, 32490, 30282, 38121, 40434],
        },
        {
          name: '92号车用汽油',
          data: [11744, 17722, 19771, 20185, 24377, 32147, 39387],
        },
        {
          name: '10号车用柴油',
          data: [11981, 12983, 12169, 15112, 22452, 34400, 34227],
        },
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
              },
            },
          },
        ],
      },
    });
  }

  render() {
    return (
      <div className="oil-ptatistics">
        <p className="title" style={{ display: 'inline-block', marginRight: '14px' }}>{'出油统计'}</p>
        <RangePicker format={dateFormat} defaultValue={[moment('2020-04-01', dateFormat), moment('2020-04-07', dateFormat)]} />
        <div className="detail">
          <div id="OilProductionStatistics" />
        </div>
      </div>
    );
  }
}

export default OilProductionStatistics;
