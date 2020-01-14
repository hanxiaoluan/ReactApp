import React, { Component } from "react";
import { Layout, Icon } from "antd";
const { Sider, } = Layout;
class AppSider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Sider className="aside">
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
        侧边栏
      </Sider>
    );
  }
}
export default React.memo(AppSider);
