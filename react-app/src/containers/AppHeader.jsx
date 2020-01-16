import { Layout, Icon, Badge, Dropdown, Menu, Avatar } from "antd";
import React, { Component } from "react";
import avatar from "@/assets/images/avatar.png";
const { Header } = Layout;

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsFold: false
    };
  }
  toggleMenu = () => {
    this.setState({
      menuIsFold: !this.state.menuIsFold
    });
  };
  render() {
    const menu = (
      <Menu>
        <Menu.ItemGroup title={"用户设置"}>
          <Menu.Divider></Menu.Divider>
          <Menu.Item key="1">
            <Icon type="edit" theme="filled"></Icon>个人设置
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="setting" theme="filled"></Icon>系统设置
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.Divider></Menu.Divider>
        <Menu.Item>
          <span>
            <Icon type="logout" />
            退出登录
          </span>
        </Menu.Item>
      </Menu>
    );
    return (
      <Header className="header">
        <Icon
          type={this.state.menuIsFold ? "menu-fold" : "menu-unfold"}
          style={{ fontSize: "2rem" }}
          onClick={this.toggleMenu}
        />
        <div className="header-right">
          <a href="https://github.com/hanxiaoluan/ReactApp">
            <Icon
              type="github"
              style={{ fontSize: "2rem", color: "black", marginRight: "15px" }}
            />
          </a>
          <Badge dot>
            <a href="https://github.com/hanxiaoluan/ReactApp">
              <Icon type="bell" />
            </a>
          </Badge>
          <Dropdown
            overlay={menu}
            trigger={["click"]}
            overlayStyle={{ width: "20rem" }}
          >
            <Avatar src={avatar} size={"32px"} style={{ marginLeft: "15px" }} />
          </Dropdown>
        </div>
      </Header>
    );
  }
}
export default AppHeader;
