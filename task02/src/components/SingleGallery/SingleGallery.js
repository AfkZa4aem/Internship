import React, { Component } from 'react';
import './SingleGallery.css';

class SingleGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: []
    }
  }

  componentWillMount() {
    fetch(`https://5a60889111654a0012d3013f.mockapi.io/imagecard/users/${this.props.id}/images`)
    .then(results => {
      return results.json()
    })
    .then(data => {
      this.setState({gallery: data});
    })
  }

  render() {
    const images = this.state.gallery.map((img, i) => {
      return(<div className='DesignerSinglePict' key={i}>
               <img alt={img.id} src={img.imageUrl}/>
            </div>
      )
    });
    return (
      <div className='DesignerGallery'>
        {images}
      </div>
    )
  }
};

export default SingleGallery;