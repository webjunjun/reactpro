import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

/**
 * unregister() 不注册serviceWorker服务，app不具备离线使用能力
 * register() 注册serviceWorker服务，让app具备离线使用功能，既PWA应用
 * https://bit.ly/CRA-PWA
 */
serviceWorker.unregister();
