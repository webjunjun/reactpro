// import必须在业务代码前
import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
// 业务代码
const { Sider } = Layout;

class AdminSider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: '1',
			urlArr: [
				'/admin/user/list',
				'/admin/column/list',
				'/admin/tag/list',
				'/admin/article/list',
				'/admin/discuss/list',
				'/admin/message/list',
				'/admin/theme/list'
			]
		}
	}

	componentWillMount() {
		const curUrl = this.props.location.pathname;
		const curKey = this.state.urlArr.indexOf(curUrl);
		if (curKey !== -1) {
			this.setState({
				selected: '' + (curKey + 1)
			});
		}
	}

	render() {
		return (
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
			>
				<div className="logo"></div>
				<Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.selected]}>
					<Menu.Item key="1">
						<Link to={this.state.urlArr[0]}>
							<Icon type="team" />
							<span className="nav-text">用户管理</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="2">
						<Link to={this.state.urlArr[1]}>
							<Icon type="menu" />
							<span className="nav-text">栏目管理</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="3">
						<Link to={this.state.urlArr[2]}>
							<Icon type="tags" />
							<span className="nav-text">Tags分类</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="4">
						<Link to={this.state.urlArr[3]}>
							<Icon type="form" />
							<span className="nav-text">文章管理</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="5">
						<Link to={this.state.urlArr[4]}>
							<Icon type="message" />
							<span className="nav-text">评论管理</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="6">
						<Link to={this.state.urlArr[5]}>
							<Icon type="notification" />
							<span className="nav-text">消息通知</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="7">
						<Link to={this.state.urlArr[6]}>
							<Icon type="project" />
							<span className="nav-text">主题模板</span>
						</Link>
					</Menu.Item>
				</Menu>
			</Sider>
		);
	}
}

export default withRouter(AdminSider);