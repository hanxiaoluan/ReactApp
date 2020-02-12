import React, { Component } from "react";
import echarts from "echarts/lib/echarts";
import "echarts/theme/macarons";
import "echarts/lib/component/tooltip";
/* import 'echarts/lib/component/' */
const options = {
  tooltip: {
    trigger: "item",
    formatter: "{a}<br />{b}: {c}({d}%)"
  },
  legend: {
    left: "center",
    bottom: 10,
    data: ["Industries", "Technology", "Forex", "Gold", "Forecasts"]
  },
  series: {
    type: "pie",
    name: "WEEKLY ACTIVITY",
    roseType: "radius",
    radius: [15, 95],
    center:['50%','38%'],
    data: [
      { value: 320, name: "Industries" },
      { value: 240, name: "Technology" },
      { value: 149, name: "Forex" },
      { value: 100, name: "Gold" },
      { value: 59, name: "Forecasts" }
    ]
  }
};
class PieChart extends Component {
  componentDidMount() {
    let myChart = echarts.init(document.querySelector("#PieChart"), "macarons");
    myChart.setOption(options);
  }
  render() {
    return (
      <div className="base-style" id="PieChart" style={{ height: 316 }}></div>
    );
  }
}
export default PieChart;
