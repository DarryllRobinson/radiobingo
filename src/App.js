import React, { Component } from 'react';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Button } from 'react-bootstrap';
//import Menu from './Menu/menu';
//import Auth from './Auth/Auth';
import './App.css';

//const auth = new Auth();

class App extends Component {

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
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="App">
        <header className="App-header">


          {
            !isAuthenticated() && (
              <div>
              <p>
                Welcome to Radio Bingo!
              </p>
                      <Button
                        onClick={this.login.bind(this)}
                        style={{ cursor: "pointer" }}
                      >
                        Log In

                      </Button>
              </div>
          )}
          {
            isAuthenticated() && (
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
            )}

        </header>
      </div>
    );
  }
}

export default App;
