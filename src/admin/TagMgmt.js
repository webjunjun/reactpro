import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSider from '../components/AdminSider';
import AdminFooter from '../components/AdminFooter';
import { Layout, Row, Col, Button, Icon, Input, Table, Popconfirm, Form, message, Modal } from 'antd';
const { Content } = Layout;

// 表单
const TagForm = Form.create({name: "tag_form"})(
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
          <Form.Item label="tag">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: "请输入tag" }],
            })(<Input type="text" />)}
          </Form.Item>
        </Form>
      )
    }
  }
);
const Search = Input.Search;

class TagMgmt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  // 使用public class fields可以省去在constructor里使用bind绑定this
  addTag = () => {
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

  cancelDel = () => {
    message.error('cancelDel');
  }

  // 获取form里的数据，通过ref
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  };

  render() {
    const columns = [{
      title: "tagID",
      dataIndex: "number",
      sorter: (a, b) => {
        return a.number - b.number
      },
      sortDirections: ['descend', 'ascend']
    }, {
      title: "tag",
      dataIndex: "tag_name"
    }, {
      title: "文章数",
      dataIndex: "article_num"
    }, {
      title: "操作",
      dataIndex: "oprate",
      render: (text, record) => {
        return (
          <span>
            <a href="javascript:;" onClick={this.editColumn}>编辑</a>
            &nbsp;&nbsp;
            <Popconfirm
              title="确定删除该tag吗？"
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
      tag_name: "web前端",
      article_num: "10"
    },{
      number: 2,
      tag_name: "node.js",
      article_num: "2"
    }];
    return (
      <Layout className="admin_back">
        <AdminSider></AdminSider>
        <Layout>
          <AdminHeader></AdminHeader>
          <Content className="container">
            <Row>
              <Col span={24}>
                <Row style={{marginBottom: "20px"}}>
                  <Col span={12} className="flex_box">
                    <Button type="primary" className="mr20_btn40" onClick={this.addTag}>
                      <Icon type="plus" />
                      新增Tag
                    </Button>
                    <Search
                      placeholder="输入Tag"
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
                      title="新增tag"
                      visible={this.state.visible}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                      okText="确定"
                      cancelText="取消"
                    >
                      <div>
                        <TagForm
                          wrappedComponentRef={this.saveFormRef}
                        ></TagForm>
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

export default TagMgmt;