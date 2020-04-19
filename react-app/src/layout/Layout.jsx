import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import AppHeader from './AppHeader';
import AppSider from './AppSider';
import menu from './components/menu';
import './styles/layout.scss';
import Authority from '@/components/authority/Authority';
import { getToken } from '@/utils/cookie';
const { Content } = Layout;

class AppLayout extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}
  render() {
    const { isFold, role } = this.props;
    const token = getToken();
    if (!token) return <Redirect to="/login" />;
    return (
      <Layout className="app">
        <AppSider
          className="aside"
          menu={menu}
          collapsed={isFold}
          {...this.props}
        ></AppSider>
        <Layout style={{ marginLeft: isFold ? '80px' : '200px' }}>
          <AppHeader className="header"></AppHeader>
          <Content className="content">
            <Authority />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  isFold: state.menuIsFold.isFold,
  role: state.user.role,
  permission: state.user.permission,
});
export default withRouter(connect(mapStateToProps)(AppLayout));
