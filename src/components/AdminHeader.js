// import必须在业务代码前
import React from 'react';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import '../assets/css/back_style.css';
// 业务代码
const { Header } = Layout;

class AdminHeader extends React.Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item className="dropdown_item">退出</Menu.Item>
      </Menu>
    );
    return (
      <Header className="top_header">
        <Dropdown overlay={menu}>
          <Avatar style={{ backgroundColor: '#87d068', float: 'right' }} icon="user" />
        </Dropdown>
      </Header>
    );
  }
}

export default AdminHeader;