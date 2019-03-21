import React,{Component} from 'react';
import Image from 'react-bootstrap/Image';

class AlbumPage extends Component{
  constructor(props){
    super(props)

  }
  render(){
    return(
      <div>
        <figure>
          <Image src={this.props.albumURL} thumbnail />
          <figcaption>{this.props.albumName}</figcaption>
        </figure>
      </div>
    );
  }
}

export default AlbumPage;
