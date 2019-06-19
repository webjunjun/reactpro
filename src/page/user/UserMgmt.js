import React from 'react';
import { Table } from 'antd';

class UserMgmt extends React.Component {

  render() {
    const columns = [{
      title: "序号",
      dataIndex: "number"
    }, {
      title: "姓名",
      dataIndex: "name"
    }, {
      title: "手机号",
      dataIndex: "mobile"
    }, {
      title: "邮箱",
      dataIndex: "mail"
    }, {
      title: "角色",
      dataIndex: "role"
    }, {
      title: "操作",
      dataIndex: "oprate",
      render: (text, record) => {
        return (
          <span>
            <a href="javascript:;">编辑</a>
            <a href="javascript:;">删除</a>
          </span>
        )
      }
    }];
    const data = [{
      number: '1',
      name: "刘军",
      mobile: "15629047169",
      mail: "975502845@qq.com",
      role: '超级管理员',
    },{
      number: '2',
      name: "刘军",
      mobile: "15629047169",
      mail: "975502845@qq.com",
      role: '超级管理员',
    }];
    return (
      <div>
        <Table columns={columns} dataSource={data} />       
      </div>
    );
  }
}

export default UserMgmt;