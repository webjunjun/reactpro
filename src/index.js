import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import * as serviceWorker from './serviceWorker';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

/**
 * unregister() 不注册serviceWorker服务，app不具备离线使用能力
 * register() 注册serviceWorker服务，让app具备离线使用功能，既PWA应用
 * https://bit.ly/CRA-PWA
 */
serviceWorker.unregister();

// 网站性能监测
// reportWebVitals();
