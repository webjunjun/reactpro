import React from 'react';
import { Row, Col, Input, Select, Button, Upload, message, Icon } from 'antd';
const { Option } = Select;
const { TextArea } = Input;

class ColumnEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  render() {
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

    return (
      <Row>
        <Col span={24}>
          <Row>
            <Col span={24}>
              <h1>编辑栏目</h1>
              <div className="flex-form-item">
                <label>栏目名称：</label>
                <Input placeholder="栏目名称" allowClear />
              </div>
              <div className="flex-form-item">
                <label>栏目别名：</label>
                <Input placeholder="栏目别名" allowClear />
              </div>
              <div className="flex-form-item">
                <label style={{width: "132px"}}>栏目类型：</label>
                <Select defaultValue="1">
                  <Option value="1">列表</Option>
                  <Option value="2">封面</Option>
                </Select>
              </div>
              <div className="flex-form-item">
                <label>栏目存放文件夹：</label>
                <Input placeholder="栏目存放文件夹" allowClear />
              </div>
              <div className="flex-form-item">
                <label style={{width: "132px"}}>栏目缩略图：</label>
                <div>
                  <Upload {...props}>
                    <Button>
                      <Icon type="upload" /><span>&nbsp;点击上传</span>
                    </Button>
                  </Upload>
                </div>
              </div>
              <div className="flex-form-item">
                <label>页面关键字：</label>
                <Input placeholder="页面关键字 - keywords" allowClear />
              </div>
              <div className="flex-form-item">
                <label>栏目描述文本：</label>
                <TextArea rows={4} placeholder="页面描述文本 - description" maxLength="200" />
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

export default ColumnEdit;