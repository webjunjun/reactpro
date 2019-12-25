import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSider from '../components/AdminSider';
import AdminFooter from '../components/AdminFooter';
import { Layout, Row, Col, Form, Input, Select, Button, Upload, message, Icon } from 'antd';
const { Content } = Layout;
const { Option } = Select;
const { TextArea } = Input;

const ColumnForm = Form.create({name: "column_form"})(
  class extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
      // 
    };
    render() {
      const { getFieldDecorator } = this.props.form;
      const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 2 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 10 },
        },
      };
      return (
        <Form className="column-form" onSubmit={this.handleSubmit}>
          <Form.Item label="栏目名称" {...formItemLayout}>
            {getFieldDecorator('column-name', {
              rules: [{ required: true, message: '请输入栏目名称' }],
            })(
              <Input placeholder="栏目名称" allowClear maxLength="10" />,
            )}
          </Form.Item>
          <Form.Item label="栏目别名" {...formItemLayout}>
            {getFieldDecorator('column-nickname', {
              rules: [{ required: true, message: '请输入栏目别名' }],
            })(
              <Input placeholder="栏目别名" allowClear maxLength="10" />,
            )}
          </Form.Item>
          <Form.Item label="栏目类型" {...formItemLayout}>
            {getFieldDecorator('column-type', {
              initialValue: '1',
            })(
              <Select style={{ width: 180 }}>
                <Option value="1">列表</Option>
                <Option value="2">封面</Option>
              </Select>,
            )}
          </Form.Item>
          <Form.Item label="栏目存放文件夹" {...formItemLayout}>
            {getFieldDecorator('column-folder', {
              rules: [{ required: true, message: '请输入栏目存放文件夹' }],
            })(
              <Input placeholder="栏目存放文件夹" allowClear />,
            )}
          </Form.Item>
          <Form.Item label="栏目缩略图" {...formItemLayout}>
            <Upload {...props}>
              <Button>
                <Icon type="upload" /><span>&nbsp;点击上传</span>
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item label="页面关键字" {...formItemLayout}>
            {getFieldDecorator('column-keyword', {
              rules: [{ required: true, message: '请输入页面关键字' }],
            })(
              <Input placeholder="页面关键字" allowClear />,
            )}
          </Form.Item>
          <Form.Item label="栏目描述文本" {...formItemLayout}>
            {getFieldDecorator('column-description', {
              rules: [{ required: true, message: '请输入栏目描述文本' }],
            })(
              <TextArea rows={4} placeholder="栏目描述文本 - description" maxLength="200" />,
            )}
          </Form.Item>
          <Form.Item className="form_btn" label=" " {...formItemLayout}>
            <Button type="primary" htmlType="submit">提交</Button>
          </Form.Item>
        </Form>
      )
    }
  }
);
class ColumnAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  render() {
    return (
      <Layout className="admin_back">
        <AdminSider></AdminSider>
        <Layout>
          <AdminHeader></AdminHeader>
          <Content className="container">
            <Row>
              <Col span={24}>
                <Row>
                  <Col span={24}>
                    <h1>新增栏目</h1>
                    <ColumnForm onSubmit={this.handleSubmit} wrappedComponentRef={this.saveFormRef}></ColumnForm>
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

export default ColumnAdd;