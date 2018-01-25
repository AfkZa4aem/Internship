import React, { Component } from 'react';
import Designer from '../../components/Designer/Designer';
import './DesignerList.css';

class DesignerList extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    fetch('https://5a60889111654a0012d3013f.mockapi.io/imagecard/users')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        items: data
      })
      console.log (this.state);
    })
  }

  render(){
    const designers = this.state.items.map(item => {
      return <Designer 
                key={item.id} 
                img={item.imageUrl}
                name={item.name}
                num={item.followers}
                email={item.email}/>;
    });
    return (
      <div className="DesignerList">
        {designers}
      </div>
    );
  }
};

export default DesignerList;