// import必须在业务代码前
import React from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
// 业务代码
const { Sider } = Layout;

class AdminSider extends React.Component {
	render() {
		return (
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
			>
				<div className="logo"></div>
				<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
					<Menu.Item key="1">
						<Link to="/admin/user/list">
							<Icon type="team" />
							<span className="nav-text">用户管理</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="2">
						<Link to="/admin/column/list">
							<Icon type="menu" />
							<span className="nav-text">栏目管理</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="3">
						<Link to="/admin/tag/list">
							<Icon type="tags" />
							<span className="nav-text">Tags分类</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="4">
						<Link to="/admin/article/list">
							<Icon type="form" />
							<span className="nav-text">文章管理</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="5">
						<Link to="/admin/discuss/list">
							<Icon type="message" />
							<span className="nav-text">评论管理</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="6">
						<Link to="/admin/message/list">
							<Icon type="notification" />
							<span className="nav-text">消息通知</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="7">
						<Link to="/admin/theme/list">
							<Icon type="project" />
							<span className="nav-text">主题模板</span>
						</Link>
					</Menu.Item>
				</Menu>
			</Sider>
		);
	}
}

export default AdminSider;