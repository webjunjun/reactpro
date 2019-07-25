import React from 'react';
import { Row, Col } from 'antd';

class List extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col span={24}>
            我是列表页
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default List;