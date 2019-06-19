import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// 组件
// import App from '../page/home/App';
import About from '../page/about/About';
import UserMgmt from '../page/user/UserMgmt';
const routes = [
    // {
    // path: '/',
    // component: App,
    // exact: true
    // },
    {
    path: '/about',
    component: About,
},{
    path: '/user',
    component: UserMgmt,
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