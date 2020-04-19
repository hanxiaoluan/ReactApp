import React, { PureComponent } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import store from '../../configureStore';
import axios from 'axios';
import { getUser, postUser } from '@/api/login.js';
import { getPermission, postPermission } from '@/api/permission';
import './login.scss';
import { login } from '@/actions/login';
import { connect } from 'react-redux';
import Basckground from '@/components/background/Background.js';
const Login = ({ login, history, match, location }) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    login(values);
    /* let res = postPermission('admin', {
      permission: [
        'dashboard',
        'form',
        'form-base',
        'form-step',
        'showview',
        'Collapse',
        'Table',
        'Tabs',
        'Tree',
        'registration',
        'news',
        'recruits',
        'textStorage',
        'manage',
        'role-manage',
        'user-manage',
        'reddit',
      ],
    }); */
  };

  return (
    <>
      <Basckground>
        <Form
          form={form}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: false,
          }}
          hideRequiredMark
          onFinish={onFinish}
        >
          <h3 className="title">登录</h3>
          <Form.Item
            name="username"
            label={<span className="iconfont icon-user"></span>}
            colon={false}
            style={{ marginBottom: 10 }}
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input placeholder="Username" style={{ autoComplete: 'off' }} />
          </Form.Item>
          <Form.Item
            label={<span className="iconfont icon-password"></span>}
            name="password"
            colon={false}
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              type="password"
              placeholder="Password"
              style={{ autoComplete: 'off' }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
          <div className="tooltip">
            <p>
              <span>管理员登录</span> admin 123456
            </p>
            <p>
              <span>游客登录</span> guest 123456
            </p>
          </div>

          <div className="footer">欢迎登录后台管理系统</div>
        </Form>
      </Basckground>
    </>
  );
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (role) => dispatch(login(role)),
});
export default connect(null, mapDispatchToProps)(Login);
