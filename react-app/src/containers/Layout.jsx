import React, { Component } from 'react';
import { Route,Redirect,Switch,withRouter } from 'react-router-dom';
import {Layout} from 'antd';
import AppHeader from './AppHeader';
import AppSider from './AppSider';
const { Content } = Layout;

class AppLayout extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Layout>
                <AppSider></AppSider>
                <Layout>
                    <AppHeader></AppHeader>
                    <Content>
                        <Switch>
                            <Route path="/dashboard">dashboard</Route>
                            <Route path="/general">general</Route>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
export default withRouter(AppLayout);