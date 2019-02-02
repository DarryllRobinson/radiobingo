import React, { Component } from 'react';

class Game extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;

    if (!this.state.tiles && isAuthenticated) {
      return (
        <div className="Game">
          Please wait a moment as we build your card...
        </div>
      )
    }

    const { profile } = this.state;
    return (
      <div>
        {
          isAuthenticated() && (
            <div className="Game">
              <h2>{profile.nickname + String.fromCharCode(39)}s Radio Bingo Board</h2>
              <h2>You have {this.state.completed} tiles completed</h2>

              <div className="col-xs-5 col-sm-12 col-md-9">

                <div className="item-list">
                  {this.renderCards()}
                </div>

              </div>

            </div>
          )
        }
      </div>
    )
  }
}

export default Game;
