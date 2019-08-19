import React from 'react';
import { Row, Col, Form, Icon, Input, Button, Checkbox, message } from 'antd';
import request from '../utils/request';
const LoginForm = Form.create({name: "login_form"})(
  class extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
      const self = this;
      this.props.form.validateFields((err, values) => {
        if (err) {
          return false;
        }
        request.post('/user/login', values)
        .then((res) => {
          const json = res.data;
          if (json.code !== 2000) {
            message.error(json.msg);
            return false;
          }
          message.success(json.msg);
          // message.success(json.msg, 1, () => {
          //   // 跳转首页
          //   localStorage.setItem("token", json.data.token);
          //   // location.href = '/';
          // });
        })
        .catch((err) => {
          message.error(err.response.data);
        });
      });
    };
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form className="login-form" onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>自动登录</Checkbox>)}
            <a className="login_form_forgot" href="javascript:;">忘记密码</a>
            <Button type="primary" htmlType="submit" className="login_form_button">登录</Button> <a href="javascript:;">立即注册</a>
          </Form.Item>
        </Form>
      )
    }
  }
);

class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col span={24}>
            <div className="login_box">
              <LoginForm onSubmit={this.handleSubmit} wrappedComponentRef={this.saveFormRef}></LoginForm>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Login;