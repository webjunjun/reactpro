import React from 'react';
import { Row, Col } from 'antd';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col span={24}>
            我是首页
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Home;