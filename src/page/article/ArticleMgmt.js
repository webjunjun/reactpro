import React from 'react';
import { Row, Col, Table } from 'antd';
// 编辑器
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

class ArticleMgmt extends React.Component {

  render() {
    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ];
    
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ];
    return (
      <Row>
        <Col span={24}>
          <Row>
            <Col span={24}>
              <Table dataSource={dataSource} columns={columns} />;
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default ArticleMgmt;