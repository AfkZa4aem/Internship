import React, { Component } from 'react';
import './Designers.css';

class Designers extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    fetch('https://5a60889111654a0012d3013f.mockapi.io/imagecard/users')
    .then(response => {
      console.log(response);
      response.json();
    })
    .then(responseData => {
      console.log(responseData);
      this.setState({
        items: responseData
      });
    })
    .catch(error => {
      console.log('Fetching and parsing data error', error)
    })
  }

  render(){
    const designersData = this.state.items;
    console.log(designersData);
    return (
      <div className="Designers">
      {/* {items.map(function(item) {
        return (
          <h4 key={item.id}>
            {item.name} has {item.followers} followers
          </h4>
        );
      })} */}
      </div>
    );
  }
};

export default Designers;