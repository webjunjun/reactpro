import React from 'react';
import { Row, Col, Form, Icon, Input, Button, message } from 'antd';
import { register } from '../api/api';
const RegisterForm = Form.create({name: "register_form"})(
  class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isCellphone: false,
            regType: "手机号注册"
        }
    }
    
    goCellphone = () => {
        if (this.state.isCellphone) {
            this.setState({
                isCellphone: false,
                regType: "手机号注册"
            });
        } else {
            this.setState({
                isCellphone: true,
                regType: "邮箱注册"
            })
        }
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (err) {
          return false;
        }
        values.isCellphone = false;
        if (this.state.isCellphone) {
          values.isCellphone = true;
        }
        register(values)
        .then((res) => {
          const json = res.data;
          if (json.code !== 2000) {
            message.error(json.msg);
            return false;
          }
          message.success(json.msg, 1, () => {
            // 跳转首页
            localStorage.setItem("token", json.data.token);
            this.props.history.push("/admin/user/list");
          });
        })
        .catch((err) => {
          message.error(err.response.data);
        });
      });
    };
    render() {
      const { getFieldDecorator } = this.props.form;
      let formItem;
      if (this.state.isCellphone) {
        formItem = (<Form.Item label="手机号">
          {getFieldDecorator('cellphone', {
            rules: [{ required: true, message: '请输入手机号' }],
          })(
            <Input
              prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Cellphone"
              maxLength={11}
              autoComplete="off"
            />,
          )}
        </Form.Item>)
      } else {
        formItem = (<Form.Item label="邮箱">
          {getFieldDecorator('email', {
            rules: [{ required: true, message: '请输入邮箱' }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Mail"
              autoComplete="off"
              maxLength={30}
            />,
          )}
        </Form.Item>)
      }
      return (
        <Form className="register-form" onSubmit={this.handleSubmit}>
          {formItem}
          <Form.Item label="设置密码">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
              <Input.Password
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Password"
                autoComplete="off"
                maxLength={18}
              />,
            )}
          </Form.Item>
          <Form.Item>
            <span className="login_form_forgot" onClick={this.goCellphone}>{this.state.regType}</span>
            <Button type="primary" htmlType="submit" className="login_form_button">立即注册</Button>
          </Form.Item>
        </Form>
      )
    }
  }
);

class Register extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col span={24}>
            <div className="login_box">
              <RegisterForm onSubmit={this.handleSubmit} wrappedComponentRef={this.saveFormRef} history ={this.props.history}></RegisterForm>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Register;