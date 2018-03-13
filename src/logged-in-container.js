import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { auth } from './firebase'
import withAuthorization  from './auth/withAuthorization'
import logo from './logo.svg';
import './App.css';

class LoggedInContainer extends Component {
  // state = {  }
  signOut = () => {
    console.log('sign out')
    auth.signOut()
  }

  render() {
    const { authUser } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {authUser.displayName}
        <div>
          <button onClick={this.signOut}>
            Sign Out
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(LoggedInContainer);