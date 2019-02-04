import React, { Component } from 'react';
import { FlexyFlipCard } from 'flexy-flipcards';
import Back from './Back';
import Front from './Front';
import './style.css';
//import { Button } from 'react-bootstrap';

class Tile extends Component {
  render() {
    return this.props.tiles.map((tile, index) => {
      return (
        <div className="tile"
          key={index}>
          <FlexyFlipCard
            frontBackgroundColor="#000"
            backBackgroundColor="#090909"
          >
            <div ref="flipper">
              <Front front={this.props.front} />
            </div>

            <div ref="flipper">
              <Back back={this.props.back}
              />
            </div>
          </FlexyFlipCard>
        </div>
      )
    })
  }
}

export default Tile;

//backBackgroundColor="#d8410a"

/*
return (
  <div className="tile">
    <FlexyFlipCard
      frontBackgroundColor="#000"
      backBackgroundColor="#090909"
    >
      <div ref="flipper">
        <Front front={this.props.front} />
      </div>

      <div ref="flipper">
        <div className="RadioGroup">
          <Back back={this.props.back}
          />
        </div>
      </div>
    </FlexyFlipCard>
  </div>
)
*/
