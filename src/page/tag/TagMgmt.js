import React from 'react';
import { Row, Col } from 'antd';

class TagMgmt extends React.Component {
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
              我是tags栏目
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default TagMgmt;