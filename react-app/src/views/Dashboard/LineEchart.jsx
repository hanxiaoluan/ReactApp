import React, { Component } from "react";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";
import "echarts/theme/macarons";
class LineEchart extends Component {
  componentDidMount() {
    const { lineData } = this.props;
    const { expectedData, actualData } = lineData;
    const options = {
      legend: {
        data: ["expected", "actual"]
      },
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "cross" },
        padding: [5, 10]
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        show: true,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        boundaryGap: false,
        axisTick: { show: false }
      },
      yAxis: {
        axisTick: { show: false }
      },
      series: [
        {
          name: "expected",
          type: "line",
          smooth: true,
          data: expectedData,
          itemStyle: {
            color: "#FF005A"
          },
          lineStyle: {
            color: "#FF005A",
            width: 2
          },
          animationDuration: 2000,
          animationEasing: "cubicInOut"
        },
        {
          name: "actual",
          type: "line",
          smooth: true,
          data: actualData,
          itemStyle: {
            color: "#3888fa"
          },
          lineStyle: {
            color: "#3888fa",
            width: 2
          },
          areaStyle: {
            color: "#f3f8ff"
          },
          animationDuration: 2000,
          animationEasing: "quadraticOut"
        }
      ]
    };
    let myChart = echarts.init(
      document.getElementById("DashboardLine"),
      "macarons"
    );
    myChart.setOption(options);
  }
  render() {
    /* const { lineData } = this.props; */
    return <div id="DashboardLine" style={{ height: 300 }}></div>;
  }
}
export default LineEchart;
