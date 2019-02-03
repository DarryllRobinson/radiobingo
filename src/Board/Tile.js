import React, { Component } from 'react';
import { FlexyFlipCard } from 'flexy-flipcards';
import Back from './Back';
import Front from './Front';
//import { Button } from 'react-bootstrap';

class Tile extends Component {    //***** renders a tile, front and back
  render() {

    return (
      <div>
        <FlexyFlipCard>
          <div ref="flipper">
            <Front front={this.props.front}/>
          </div>

          <div ref="flipper">
            <Back back={this.props.back}
              numBack={this.props.numBack}
            />
          </div>
        </FlexyFlipCard>
      </div>
    )
  }
}

export default Tile;
