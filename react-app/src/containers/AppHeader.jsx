import { Layout } from "antd";
import React, { Component } from "react";
const { Header } = Layout;

class AppHeader extends Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return (
            <Header>
                头部
            </Header>
        )
    }
}
export default React.memo(AppHeader);