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
import Register from '../page/Register';
import SearchList from '../page/SearchList';

const routes = [{
    path: '/',
    component: Home,
    // sensitive: false,// 是否严格区分路径的大小写，默认false不区分
    // strict: false,// 是否允许路径后有/，默认false允许
    exact: true// 是否允许有子路由，默认false允许
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
},{
    path: '/register',
    component: Register,
}, {
    path: '/search',
    component: SearchList
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