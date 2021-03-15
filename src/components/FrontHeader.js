// import必须在业务代码前
import React from 'react';

class FrontHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isExpand: false,
      expandStyle: {}
    }
  }

  componentDidMount() {
    // 
  }

  displayMenu = () => {
    const curExpand = !this.state.isExpand;
    const tempHeight = { height: (44 * this.state.list.length) + 'px' };
    let timer;
    if (curExpand) {
      timer = 300;
    } else {
      timer = 30;
    }
    this.setState({
      expandStyle: tempHeight
    }, () => {
      setTimeout(() => {
        this.setState({
          isExpand: curExpand,
          expandStyle: {}
        });
      }, timer);
    });
  }

  render() {
    const listItems = this.state.list.map((item, index) => {
      return (
        <li className={'menu_item' + (item.isActive ? ' active' : '')} key={index}><a href={item.link}>{item.name}</a></li>
      )
    });
    return (
      <div className="menu_wrap">
        <div className="menu_inner">
          <div className="logo">
              <a href="/">博文天下</a>
          </div>
          <span className="iconfont icon-caidan menu_btn" onClick={this.displayMenu}></span>
          <ul className={'menu_list' + (this.state.isExpand ? ' dispaly_menu' : '')} style={this.state.expandStyle}>
            {listItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default FrontHeader;