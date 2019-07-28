import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header>
          <div className="logo" />
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </React.Fragment>
    );
  }
}

export default Home;