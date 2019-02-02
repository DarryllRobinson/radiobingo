import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Menu extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {

    return (
      <div>
        <Button

            style={{ cursor: "pointer" }}
          >
            Play Bingo!
          </Button>

          <Button
            onClick={this.goTo.bind(this, 'profile')}
            style={{ cursor: "pointer" }}
          >
            Profile
          </Button>

          <Button

            style={{ cursor: "pointer" }}
          >
            How it works
          </Button>

          <Button

            style={{ cursor: "pointer" }}
          >
            Missed songs
          </Button>

          <Button
            onClick={this.goTo.bind(this, 'game')}
            style={{ cursor: "pointer" }}
          >
            Current game
          </Button>

          <Button
            onClick={this.logout.bind(this)}
            style={{ cursor: "pointer" }}
          >
            Log Out
          </Button>
      </div>
    )
  }
}

export default Menu;
