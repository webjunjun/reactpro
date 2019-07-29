// import必须在业务代码前
import React from 'react';

class FrontHeader extends React.Component {
  render() {
    return (
      <div class="menu_wrap">
        <div class="menu_inner">
          <div class="logo">
              <a href="/">博文天下</a>
          </div>
          <ul class="menu_list">
            <li class="menu_item active"><a href="/">首页</a></li>
            <li class="menu_item"><a href="/web/">web前端</a></li>
            <li class="menu_item"><a href="/projects/">项目</a></li>
            <li class="menu_item"><a href="/essay/">日常</a></li>
            <li class="menu_item"><a href="/about/">关于我</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FrontHeader;