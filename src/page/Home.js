import React from 'react';
import FrontHeader from '../components/FrontHeader';
import FrontFooter from '../components/FrontFooter';
import { Layout } from 'antd';
const { Footer, Content } = Layout;

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FrontHeader></FrontHeader>
        <div class="article_wrap">
          <div class="article_inner">
          </div>
        </div>
        <FrontFooter></FrontFooter>
      </React.Fragment>
    );
  }
}

export default Home;