import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('提交的名字: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Layout className="app">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">nav 4</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <form onSubmit={this.handleSubmit}>
                <label>
                  名字:
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="提交" />
              </form>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>博文天下 ©2015~2019 Created by liujunn</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
