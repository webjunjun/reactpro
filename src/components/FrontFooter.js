// import必须在业务代码前
import React from 'react';

class FrontFooter extends React.Component {
  render() {
    return (
      <footer class="footer">
        <div class="footer_wrap">
          <p class="copyright">
            <span>记录生活，分享点滴 - Design By liujunn</span><br />
            <span>
              <a href="http://www.miitbeian.gov.cn/">鄂ICP备案15004902号</a> ©2015-2019
                    </span>
          </p>
          <div class="police">
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42090202000115"><img src="/skin/2019/imgs/police-beian.png" />
              <p>鄂公网安备 42090202000115号</p>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default FrontFooter;