import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';

import Homepage from './components/home/Homepage';
import Signup from './components/auth/Signup.js';
import Login from './components/auth/Login.js';
import Feed from './components/feed/Feed.js';
import authService from './components/auth/auth-service.js';

class App extends Component {
  state = {
    user: {}
  }

  fetchUser = () => {
    if (!this.state.user._id) {
      authService.loggedin()
        .then(data => {
          this.setState({user: data})
          console.log("user: ", this.state.user);

        })
        .catch(err => this.setState({user: false}))
      ;
    } else {
      console.log('user already in the state')
    }
  };

  updateUser = (data) => {
    this.setState({user: data});
  };

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    return (
      <Route render={props => (
        <div className="App" data-route={props.location.pathname}> {/* data-route="/" allow us to style pages */}

          <Switch>
            <Route exact path="/">
              {this.state.user ? <Redirect to="/videos" user={this.state.user} /> : <Homepage user={this.state.user} />}
            </Route>

            <Route exact path="/signup" render={(props) => (
              <Signup updateUser={this.updateUser} history={props.history} />
            )} />

            <Route exact path="/login" render={(props) => (
              <Login updateUser={this.updateUser} history={props.history} />
            )} />

            <Route exact path="/videos">
              {this.state.user ? <Feed user={this.state.user} /> : <Redirect to="/" user={this.state.user} />}
            </Route>

            {/* last route, ie: 404 */}
            <Route render={() => (<h1>Not Found</h1>)} />
          </Switch>
        </div>
      )} />
    );
  }
}

export default App;