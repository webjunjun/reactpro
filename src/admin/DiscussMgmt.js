import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSider from '../components/AdminSider';
import AdminFooter from '../components/AdminFooter';
import { Layout, Row, Col, Button, Icon, Input, Table, Popconfirm, Form, message, Modal } from 'antd';
const { Content } = Layout;
const Search = Input.Search;

class DiscussMgmt extends React.Component {

  render() {
    // 评论序号 姓名 邮箱 IP 评论时间 评论内容 评论状态（待审核、审核通过、审核不通过） 操作（审核通过 | 审核不通过 | 删除）
    const columns = [{
      title: "评论ID",
      dataIndex: "number",
      sorter: (a, b) => {
        return a.number - b.number
      },
      sortDirections: ['descend', 'ascend']
    }, {
      title: "姓名",
      dataIndex: "discuss_name"
    }, {
      title: "邮箱",
      dataIndex: "discuss_email"
    }, {
      title: "IP",
      dataIndex: "discuss_ip"
    }, {
      title: "评论时间",
      dataIndex: "discuss_time"
    }, {
      title: "评论时间",
      dataIndex: "discuss_time"
    }, {
      title: "评论状态",
      dataIndex: "discuss_status"
    }, {
      title: "操作",
      dataIndex: "oprate",
      render: (text, record) => {
        return (
          <span>
            <a href="javascript:;" onClick={this.editColumn}>编辑</a>
            &nbsp;&nbsp;
            <Popconfirm
              title="确定删除该tag吗？"
              onConfirm={this.confirmDel}
              onCancel={this.cancelDel}
              okText="确定"
              cancelText="取消"
            >
              <a href="javascript:;">删除</a>
            </Popconfirm>
          </span>
        )
      }
    }];
    const data = [];
    return (
      <Layout className="admin_back">
        <AdminSider></AdminSider>
        <Layout>
          <AdminHeader></AdminHeader>
          <Content className="container">
            <Row>
              <Col span={24}>
                <Row style={{marginBottom: "20px"}}>
                  <Col span={12} className="flex_box">
                    <Search
                      placeholder="输入姓名/邮箱/IP/评论时间/评论内容"
                      enterButton="搜索"
                      size="large"
                      onSearch={value => console.log(value)}
                    />
                  </Col>
                </Row>
              </Col>
              <Row>
                <Col span={24}>
                  <Table rowKey="number" bordered columns={columns} dataSource={data} />
                </Col>
              </Row>
            </Row>
          </Content>
          <AdminFooter></AdminFooter>
        </Layout>
      </Layout>
    );
  }
}

export default DiscussMgmt;