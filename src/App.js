import React, { Component } from 'react';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Button } from 'react-bootstrap';
import './App.css';

class App extends Component {

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
          <p>
            Welcome to Radio Bingo!
          </p>

          {
            !isAuthenticated() && (

                      <Button
                        onClick={this.login.bind(this)}
                        style={{ cursor: "pointer" }}
                      >
                        Log In

                      </Button>
          )}
          {
            isAuthenticated() && (


                      <Button
                        onClick={this.logout.bind(this)}

                      >
                        Log Out

                      </Button>




          )}

        </header>
      </div>
    );
  }
}

export default App;
