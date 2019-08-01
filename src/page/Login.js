import React from 'react';
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import '../mock/index';

const LoginForm = Form.create({name: "login_form"})(
  class extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault(); 
      this.props.form.validateFields((err, values) => {
        axios.post('/login', values)
        .then((res) => {
          console.log(res.data);
        });
      });
    };
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} className="login-form">
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
              <LoginForm></LoginForm>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Login;