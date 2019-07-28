// import必须在业务代码前
import React from 'react';
import { Layout } from 'antd';
import '../assets/css/front_style.css';
// 业务代码
const { Header } = Layout;

class FrontHeader extends React.Component {
  render() {
    return (
      <Header>
        header
      </Header>
    );
  }
}

export default FrontHeader;