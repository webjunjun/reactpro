import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// 组件
// import App from '../page/home/App';
// import About from '../page/about/About';
import UserMgmt from '../page/user/UserMgmt';
import ColumnMgmt from '../page/column/ColumnMgmt';
import ColumnAdd from '../page/column/ColumnAdd';
import ColumnEdit from '../page/column/ColumnEdit';
import ArticleMgmt from '../page/article/ArticleMgmt';
import TagMgmt from '../page/tag/TagMgmt';
import DiscussMgmt from '../page/tag/TagMgmt';
import MessageMgmt from '../page/tag/TagMgmt';
import ThemeMgmt from '../page/tag/TagMgmt';

const routes = [{
    path: '/user/list',
    component: UserMgmt,
},{
    path: '/column/list',
    component: ColumnMgmt,
},{
    path: '/column/add',
    component: ColumnAdd,
},{
    path: '/column/update',
    component: ColumnEdit,
},{
    path: '/article/list',
    component: ArticleMgmt,
},{
    path: '/tag/list',
    component: TagMgmt,
},{
    path: '/discuss/list',
    component: DiscussMgmt,
},{
    path: '/message/list',
    component: MessageMgmt,
},{
    path: '/theme/list',
    component: ThemeMgmt,
}];

// 路由
// route.exact严格匹配
const Routers = () => (
    <Router>
        <Switch>
            {
                routes.map((route,i)=> (
                   <Route exact={route.exact} key={i} path={route.path} component={route.component} />
                ))
            }
        </Switch>
    </Router>
);

export default Routers;