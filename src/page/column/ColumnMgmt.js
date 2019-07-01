import React from 'react';
import { Row, Col, Button, Icon,Table, Popconfirm, message, Modal, Form, Input, Select } from 'antd';

// 表单
const EditUserForm = Form.create({name: "edit_user_form"})(
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

class ColumnMgmt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.confirmDel = this.confirmDel.bind(this);
    this.cancelDel = this.cancelDel.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  handleOk() {
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

  handleCancel() {
    this.setState({
      visible: false,
    });
  }

  confirmDel() {
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
      title: "栏目ID",
      dataIndex: "number",
      sorter: (a, b) => {
        return a.number - b.number
      },
      sortDirections: ['descend', 'ascend']
    }, {
      title: "栏目名",
      dataIndex: "cloumn_name"
    }, {
      title: "栏目类型",
      dataIndex: "cloumn_type"
    }, {
      title: "操作",
      dataIndex: "oprate",
      render: (text, record) => {
        return (
          <span>
            <a href="javascript:;" onClick={this.showModal}>编辑</a>
            &nbsp;&nbsp;
            <Popconfirm
              title="确定删除该栏目吗？"
              onConfirm={this.confirmDel}
              onCancel={this.cancelDel}
              okText="确定"
              cancelText="取消"
            >
              <a href="javascript:;">删除</a>
            </Popconfirm>
          </span>
        )
      }
    }];
    const data = [{
      number: 1,
      cloumn_name: "web前端",
      cloumn_type: "列表"
    },{
      number: 2,
      cloumn_name: "项目",
      cloumn_type: "列表"
    },{
      number: 3,
      cloumn_name: "日常",
      cloumn_type: "列表"
    },{
      number: 4,
      cloumn_name: "关于我",
      cloumn_type: "封面"
    }];
    return (
      <Row>
        <Col span={24}>
          <Row style={{marginBottom: "20px"}}>
            <Col span={2}>
              <Button type="primary">
                <Icon type="plus" />
                新增栏目
              </Button>
            </Col>
            <Col span={12}>
              <Search
                placeholder="输入栏目"
                enterButton="搜索"
                size="large"
                onSearch={value => console.log(value)}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Table rowKey="number" bordered columns={columns} dataSource={data} />
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
    );
  }
}

export default ColumnMgmt;