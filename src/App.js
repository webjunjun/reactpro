// import必须在业务代码前
import React from 'react';
import Routers from './router';
import './assets/css/style.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from 'antd';

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