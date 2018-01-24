import React, { Component } from 'react';
import axios from 'axios';
import './Designers.css';

class Designers extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    axios.get('https://5a422991e1542700129be910.mockapi.io/imagecard/users')
      .then(response => {
        this.setState({
          items: response.data
        });
      });
  }

  render(){
    console.log(this.state.items);
    return (
      <div className="Designers">
      
      </div>
    );
  }
};

export default Designers;