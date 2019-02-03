import React, { Component } from 'react';
import { FlexyFlipCard } from 'flexy-flipcards';
import Back from './Back';
import Front from './Front';
import './style.css';
//import { Button } from 'react-bootstrap';

class Tile extends Component {
  render() {

    return (
      <div className="tile">
        <FlexyFlipCard
          frontBackgroundColor="#000"
          backBackgroundColor="#d8410a"
        >
          <div ref="flipper">
            <Front front={this.props.front} />
          </div>

          <div ref="flipper">
            {/*<div className="RadioGroup">*/}
              <Back back={this.props.back}
                numBack={this.props.numBack}
              />
            {/*</div>*/}
          </div>
        </FlexyFlipCard>
      </div>
    )
  }
}

export default Tile;
