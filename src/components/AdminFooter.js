// import必须在业务代码前
import React from 'react';
import { Layout } from 'antd';
// 业务代码
const { Footer } = Layout;

class AdminFooter extends React.Component {
  render() {
    return (
      <Footer className="bottom_footer">博文天下 ©2015~2019 Created by liujunn</Footer>
    );
  }
}

export default AdminFooter;