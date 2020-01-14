import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { Layout } from "antd";
import AppHeader from "./AppHeader";
import AppSider from "./AppSider";
import "./styles/layout.scss";
const { Content } = Layout;

class AppLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout className="app">
        <AppSider className="aside"></AppSider>
        <Layout>
          <AppHeader className="header"></AppHeader>
          <Content className="content">
            <Switch>
              <Route path="/dashboard">dashboard</Route>
              <Route path="/general">general</Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default withRouter(AppLayout);
