import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { Layout } from "antd";
import AppHeader from "./AppHeader";
import AppSider from "./AppSider";
import menu from "./components/menu";
import "./styles/layout.scss";
import routes from "@/router/index.js";
const { Content } = Layout;

class AppLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout className="app">
        <AppSider className="aside" menu={menu}></AppSider>
        <Layout>
          <AppHeader className="header"></AppHeader>
          <Content className="content">
            <Switch>
              {routes.map(item => {
                return (
                  <Route
                    path={item.path}
                    key={item.path}
                    exact
                    render={routeProps => (
                      <item.component {...routeProps}></item.component>
                    )}
                  ></Route>
                );
              })}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default withRouter(AppLayout);
