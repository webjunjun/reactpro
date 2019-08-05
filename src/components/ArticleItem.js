// import必须在业务代码前
import React from 'react';

class ArticleItem extends React.Component {
  render() {
    return (
      <div className="article_item">
        <h1 className="article_title">
          <a className="text-tradition" href={this.props.link} title={this.props.title}>{this.props.title}</a>
        </h1>
        <div className="article_intro">
          <span><i className="iconfont icon-rili"></i>{this.props.date}</span>
          <span><i className="iconfont icon-zitiyulan"></i>{this.props.read}℃</span>
          <span><i className="iconfont icon-aixin"></i>{this.props.like}喜欢</span>
        </div>
        <div className="article_txt">
          <p>{this.props.intro}</p>
        </div>
        <div className="article_btn clearfix">
          <a href={this.props.link}>阅读全文</a>
        </div>
      </div>
    );
  }
}

export default ArticleItem;