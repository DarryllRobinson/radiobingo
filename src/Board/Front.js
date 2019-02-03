import React, { Component } from 'react';
import './front.css';

class Front extends Component {
  render() {
    return (
      <div className="front">
        {this.props.front}
      </div>
    )
  }

}

export default Front;
