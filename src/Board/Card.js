import React, { Component } from 'react';
import Tile from './Tile';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      front: "song",
      back: [
        "artist_1",
        "artist_2",
        "artist_3"
      ],
      numBack: 3
    };
  }

  render() {

    return (
      <div>
        <div className="item-list">
          <Tile front={this.state.front}
            back={this.state.back}
            numBack={this.state.numBack}
          />
        </div>
      </div>
    )
  }
}

export default Card;
