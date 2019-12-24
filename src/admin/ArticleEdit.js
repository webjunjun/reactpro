import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSider from '../components/AdminSider';
import AdminFooter from '../components/AdminFooter';
import { Layout, Row, Col, Input, Select, Button } from 'antd';
// 编辑器
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
const { Content } = Layout;
const { Option } = Select;
const { TextArea } = Input;
import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSider from '../components/AdminSider';
import AdminFooter from '../components/AdminFooter';
import { Layout, Row, Col, Form, Input, Select, Button } from 'antd';
// 编辑器
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
const { Content } = Layout;
const { Option } = Select;
const { TextArea } = Input;

const ArticleForm = Form.create({name: "article_form"})(
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // 创建一个空的editorState作为初始值
        editorState: BraftEditor.createEditorState(null)
      };
    }

    handleSubmit = (e) => {
      e.preventDefault();
      // 
    };
    render() {
      const { editorState } = this.state;
      const { getFieldDecorator } = this.props.form;
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
          <Form.Item label="文章标题" {...formItemLayout}>
            {getFieldDecorator('article-title', {
              rules: [{ required: true, message: '请输入文章标题' }],
            })(
              <Input placeholder="文章标题" allowClear maxLength="30" />,
            )}
          </Form.Item>
          <Form.Item label="文章关键字" {...formItemLayout}>
            {getFieldDecorator('article-keywords', {
              rules: [{ required: true, message: '请输入文章关键字' }],
            })(
              <TextArea rows={4} placeholder="文章关键字 - keywords" maxLength="200" />,
            )}
          </Form.Item>
          <Form.Item label="作者" {...formItemLayout}>
            {getFieldDecorator('article-author', {
              rules: [{ required: true, message: '请输入作者' }],
            })(
              <Input placeholder="作者" allowClear maxLength="30" />,
            )}
          </Form.Item>
          <Form.Item label="栏目" {...formItemLayout}>
            {getFieldDecorator('column-type', {
              initialValue: '1',
            })(
              <Select mode="multiple" placeholder="请选择栏目">
                <Option value="1">栏目1</Option>
                <Option value="2">栏目2</Option>
                <Option value="3">栏目3</Option>
              </Select>,
            )}
          </Form.Item>
          <Form.Item label="Tags" {...formItemLayout}>
            {getFieldDecorator('column-type', {
              initialValue: '1',
            })(
              <Select mode="multiple" placeholder="请选择tags">
                <Option value="1">Tag1</Option>
                <Option value="2">Tag2</Option>
                <Option value="3">Tag3</Option>
              </Select>,
            )}
          </Form.Item>
          <Form.Item label="文章内容" {...formItemLayout}>
            <BraftEditor
              value={editorState}
              onChange={this.handleEditorChange}
              onSave={this.submitContent}
            />
          </Form.Item>
          <Form.Item label="自动分页" {...formItemLayout}>
            <Input placeholder="自动分页字数" value="3000" allowClear />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">提交</Button>
          </Form.Item>
        </Form>
      )
    }
  }
);

class ArticleEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  // async componentDidMount () {
  //   // 假设此处从服务端获取html格式的编辑器内容
  //   const htmlContent = await fetchEditorContent();
  //   // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
  //   this.setState({
  //       editorState: BraftEditor.createEditorState(htmlContent);
  //   })
  // }

  submitContent = async () => {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const htmlContent = this.state.editorState.toHTML();
    // const result = await saveEditorContent(htmlContent);
  }

  handleEditorChange = (editorState) => {
    this.setState({ editorState });
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
                    <h1>新增文章</h1>
                    <ArticleForm onSubmit={this.handleSubmit} wrappedComponentRef={this.saveFormRef}></ArticleForm>
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

export default ArticleEdit;
class ArticleEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 创建一个空的editorState作为初始值
      editorState: BraftEditor.createEditorState(null)
    };
  }

  // async componentDidMount () {
  //   // 假设此处从服务端获取html格式的编辑器内容
  //   const htmlContent = await fetchEditorContent();
  //   // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
  //   this.setState({
  //       editorState: BraftEditor.createEditorState(htmlContent);
  //   })
  // }

  submitContent = async () => {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const htmlContent = this.state.editorState.toHTML();
    // const result = await saveEditorContent(htmlContent);
  }

  handleEditorChange = (editorState) => {
    this.setState({ editorState });
  }

  render() {
    const { editorState } = this.state;
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
                    <h1>编辑文章</h1>
                    <div className="flex-form-item">
                      <label>文章标题：</label>
                      <Input placeholder="文章标题" allowClear />
                    </div>
                    <div className="flex-form-item">
                      <label>文章关键字：</label>
                      <TextArea rows={4} placeholder="文章关键字 - keywords" maxLength="200" />
                    </div>
                    <div className="flex-form-item">
                      <label>作者：</label>
                      <Input placeholder="作者" allowClear />
                    </div>
                    <div className="flex-form-item">
                      <label>栏目：</label>
                      <Select mode="multiple" placeholder="请选择栏目">
                        <Option value="1">栏目1</Option>
                        <Option value="2">栏目2</Option>
                        <Option value="3">栏目3</Option>
                      </Select>
                    </div>
                    <div className="flex-form-item">
                      <label>tags：</label>
                      <Select mode="multiple" placeholder="请选择tags">
                        <Option value="1">Tag1</Option>
                        <Option value="2">Tag2</Option>
                        <Option value="3">Tag3</Option>
                      </Select>
                    </div>
                    <div className="flex-form-item">
                      <label>文章内容：</label>
                      <BraftEditor
                        value={editorState}
                        onChange={this.handleEditorChange}
                        onSave={this.submitContent}
                      />
                    </div>
                    <div className="flex-form-item">
                      <label>自动分页：</label>
                      <Input placeholder="自动分页字数" value="3000" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Button type="primary">提交</Button>
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

export default ArticleEdit;