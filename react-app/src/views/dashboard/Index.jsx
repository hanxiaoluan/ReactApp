import React, { Component } from "react";
import { Row, Col, Divider, Icon } from "antd";
import LineEchart from "./LineEchart";
import RadarChart from './RadarChart';
import PieChart from './PieChart';
import "./dashboard.scss";
const LineEchartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
};
class Dashboard extends Component {
  
  render() {
    return (
      <div className="dashboard">
        <Row gutter={24} className="dashboard-header">
          <Col span={6}>
            <div className="base-style github">
              <Icon type="github" className="icon-style" />
              <div>
                <span>999</span>
                <div>GitHub</div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="base-style twitter">
              <Icon type="twitter" className="icon-style" />
              <div>
                <span>999</span>
                <div>Twitter</div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="base-style google">
              <Icon type="google" className="icon-style" />
              <div>
                <span>999</span>
                <div>Google</div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="base-style facebook">
              <Icon type="facebook" className="icon-style" />
              <div>
                <span>999</span>
                <div>Facebook</div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="base-style">
          <h3>Line Echart</h3>
          <Divider />
          <LineEchart lineData={LineEchartData.newVisitis} />
        </div>
        <Row gutter={8}>
          <Col span={12}><RadarChart  /></Col>
          <Col span={12}><PieChart /></Col>
        </Row>
      </div>
    );
  }
}
export default Dashboard;
