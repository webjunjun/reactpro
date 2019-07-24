// import必须在业务代码前
import React from 'react';
import Routers from '../../router';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './App.css';
import { Layout, Menu, Icon, Avatar, Dropdown } from 'antd';
// 业务代码
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {

  render() {
    const menu = (
      <Menu>
        <Menu.Item className="dropdown_item">退出</Menu.Item>
      </Menu>
    );
    return (
      <Router>
        <Layout className="app">
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
          >
            <div className="logo"></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/user/list">
                  <Icon type="team" />
                  <span className="nav-text">用户管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/column/list">
                  <Icon type="menu" />
                  <span className="nav-text">栏目管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/tag/list">
                  <Icon type="tags" />
                  <span className="nav-text">Tags分类</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/article/list">
                  <Icon type="form" />
                  <span className="nav-text">文章管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/article/list">
                  <Icon type="message" />
                  <span className="nav-text">评论管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/message/list">
                  <Icon type="notification" />
                  <span className="nav-text">消息通知</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/theme/list">
                  <Icon type="project" />
                  <span className="nav-text">主题模板</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header className="top_header">
              <Dropdown overlay={menu}>
                <Avatar style={{ backgroundColor: '#87d068',float: 'right' }} icon="user" />
              </Dropdown>
            </Header>
            <Content className="container">
              <Routers />
            </Content>
            <Footer className="bottom_footer">博文天下 ©2015~2019 Created by liujunn</Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
