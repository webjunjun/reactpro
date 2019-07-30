import React from 'react';
import FrontHeader from '../components/FrontHeader';
import FrontFooter from '../components/FrontFooter';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_info: {}
    }
  }

  componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then((result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },(error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
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