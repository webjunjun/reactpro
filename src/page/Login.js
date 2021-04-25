import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { login } from '../api/api';
const LoginForm = Form.create({name: "login_form"})(
  class extends React.Component {

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (err) {
          return false;
        }
        login(values).then((res) => {
          const json = res;
          if (json.code !== 2000) {
            message.error(json.msg);
            return false;
          }
          message.success(json.msg, 1, () => {
            // 跳转后台首页
            localStorage.setItem("userInfo", JSON.stringify(json.data));
            this.props.history.replace("/admin/user/list");
          });
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
                placeholder="Cellphone/Mail"
                autoComplete="off"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
              <Input.Password
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>自动登录</Checkbox>)}
            <span className="mock_link login_form_forgot">忘记密码</span>
            <Button type="primary" htmlType="submit" className="width_100">登录</Button> <Link to="/register" replace>立即注册</Link>
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
        <Row className="login_wrap">
          <Col span={24}>
            <div className="login_box">
              <LoginForm onSubmit={this.handleSubmit} wrappedComponentRef={this.saveFormRef} history ={this.props.history}></LoginForm>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Login;