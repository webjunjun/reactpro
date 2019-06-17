import React from 'react';

class About extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      date: new Date(),
    }
    // 为了在回调中使用this，这个绑定是必不可少的
    this.selfAlert = this.selfAlert.bind(this);
  }

  componentDidMount() {
    // 组件挂载后执行
    this.timerID = setTimeout(() => this.selfAlert(),1000);
  }

  componentDidUpdate() {
    // 组件更新后执行，首次渲染不执行
  }

  componentWillUnmount() {
    // 销毁组件前执行
    clearTimeout(this.timerID);
  }

  selfAlert () {
    this.setState((state, props) => {
      return {
        date: new Date(),
      }
    });
    this.timerID = setTimeout(() => this.selfAlert(),1000);
  }

  render() {
    return (
      <div>
        <h1 onClick={this.selfAlert}>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default About;