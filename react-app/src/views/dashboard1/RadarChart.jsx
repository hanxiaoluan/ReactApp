import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/theme/macarons';
/* import 'echarts/lib/component' */
const options = {
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  legend: {
    left: 'center',
    bottom: 10,
    data: ['Allocated Budget', 'Expected Spending', 'Actual Spending'],
  },
  radar: {
    radius: '60%',
    center: ['50%', '42%'],
    splitNumber: 8,
    splitArea: {
      areaStyle: {
        color: 'rgba(127,95,132,.3)',
        opacity: 1,
        shadowBlur: 45,
        shadowColor: 'rgba(0,0,0,.5)',
        shadowOffsetX: 0,
        shadowOffsetY: 15,
      },
    },
    indicator: [
      { name: 'Sales', max: 10000 },
      { name: 'Marketing', max: 20000 },
      { name: 'Development', max: 20000 },
      { name: 'Customer Support', max: 20000 },
      { name: 'Techology', max: 20000 },
      { name: 'Administration', max: 20000 },
    ],
  },
  series: {
    type: 'radar',
    symbol: 'none',
    areaStyle: {
      shadowBlur: 13,
      shadowColor: 'rgba(0,0,0,.2)',
      shadowOffsetX: 0,
      shadowOffsetY: 10,
      opacity: 1,
    },
    data: [
      {
        name: 'Allocated Budget',
        value: [5000, 7000, 12000, 11000, 15000, 14000],
      },
      {
        name: 'Expected Spending',
        value: [4000, 9000, 15000, 15000, 13000, 11000],
      },
      {
        name: 'Actual Spending',
        value: [5500, 11000, 12000, 15000, 12000, 12000],
      },
    ],
  },
};
class RadarChart extends Component {
  componentDidMount() {
    let myEchart = echarts.init(
      document.querySelector('#RadarChart'),
      'macarons',
    );
    myEchart.setOption(options);
  }
  render() {
    return (
      <div className="base-style" id="RadarChart" style={{ height: 316 }}></div>
    );
  }
}
export default RadarChart;
