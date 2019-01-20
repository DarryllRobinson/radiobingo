import React, { Component } from 'react';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
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
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div  className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul  className="navbar-nav mr-auto">
                    <li  className="nav-item active">
                      <a  className="nav-link"
                        onClick={this.login.bind(this)}
                        style={{ cursor: "pointer" }}
                      >
                        Log In
                      <span  className="sr-only">
                      </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
          )}
          {
            isAuthenticated() && (
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div  className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul  className="navbar-nav mr-auto">
                    <li  className="nav-item active">
                      <a  className="nav-link"
                        onClick={this.logout.bind(this)}
                        style={{ cursor: "pointer" }}
                      >
                        Log Out
                      <span  className="sr-only">
                      </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
          )}

        </header>
      </div>
    );
  }
}

export default App;
