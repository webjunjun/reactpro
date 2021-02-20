// import必须在业务代码前
import React from 'react';

class FrontFooter extends React.Component {
  render() {
    const curYear = new Date().getFullYear();
    return (
      <footer className="footer">
        <div className="footer_wrap">
          <div className="copyright">
            <p>记录生活，分享点滴 - Design By liujunn</p>
            <p><a target="_blank" href="http://www.miitbeian.gov.cn/" rel="noopener noreferrer">鄂ICP备案15004902号</a> &copy; 2015 ~ {curYear}</p>
          </div>
          <div className="police">
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42090202000115" rel="noopener noreferrer"><img src={require('../assets/img/police-beian.png')} alt="" />
              <p>鄂公网安备 42090202000115号</p>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default FrontFooter;