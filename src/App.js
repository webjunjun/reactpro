// import必须在业务代码前
import React from 'react';
import Routers from './router';
import './assets/css/reset.css';
import './assets/css/font/iconfont.css';
import './assets/css/style.css';
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Routers />
        </div>
      </Router>
    );
  }
}

export default App;