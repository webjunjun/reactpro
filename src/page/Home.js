import React from 'react';
import FrontHeader from '../components/FrontHeader';
import FrontFooter from '../components/FrontFooter';
import ArticleItem from '../components/ArticleItem';
import axios from 'axios';
// mock必须放在src文件夹下。所以选择打包后的第一个页面
import '../mock/index';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
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
  }

  render() {
    const articleItems = this.state.list.map((item, index) => {
      return (
        <ArticleItem key={index} title={item.title} link={item.link} date={item.date} read={item.read} like={item.like} intro={item.intro} ></ArticleItem>
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
                <input type="text" name="keyboard" placeholder="搜索..." className="search_input" autocomplete="off" />
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
                <li className="tuijian_item text-tradition">
                  <a href="/essay/10.html" title="《书虫》——适合初学者的英语读物">《书虫》——适合初学者的英语读物</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <FrontFooter></FrontFooter>
      </React.Fragment>
    );
  }
}

export default Home;