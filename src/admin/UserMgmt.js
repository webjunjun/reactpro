import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSider from '../components/AdminSider';
import AdminFooter from '../components/AdminFooter';
import { Layout, Row, Col, Button, Icon, Table, Popconfirm, message, Modal, Form, Input, Select } from 'antd';
import axios from 'axios';
const { Content } = Layout;
const { Option } = Select;

// 表单
const EditUserForm = Form.create({ name: "edit_user_form" })(
  class extends React.Component {
    render() {
      const { form } = this.props;
      const { getFieldDecorator } = form;
      const formItemLayout = {
        labelCol: {
          sm: { span: 4 }
        },
        wrapperCol: {
          sm: { span: 20 }
        },
      };
      return (
        <Form {...formItemLayout}>
          <Form.Item label="姓名">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: "请输入姓名" }],
            })(<Input type="text" />)}
          </Form.Item>
          <Form.Item label="手机号">
            {getFieldDecorator('mobile', {
              rules: [{ required: true, message: "请输入手机号" }],
            })(<Input type="tel" />)}
          </Form.Item>
          <Form.Item label="邮箱">
            {getFieldDecorator('mail', {
              rules: [{ required: true, message: "请输入邮箱" }],
            })(<Input type="mail" />)}
          </Form.Item>
          <Form.Item label="角色">
            {getFieldDecorator('role', {
              rules: [{ required: true, message: "请选择角色" }],
            })(<Select defaultValue="1">
              <Option value="1">超级管理员</Option>
              <Option value="2">高级管理员</Option>
              <Option value="3">普通管理员</Option>
            </Select>)}
          </Form.Item>
        </Form>
      )
    }
  }
);
const Search = Input.Search;

class UserMgmt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    // 为了在回调中使用this，这个绑定是必不可少的
    this.cancelDel = this.cancelDel.bind(this);
  }

  // componentDidMount() {
  //   // 组件挂载后执行
  // }

  // componentDidUpdate() {
  //   // 组件更新后执行，首次渲染不执行
  // }

  // componentWillUnmount() {
  //   // 销毁组件前执行
  // }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return false;
      }
      form.resetFields();
      this.setState({
        visible: false,
      });
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  confirmDel = () => {
    message.success('confirmDel');
  }

  cancelDel() {
    message.error('cancelDel');
  }

  // 获取form里的数据，通过ref
  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    const columns = [{
      title: "序号",
      dataIndex: "number",
      sorter: (a, b) => {
        return a.number - b.number
      },
      sortDirections: ['descend', 'ascend']
    }, {
      title: "姓名",
      dataIndex: "name"
    }, {
      title: "手机号",
      dataIndex: "mobile"
    }, {
      title: "邮箱",
      dataIndex: "mail"
    }, {
      title: "角色",
      dataIndex: "role"
    }, {
      title: "操作",
      dataIndex: "oprate",
      render: (text, record) => {
        return (
          <span>
            <a href="javascript:;" onClick={this.showModal}>编辑</a>
            &nbsp;&nbsp;
            <Popconfirm
              title="确定删除该管理员吗？"
              onConfirm={this.confirmDel}
              onCancel={this.cancelDel}
              okText="确定"
              cancelText="取消"
            >
              <a href="javascript:;">删除</a>
            </Popconfirm>
            &nbsp;&nbsp;
            <Popconfirm
              title="确定停用该管理员吗？"
              onConfirm={this.confirmDel}
              onCancel={this.cancelDel}
              okText="确定"
              cancelText="取消"
            >
              <a href="javascript:;">停用</a>
            </Popconfirm>
          </span>
        )
      }
    }];
    const data = [{
      number: 1,
      name: "刘军",
      mobile: "15629047169",
      mail: "975502845@qq.com",
      role: '超级管理员',
    }, {
      number: 2,
      name: "刘军",
      mobile: "15629047169",
      mail: "975502845@qq.com",
      role: ' 管理员',
    }];
    const rowSelection = {
      hideDefaultSelections: true,
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`${selectedRowKeys}`);
      },
      selections: [{
        key: "all",
        text: "删除",
        onSelect() {
          // 
        }
      }]
    }
    return (
      <Layout className="admin_back">
        <AdminSider></AdminSider>
        <Layout>
          <AdminHeader></AdminHeader>
          <Content className="container">
            <Row>
              <Col span={24}>
                <Row style={{ marginBottom: "20px" }}>
                  <Col span={12} className="flex_box">
                    <Button type="primary" className="mr20_btn40">
                      <Icon type="plus" />
                      新增用户
										</Button>
                    <Search
                      placeholder="输入姓名"
                      enterButton="搜索"
                      size="large"
                      onSearch={value => console.log(value)}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Table rowSelection={rowSelection} rowKey="number" bordered columns={columns} dataSource={data} />
                    <Modal
                      title="编辑用户"
                      visible={this.state.visible}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                      okText="确定"
                      cancelText="取消"
                    >
                      <div>
                        <EditUserForm
                          wrappedComponentRef={this.saveFormRef}
                        ></EditUserForm>
                      </div>
                    </Modal>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Content>
          <AdminFooter></AdminFooter>
        </Layout>
      </Layout>
    );
  }
}

export default UserMgmt;