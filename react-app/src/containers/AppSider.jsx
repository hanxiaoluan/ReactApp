import React, { Component } from 'react';
import { Layout } from 'antd'
const { Sider } = Layout;
class AppSider extends Component{
    constructor(props) { 
        super(props)
    }
    render() {
        return (
            <Sider>
                侧边栏
            </Sider>
        )
    }
}
export default React.memo(AppSider);
