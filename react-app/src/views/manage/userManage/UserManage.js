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
} from 'antd';
import { getRoleList, postRoleList } from '@/api/role';
import { getUser, postUser } from '@/api/login';
import { DownOutlined } from '@ant-design/icons';
class UserManage extends Component {
  state = {
    visible: false,
    roleList: [],
    activeRole: '',
    guestRole: '',
  };
  handleOk = async (e) => {
    try {
      let userInfo = await getUser('user');
      userInfo[1].role = this.state.activeRole;
      await postUser('user', userInfo);
      message.success('编辑成功');
      this.setState({ visible: false, guestRole: this.state.activeRole });
    } catch (e) {
      throw new Error(e);
    }
  };
  handleCancel = (e) => {
    console.log(e);
    this.setState({ visible: false });
  };
  showModal = () => {
    this.setState({ visible: true, activeRole: this.state.guestRole });
  };
  initPage = async () => {
    let res = await getRoleList('role');
    let userList = await getUser('user');
    this.setState({
      roleList: res,
      guestRole: userList.find((item) => item.username === 'guest').role,
      activeRole: userList.find((item) => item.username === 'guest').role,
    });
  };
  handleChangeActiveRole = (e, value) => {
    e.preventDefault();
    this.setState({ activeRole: value.name });
  };
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
          <Button
            type="primary"
            disabled={record.name === '小白'}
            onClick={this.showModal}
          >
            编辑权限
          </Button>
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
        role: this.state.guestRole,
        description:
          'Just a visitor. Can only see the home page and the assigned page',
      },
    ];
    const roleMenu = (
      <Menu>
        {this.state.roleList.map((item, index) => (
          <Menu.Item key={index}>
            <a
              target="_blank"
              rel="noopener noreferer"
              onClick={(e) => this.handleChangeActiveRole(e, item)}
            >
              {item.name}
            </a>
          </Menu.Item>
        ))}
      </Menu>
    );
    return (
      <Layout>
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
        />
        <Modal
          title="编辑权限"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
        >
          guest当前角色为
          <Dropdown overlay={roleMenu} trigger={['click']}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
              style={{ fontSize: 20 }}
            >
              {this.state.activeRole}
              <DownOutlined />
            </a>
          </Dropdown>
        </Modal>
      </Layout>
    );
  }
}

export default UserManage;
