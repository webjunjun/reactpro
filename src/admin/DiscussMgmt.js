import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSider from '../components/AdminSider';
import AdminFooter from '../components/AdminFooter';
import { Layout, Row, Col } from 'antd';
const { Content } = Layout;

class DiscussMgmt extends React.Component {

  render() {
    // 评论序号 姓名 邮箱 IP 评论时间 评论内容 评论状态（待审核、审核通过、审核不通过） 操作（审核通过 | 审核不通过 | 删除）
    return (
      <React.Fragment>
        <AdminSider></AdminSider>
        <Layout>
          <AdminHeader></AdminHeader>
          <Content className="container">
            <Row>
              <Col span={24}>
                我是评论
              </Col>
            </Row>
          </Content>
          <AdminFooter></AdminFooter>
        </Layout>
      </React.Fragment>
    );
  }
}

export default DiscussMgmt;