import React, { Component } from 'react';
import { FlexyFlipCard } from 'flexy-flipcards';

class Tile extends Component {
  render() {    //***** renders a card, front and back
    return (
      <div
        className="item"
        key={1}
      >
        <FlexyFlipCard>

          <div ref="flipper">
            FRONT
          </div>

          <div ref="flipper">
            BACK
          </div>

        </FlexyFlipCard>
      </div>
    )
  }
}

export default Tile;
