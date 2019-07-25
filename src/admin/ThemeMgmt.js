import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSider from '../components/AdminSider';
import AdminFooter from '../components/AdminFooter';
import { Layout, Row, Col } from 'antd';
const { Content } = Layout;

class ThemeMgmt extends React.Component {

  render() {
    return (
      <React.Fragment>
        <AdminSider></AdminSider>
        <Layout>
          <AdminHeader></AdminHeader>
          <Content className="container">
            <Row>
              <Col span={24}>
                我是主题
							</Col>
            </Row>
          </Content>
          <AdminFooter></AdminFooter>
        </Layout>
      </React.Fragment>
    );
  }
}

export default ThemeMgmt;