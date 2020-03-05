import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
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
    const { isFold } = this.props;
    return (
      <Layout className="app">
        <AppSider className="aside" menu={menu} collapsed={isFold}></AppSider>
        <Layout style={{ marginLeft: isFold ? "80px" : "200px" }}>
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
const mapStateToProps = (state, ownProps) => ({
  isFold: state.menuIsFold.isFold
});
export default withRouter(connect(mapStateToProps)(AppLayout));
