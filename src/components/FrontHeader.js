// import必须在业务代码前
import React from 'react';

class FrontHeader extends React.Component {
  render() {
    return (
      <div className="menu_wrap">
        <div className="menu_inner">
          <div className="logo">
              <a href="/">博文天下</a>
          </div>
          <ul className="menu_list">
            <li className="menu_item active"><a href="/">首页</a></li>
            <li className="menu_item"><a href="/web/">web前端</a></li>
            <li className="menu_item"><a href="/projects/">项目</a></li>
            <li className="menu_item"><a href="/essay/">日常</a></li>
            <li className="menu_item"><a href="/about/">关于我</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FrontHeader;