import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSider from '../components/AdminSider';
import AdminFooter from '../components/AdminFooter';
import { Layout, Row, Col, Button, Icon, Input, Table, Popconfirm } from 'antd';
const { Content } = Layout;
const Search = Input.Search;

class ArticleMgmt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  addArticle = () => {
    this.props.history.push("/admin/article/add");
  }

  editArticle = () => {
    this.props.history.push("/admin/article/update");
  }

  render() {
    const columns = [{
      title: "ID",
      dataIndex: "number",
      sorter: (a, b) => {
        return a.number - b.number
      },
      sortDirections: ['descend', 'ascend']
    }, {
      title: "文章名",
      dataIndex: "article_name"
    }, {
      title: "点击数",
      dataIndex: "click_num",
      render: (text) => {
        return (
          <a href="javascript:;">{text}</a>
        );
      }
    }, {
      title: "评论数",
      dataIndex: "discuss_num",
      render: (text) => {
        return (
          <a href="javascript:;">{text}</a>
        );
      }
    }, {
      title: "作者",
      dataIndex: "author"
    }, {
      title: "操作",
      dataIndex: "oprate",
      render: (text, record) => {
        return (
          <span>
            <a href="javascript:;" onClick={this.editArticle}>编辑</a>
            &nbsp;&nbsp;
            <Popconfirm
              title="确定删除该文章吗？"
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
    const data = [{
      number: 1,
      article_name: "web前端",
      click_num: "10",
      discuss_num: "1",
      author: "刘军"
    },{
      number: 2,
      article_name: "node.js",
      click_num: "10",
      discuss_num: "1",
      author: "刘军"
    }];
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
                    <Button type="primary" className="mr20_btn40" onClick={this.addArticle}>
                      <Icon type="plus" />
                      新增文章
                    </Button>
                    <Search
                      placeholder="输入文章名"
                      enterButton="搜索"
                      size="large"
                      onSearch={value => console.log(value)}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Table rowKey="number" bordered columns={columns} dataSource={data} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Content>
          <AdminFooter></AdminFooter>
        </Layout>
      </Layout>
    );
  }
}

export default ArticleMgmt;