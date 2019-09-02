import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducers'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

/**
 * unregister() 不注册serviceWorker服务，app不具备离线使用能力
 * register() 注册serviceWorker服务，让app具备离线使用功能，既PWA应用
 * https://bit.ly/CRA-PWA
 */
serviceWorker.unregister();
