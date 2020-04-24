import React, { Component } from 'react';
import {
  Layout,
  Row,
  Col,
  Table,
  Modal,
  Button,
  Dropdown,
  Menu,
  message,
  Tooltip,
  Drawer,
  Input,
  Divider,
  Tree,
} from 'antd';
import { getRoleList, postRoleList } from '@/api/role';
import { getUser, postUser } from '@/api/login';
import { postPermission } from '@/api/permission';
import {
  DownOutlined,
  UserOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import treeData from './treeData';
class UserManage extends Component {
  state = {
    visible: false,
    roleValue: 'guest',
    expandedKeys: [],
    checkedKeys: [],
    selectedKeys: [],
    autoExpandParent: true,
  };
  showDrawer = () => {
    this.setState({ visible: true });
  };
  onClose = () => {
    this.setState({ visible: false });
  };
  onExpand = (expandedKeys) => {
    this.setState({ expandedKeys, autoExpandParent: false });
  };
  onCheck = (checkedKeys) => {
    this.setState({ checkedKeys });
  };
  onSelect = (selectedKeys, info) => {
    console.log('onSelect', info);
    this.setState({ selectedKeys });
  };
  addRole = async () => {
    try {
      let roleList = await getRoleList('role');
      roleList.splice(1, 1);
      roleList.push({
        name: this.state.roleValue,
        permission: this.state.checkedKeys,
      });
      await postRoleList('role', roleList);
      await postPermission(this.state.roleValue, {
        permission: this.state.checkedKeys,
      });
      message.info('ok');
    } catch (e) {
      throw new Error(e);
    }
  };
  initPage = async () => {};
  componentDidMount() {
    this.initPage();
  }
  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        align: 'center',
        render: (text) => <a style={{ color: '#1890FF' }}>{text}</a>,
      },
      {
        title: 'Role',
        dataIndex: 'role',
        align: 'center',
      },
      {
        title: 'Description',
        dataIndex: 'description',
      },
      {
        title: 'Operation',
        align: 'center',
        render: (text, record) => (
          <Tooltip placement="topLeft" title={<span>你没有该权限</span>}>
            <Button
              type="primary"
              disabled={record.name === '小白'}
              onClick={this.showDrawer}
            >
              编辑权限
            </Button>
          </Tooltip>
        ),
      },
    ];
    const dataSource = [
      {
        key: 1,
        name: '小白',
        role: 'admin',
        description: 'Super Administrator. Have access to view all pages.',
      },
      {
        key: 2,
        name: 'guest',
        role: 'guest',
        description:
          'Just a visitor. Can only see the home page and the assigned page',
      },
    ];
    return (
      <Layout>
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
        />
        <Drawer
          visible={this.state.visible}
          onClose={this.onClose}
          placement="right"
          title="编辑角色"
          closable={false}
          getContainer={false}
          width={400}
          footer={
            <Button type="primary" onClick={this.addRole}>
              编辑角色
            </Button>
          }
        >
          <Input
            placeholder="Enter your role's name"
            prefix={<UserOutlined className="site-form-item-icon" />}
            suffix={
              <Tooltip title="请输入角色名称">
                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
            value={this.state.roleValue}
            onChange={(e) => {
              this.setState({ roleValue: e.target.value });
            }}
            disabled
          />
          <Divider />
          <Tree
            checkable
            onExpand={this.onExpand}
            expandKeys={this.state.expandedKeys}
            autoExpandParent={this.state.autoExpandParent}
            onCheck={this.onCheck}
            checkedKeys={this.state.checkedKeys}
            onSelect={this.onSelect}
            selectedKeys={this.state.selectedKeys}
            treeData={treeData}
          />
        </Drawer>
      </Layout>
    );
  }
}

export default UserManage;
