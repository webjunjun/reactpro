import React from 'react';
import FrontHeader from '../components/FrontHeader';
import FrontFooter from '../components/FrontFooter';
// mock必须放在src文件夹下。所以选择打包后的第一个页面
import '../mock/index';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_info: {}
    }
  }

  componentDidMount() {
    // 
  }

  render() {
    return (
      <React.Fragment>
        <FrontHeader></FrontHeader>
        <div className="article_wrap">
          <div className="article_inner">
          </div>
        </div>
        <FrontFooter></FrontFooter>
      </React.Fragment>
    );
  }
}

export default Home;