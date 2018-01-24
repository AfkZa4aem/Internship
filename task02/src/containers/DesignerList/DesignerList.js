import React, { Component } from 'react';
import axios from 'axios';
import Designer from '../../components/Designer/Designer';
import './DesignerList.css';

class DesignerList extends Component {
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
      <div className="DesignerList">
        <Designer />
        <hr/>
      </div>
    );
  }
};

export default DesignerList;