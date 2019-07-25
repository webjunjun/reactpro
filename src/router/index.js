import React from 'react';
import { Route, Switch } from 'react-router-dom';
// admin组件
import UserMgmt from '../admin/UserMgmt';
import ColumnMgmt from '../admin/ColumnMgmt';
import ColumnAdd from '../admin/ColumnAdd';
import ColumnEdit from '../admin/ColumnEdit';
import ArticleMgmt from '../admin/ArticleMgmt';
import ArticleAdd from '../admin/ArticleAdd';
import ArticleEdit from '../admin/ArticleEdit';
import TagMgmt from '../admin/TagMgmt';
import DiscussMgmt from '../admin/DiscussMgmt';
import MessageMgmt from '../admin/MsgMgmt';
import ThemeMgmt from '../admin/ThemeMgmt';

// 前端组件
import Home from '../page/Home';
import List from '../page/List';
import Detail from '../page/Detail';
import About from '../page/About';
import Login from '../page/Login';
import SearchList from '../page/SearchList';

const routes = [{
    path: '/',
    component: Home,
    exact: true
}, {
    path: '/list',
    component: List
}, {
    path: '/detail',
    component: Detail
}, {
    path: '/about',
    component: About
}, {
    path: '/login',
    component: Login
}, {
    path: '/search',
    component: SearchList
}, {
    path: '/admin/*',
    component: UserMgmt
}, {
    path: '/admin/user/list',
    component: UserMgmt,
}, {
    path: '/admin/column/list',
    component: ColumnMgmt,
}, {
    path: '/admin/column/add',
    component: ColumnAdd,
}, {
    path: '/admin/column/update',
    component: ColumnEdit,
}, {
    path: '/admin/article/list',
    component: ArticleMgmt,
}, {
    path: '/admin/article/add',
    component: ArticleAdd,
}, {
    path: '/admin/article/update',
    component: ArticleEdit,
}, {
    path: '/admin/tag/list',
    component: TagMgmt,
}, {
    path: '/admin/discuss/list',
    component: DiscussMgmt,
}, {
    path: '/admin/message/list',
    component: MessageMgmt,
}, {
    path: '/admin/theme/list',
    component: ThemeMgmt,
}];

// 路由
// route.exact严格匹配
const Routers = () => (
    <Switch>
        {
            routes.map((route, i) => (
                <Route exact={route.exact} key={i} path={route.path} component={route.component} />
            ))
        }
    </Switch>
);

export default Routers;