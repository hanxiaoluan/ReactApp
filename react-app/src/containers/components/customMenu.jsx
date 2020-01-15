import PropTypes from "prop-types";
import React, { Component } from "react";
import routes from "@/router/index.js";
import { Icon, Menu } from "antd";
import { Switch, Route, Link, withRouter } from "react-router-dom";

class CustomMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: [],
      selectedKeys: []
    };
  }
  componentDidMount() {
    let { pathname } = this.props.location;
    this.setState({
      selectedKeys: pathname
    });
  }
  renderMenuItem = ({ key, icon, title }) => {
    return (
      <Menu.Item key={key}>
        <Link to={key}>
          {icon && <Icon type={icon}></Icon>}
          <span>{title}</span>
        </Link>
      </Menu.Item>
    );
  };
  renderSubMenu = ({ key, icon, title, subs }) => {
    return (
      <Menu.SubMenu
        key={key}
        title={
          <span>
            {icon && <Icon type={icon}></Icon>}
            <span>{title}</span>
          </span>
        }
      >
        {subs && subs.map(item => {
          return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item);
        })}
      </Menu.SubMenu>
    );
  };
  render() {
    let { openKeys, selectedKeys } = this.state; 
    return (
      <Menu mode="inline" theme="dark">
        {this.props.menu && this.props.menu.map(item => {
          return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item);
        })}
      </Menu>
    );
  }
}
CustomMenu.PropTypes = {
  menu:PropTypes.array.isRequired
}
export default withRouter(CustomMenu);