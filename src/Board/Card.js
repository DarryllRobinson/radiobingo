import React, { Component } from 'react';
import Tile from './Tile';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      front: "song",
      back: [
        "Michael Jackson",
        "Blur",
        "Mickey Mouse"
      ],
      numBack: 3
    };
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        {isAuthenticated() && (
          <div className="item-list">
            <Tile front={this.state.front}
              back={this.state.back}
              numBack={this.state.numBack}
            />
          </div>
        )}
      </div>
    )
  }
}

export default Card;
