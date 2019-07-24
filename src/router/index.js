import React from 'react';
import { Route, Switch } from 'react-router-dom';
// 组件
import UserMgmt from '../page/user/UserMgmt';
import ColumnMgmt from '../page/column/ColumnMgmt';
import ColumnAdd from '../page/column/ColumnAdd';
import ColumnEdit from '../page/column/ColumnEdit';
import ArticleMgmt from '../page/article/ArticleMgmt';
import ArticleAdd from '../page/article/ArticleAdd';
import ArticleUpdate from '../page/article/ArticleUpdate';
import TagMgmt from '../page/tag/TagMgmt';
import DiscussMgmt from '../page/discuss/DiscussMgmt';
import MessageMgmt from '../page/message/MsgMgmt';
import ThemeMgmt from '../page/theme/ThemeMgmt';

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
    path: '/article/add',
    component: ArticleAdd,
},{
    path: '/article/update',
    component: ArticleUpdate,
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
    <Switch>
        {
            routes.map((route,i)=> (
                <Route exact={route.exact} key={i} path={route.path} component={route.component} />
            ))
        }
    </Switch>
);

export default Routers;