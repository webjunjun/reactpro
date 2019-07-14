import React from 'react';
import { Row, Col, Input, Select } from 'antd';
const { Option } = Select;
const { TextArea } = Input;

class ColumnAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  render() {
    return (
      <Row>
        <Col span={24}>
          <Row>
            <Col span={24}>
              <div>
                <label>栏目名称：</label>
                <Input placeholder="栏目名称" allowClear />
              </div>
              <div>
                <label>栏目别名：</label>
                <Input placeholder="栏目别名" allowClear />
              </div>
              {/* <div>
                <label>所属父栏目：</label>
                <Input placeholder="所属父栏目" allowClear />
              </div> */}
              <div>
                <label>栏目类型：</label>
                <Select defaultValue="1">
                  <Option value="1">列表</Option>
                  <Option value="2">封面</Option>
                </Select>
              </div>
              <div>
                <label>栏目存放文件夹：</label>
                <Input placeholder="栏目存放文件夹" allowClear />
              </div>
              <div>
                <label>栏目缩略图：</label>
                <Input placeholder="栏目缩略图" allowClear />
              </div>
              <div>
                <label>绑定域名：</label>
                <Input placeholder="绑定域名" allowClear />
              </div>
              <div>
                <label>页面关键字：</label>
                <Input placeholder="页面关键字 - keywords" allowClear />
              </div>
              <div>
                <label>栏目描述文本：</label>
                <TextArea rows={4} placeholder="页面描述文本 - description" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default ColumnAdd;