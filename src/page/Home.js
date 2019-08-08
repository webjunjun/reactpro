import React from 'react';
import FrontHeader from '../components/FrontHeader';
import FrontFooter from '../components/FrontFooter';
import ArticleItem from '../components/ArticleItem';
import axios from 'axios';
// mock必须放在src文件夹下。所以选择打包后的第一个页面
// import '../mock/index';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      high_list: []
    }
  }

  componentDidMount() {
    axios.get('/article_list', {
      params: {
        column: "index"
      }
    })
    .then((res) => {
      const json = res.data;
      this.setState({
        list: json.data
      });
    })
    .catch((err) => {
      console.log(err);
    });

    axios.get('/highest_list', {
      params: {
        column: "index"
      }
    })
    .then((res) => {
      const json = res.data;
      this.setState({
        high_list: json.data
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    const articleItems = this.state.list.map((item, index) => {
      return (
        <ArticleItem key={index} title={item.title} link={item.link} date={item.date} read={item.read} like={item.like} intro={item.intro} ></ArticleItem>
      )
    });
    const highItems = this.state.high_list.map((item, index) => {
      return (
        <li key={index} className="tuijian_item text-tradition">
          <a href={item.link} title={item.title}>{item.title}</a>
        </li>
      )
    });
    return (
      <React.Fragment>
        <FrontHeader></FrontHeader>
        <div className="article_wrap">
          <div className="article_inner">
            {articleItems}
          </div>
          <div className="side_inner">
            <div className="side_box">
              <form className="search_box" action="/e/search/index.php" method="post">
                <input type="text" name="keyboard" placeholder="搜索..." className="search_input" autocomplete="off" maxLength="30" />
                <button className="search_btn" type="submit">
                    <i className="iconfont icon-search"></i>
                </button>
              </form>
            </div>
            <div className="side_box">
              <h3 className="aside_title">
                <i className="iconfont icon-shuqian"></i>
                <span>文章推荐</span>
              </h3>
              <ul className="tuijian_list">
                {highItems}
              </ul>
            </div>
            <div className="side_box">
              <h3 className="aside_title">
                <i className="iconfont icon-labelb"></i>
                <span>分类</span>
              </h3>
              <div className="tags_box">
                <a href="/e/tags/?tagname=web%E5%89%8D%E7%AB%AF" target="_blank">web前端</a>
                <a href="/e/tags/?tagname=web%E5%89%8D%E7%AB%AF" target="_blank">web前端</a>
                <a href="/e/tags/?tagname=web%E5%89%8D%E7%AB%AF" target="_blank">web前端</a>
              </div>
            </div>
            <div class="side_box">
              <h3 class="aside_title">
                <i class="iconfont icon-fabu"></i>
                <span>联系我</span>
              </h3>
              <div>
                <img src="https://www.liujunn.com/skin/2019/imgs/qq_qrcode.jpg" alt="QQ二维码" />
              </div>
            </div>
          </div>
        </div>
        <FrontFooter></FrontFooter>
      </React.Fragment>
    );
  }
}

export default Home;