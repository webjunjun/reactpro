import React from 'react';
import { Row, Col, Button, Icon, Table, Popconfirm, message, Input } from 'antd';

// 表单
const Search = Input.Search;

class ColumnMgmt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.confirmDel = this.confirmDel.bind(this);
    this.cancelDel = this.cancelDel.bind(this);
    this.addColumn = this.addColumn.bind(this);
    this.editColumn = this.editColumn.bind(this);
  }

  confirmDel() {
    message.success('confirmDel');
  }

  cancelDel() {
    message.error('cancelDel');
  }

  addColumn() {
    this.props.history.push("/column/add");
  }

  editColumn() {
    this.props.history.push("/column/update");
  }

  render() {
    const columns = [{
      title: "栏目ID",
      dataIndex: "number",
      sorter: (a, b) => {
        return a.number - b.number
      },
      sortDirections: ['descend', 'ascend']
    }, {
      title: "栏目名",
      dataIndex: "cloumn_name"
    }, {
      title: "栏目类型",
      dataIndex: "cloumn_type"
    }, {
      title: "操作",
      dataIndex: "oprate",
      render: (text, record) => {
        return (
          <span>
            <a href="javascript:;" onClick={this.editColumn}>编辑</a>
            &nbsp;&nbsp;
            <Popconfirm
              title="确定删除该栏目吗？"
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
      cloumn_name: "web前端",
      cloumn_type: "列表"
    },{
      number: 2,
      cloumn_name: "项目",
      cloumn_type: "列表"
    },{
      number: 3,
      cloumn_name: "日常",
      cloumn_type: "列表"
    },{
      number: 4,
      cloumn_name: "关于我",
      cloumn_type: "封面"
    }];
    return (
      <Row>
        <Col span={24}>
          <Row style={{marginBottom: "20px"}}>
            <Col span={2}>
              <Button type="primary" onClick={this.addColumn}>
                <Icon type="plus" />
                新增栏目
              </Button>
            </Col>
            <Col span={12}>
              <Search
                placeholder="输入栏目"
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
    );
  }
}

export default ColumnMgmt;