import PropTypes from 'prop-types';
import React, { Component } from 'react';
import routes from '@/router/index.js';
import { Menu } from 'antd';
import { Icon } from '@ant-design/compatible';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import menu from './menu';

function menuIsShow(menu, role) {
  return menu.auth.find(item => item === role);
}
class CustomMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: [],
      selectedKeys: [],
    };
  }
  /* componentDidMount() {
    let { pathname } = this.props.location;
    this.setState({
      selectedKeys: pathname
    });
  } */
  renderMenuItem = ({ key, icon, title, auth }) => {
    const { role } = this.props;

    return (
      auth.find(item => item === role) && (
        <Menu.Item key={key}>
          <Link to={key}>
            {icon && <Icon type={icon}></Icon>}
            <span>{title}</span>
          </Link>
        </Menu.Item>
      )
    );
  };
  renderSubMenu = ({ key, icon, title, subs, auth }) => {
    const { role } = this.props;
    return (
      auth.find(item => item === role) && (
        <Menu.SubMenu
          key={key}
          title={
            <span>
              {icon && <Icon type={icon}></Icon>}
              <span>{title}</span>
            </span>
          }
        >
          {subs &&
            subs.map(item => {
              return item.subs && item.subs.length > 0
                ? this.renderSubMenu(item)
                : this.renderMenuItem(item);
            })}
        </Menu.SubMenu>
      )
    );
  };
  render() {
    let { openKeys, selectedKeys } = this.state;
    const { menu, role } = this.props;
    return (
      <Menu mode="inline" theme="dark">
        {menu &&
          menu.map(item => {
            return item.subs && item.subs.length > 0
              ? this.renderSubMenu(item)
              : this.renderMenuItem(item);
          })}
      </Menu>
    );
  }
}
CustomMenu.propTypes = {
  menu: PropTypes.array.isRequired,
};
export default withRouter(CustomMenu);
