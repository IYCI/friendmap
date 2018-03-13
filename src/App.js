import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import withAuthentication  from './auth/withAuthentication'
import LoggedInContainer from './logged-in-container'
import Login from './login'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={LoggedInContainer} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default withAuthentication(App);
