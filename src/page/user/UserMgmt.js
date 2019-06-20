import React from 'react';
import { Table, Popconfirm, message, Modal } from 'antd';

class UserMgmt extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.confirmDel = this.confirmDel.bind(this);
    this.cancelDel = this.cancelDel.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  handleOk() {
    this.setState({
      visible: false,
    });
  }

  handleCancel() {
    this.setState({
      visible: false,
    });
  }

  confirmDel() {
    message.success('confirmDel');
  }

  cancelDel() {
    message.error('cancelDel');
  }

  render() {
    const columns = [{
      title: "序号",
      dataIndex: "number",
      sorter: (a, b) => {
        return a.number - b.number
      },
      sortDirections: ['descend', 'ascend']
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
            <a href="javascript:;" onClick={this.showModal}>编辑</a>
            &nbsp;&nbsp;
            <Popconfirm
              title="确定删除该用户吗？"
              onConfirm={this.confirmDel}
              onCancel={this.cancelDel}
              okText="确定"
              cancelText="取消"
            >
              <a href="javascript:;">删除</a>
            </Popconfirm>
            &nbsp;&nbsp;
            <Popconfirm
              title="确定停用该用户吗？"
              onConfirm={this.confirmDel}
              onCancel={this.cancelDel}
              okText="确定"
              cancelText="取消"
            >
              <a href="javascript:;">停用</a>
            </Popconfirm>
          </span>
        )
      }
    }];
    const data = [{
      number: 1,
      name: "刘军",
      mobile: "15629047169",
      mail: "975502845@qq.com",
      role: '超级管理员',
    },{
      number: 2,
      name: "刘军",
      mobile: "15629047169",
      mail: "975502845@qq.com",
      role: ' 管理员',
    }];
    return (
      <div>
        <Table rowKey="number" bordered columns={columns} dataSource={data} />
        <Modal
          title="编辑用户"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="确定"
          cancelText="取消"
        >
          <div>
          姓名
          手机号
          邮箱
          角色
          </div>
        </Modal>
      </div>
    );
  }
}

export default UserMgmt;