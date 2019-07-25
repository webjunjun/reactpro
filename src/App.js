// import必须在业务代码前
import React from 'react';
import Routers from './router';
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from 'antd';
// import '../src/assets/css/reset.css';
import '../src/assets/css/style.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout className="app">
          <Routers />
        </Layout>
      </Router>
    );
  }
}

export default App;