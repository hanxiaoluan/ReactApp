import React, { PureComponent } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import store from '../../configureStore';
import axios from 'axios';
import { login } from '@/actions/login';
import { connect } from 'react-redux';
const Login = ({ login, history, match, location }) => {
  const [form] = Form.useForm();

  const onFinish = values => {
    const { username, password } = form.getFieldsValue();
    axios
      .post(
        'https://www.fastmock.site/mock/8216d7df0342be8867ec5f42955a5706/reactapp/api/login',
        {
          username: username,
          password: password,
        },
      )
      .then(res => res.resolve())
      .catch(error => new Error(error));
    sessionStorage.setItem('role', 'guest');
    login(sessionStorage.getItem('role'));
    history.push('/');
  };

  return (
    <>
      <Form
        form={form}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </>
  );
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  login: role => dispatch(login(role)),
});
export default connect(null, mapDispatchToProps)(Login);
