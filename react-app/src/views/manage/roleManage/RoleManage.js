import React, { Component } from 'react';
import {
  Drawer,
  Button,
  Input,
  Tooltip,
  Tree,
  Divider,
  Table,
  message,
  Tag,
} from 'antd';
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons';
import './roleManage.scss';
import treeData from './treeData';
import { postRoleList, getRoleList } from '@/api/role.js';
import { getPermission, postPermission } from '@/api/permission';
const { TreeNode } = Tree;

const columns = [
  {
    title: '角色名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '权限',
    dataIndex: 'permission',
    key: 'permission',
    render: (text, record) =>
      text.map((item) => <Tag color="processing">{item}</Tag>),
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => <Button type="link">delete</Button>,
  },
];
class RoleManage extends Component {
  state = {
    visible: false,
    roleValue: 'guest',
    expandedKeys: [],
    checkedKeys: [],
    selectedKeys: [],
    autoExpandParent: true,
    roleSource: [],
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
  initPage = async () => {
    let res = await getRoleList('role');
    this.setState({ roleSource: res });
  };
  componentWillMount() {
    this.initPage();
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          增加角色
        </Button>
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
              增加角色
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
        <Table
          dataSource={this.state.roleSource}
          columns={columns}
          rowKey={(record) => record.name}
        />
      </div>
    );
  }
}

export default RoleManage;
