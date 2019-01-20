import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
//import Home from './Home/Home';
/*
import Landing from './components/Landing';
import Card from './components/Card';
import Test from './components/Test';
import Profile from './Auth/Profile';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';*/
import history from './history';


//const auth = new Auth();

/*const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}*/

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App  />} />
        </div>
      </Router>
  );
}
