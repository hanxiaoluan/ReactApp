import React, { Component } from "react";
import { Layout, Icon } from "antd";
import CustomMenu from "./components/CustomMenu.jsx";
const { Sider } = Layout;

class AppSider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { menu, collapsed } = this.props;
    return (
      <Sider className="aside" collapsed={collapsed}>
        <div className="logo">
          <a
            href="https://github.com/hanxiaoluan/ReactApp"
            rel="noopener noreferer"
          >
            <Icon
              type="github"
              style={{ fontSize: "2.8rem", color: "#fff" }}
            ></Icon>
          </a>
        </div>
        <CustomMenu menu={menu}></CustomMenu>
      </Sider>
    );
  }
}
export default React.memo(AppSider);
