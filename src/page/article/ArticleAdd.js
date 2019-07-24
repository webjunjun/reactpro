import React from 'react';
import { Row, Col, Input, Select, Button } from 'antd';
// 编辑器
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
const { Option } = Select;
const { TextArea } = Input;

class ArticleAdd extends React.Component {
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
      <Row>
        <Col span={24}>
          <Row>
            <Col span={24}>
              <h1>新增文章</h1>
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
              <Button type="primary" className="ml132">提交</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default ArticleAdd;