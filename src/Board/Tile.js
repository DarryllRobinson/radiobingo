import React, { Component } from 'react';
import { FlexyFlipCard } from 'flexy-flipcards';
import Back from './Back';
import Front from './Front';
//import { Button } from 'react-bootstrap';

class Tile extends Component {
  render() {

    return (
      <div>
        <FlexyFlipCard>
          <div ref="flipper">
            <Front front={this.props.front}/>
          </div>

          <div ref="flipper"
            style={{alignItems: "center"}}
          >
            <div className="RadioGroup"
              style={{fontSize: 13, color: "white", textAlign: "left", padding: 3}}
            >
              <Back back={this.props.back}
                numBack={this.props.numBack}
              />
            </div>
          </div>
        </FlexyFlipCard>
      </div>
    )
  }
}

export default Tile;
