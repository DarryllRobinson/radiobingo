import React, { Component } from 'react';
import Tile from './Tile';

class Card extends Component {
  /*constructor(props) {
    super(props);

    this.state = {

    };
  }*/

  render() {

    return (
      <div>
        <div className="item-list">
          <Tile />
          <Tile />
        </div>
      </div>
    )
  }
}

export default Card;
