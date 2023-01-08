import React, { Component } from 'react';
import Tile from './Tile';
import './style.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      front: "really long song name",
      back: [
        "artist_1",
        "artist_2",
        "artist_3"
      ],
      numTiles: 15,
      tiles: []
    };
  }

  componentDidMount() {
    this.createTile();
  }

  createTile() {
    const tile = [];
    for (let i = 0; i < this.state.numTiles; i++) {
      tile.push(i);
    };
    this.setState({ tiles: tile });
  }

  renderCard() {
      return (
        <Tile tiles={this.state.tiles}
          front={this.state.front}
          back={this.state.back}
        />
      )
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="Card">
        <div>
          {
            isAuthenticated() && (
              <div className="tile-list">
                {this.renderCard()}
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default Card;
