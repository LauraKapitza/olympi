import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';

import Homepage from './components/home/Homepage';
import Signup from './components/auth/Signup.js';
import Login from './components/auth/Login.js';
import Feed from './components/feed/Feed.js';
import authService from './components/auth/auth-service.js';
import ProProfile from './components/Profile/proProfile.js';
import UserProfile from './components/Profile/userProfile.js';
import Explore from './components/Explore/Explore.js';
import Terms from './components/home/OtherPages/Terms/Terms';
import Team from './components/home/OtherPages/Team/Team';
import TagDefinitions from './components/home/OtherPages/TagDefinitions/TagDefinitions';
import ForProfessionals from './components/home/OtherPages/ForProfessionals/ForProfessionals';
import FAQ from './components/home/OtherPages/FAQ/FAQ';
import Blog from './components/home/OtherPages/Blog/Blog';
import About from './components/home/OtherPages/About/About';
import Settings from './components/Settings/Settings';
import Notifications from './components/Notifications/Notifications';

class App extends Component {
  state = {
    user: null
  }

  fetchUser = () => {
    console.log('fetch')
    authService.loggedin()
      .then(data => {
        this.setState({user: data})
        console.log("user: ", this.state.user);
      })
      .catch(err => {
        this.setState({user: null})
      });

  };

  updateUser = (data) => {
    this.setState({user: data});
  };

  componentDidMount() {
    console.log('component did mount')
    this.fetchUser();
  }

  render() {
    console.log('render')
    return (
      <Route render={props => (
        <div className="App" data-route={props.location.pathname}> {/* data-route="/" allow us to style pages */}

          <Switch>
            <Route exact path="/">
              {this.state.user === null ? <Homepage user={this.state.user} /> : <Redirect to="/videos" user={this.state.user} />}
            </Route>

            <Route exact path="/signup" render={(props) => (
              <Signup updateUser={this.updateUser} history={props.history} />
            )} />

            <Route exact path="/login" render={(props) => (
              <Login updateUser={this.updateUser} history={props.history} />
            )} />

            <Route exact path="/videos">
              {this.state.user ? <Feed updateUser={this.updateUser} user={this.state.user} /> : <Redirect to="/" user={this.state.user} />}
            </Route>
 
            {/* go back an check this Karina */}
            <Route exact path="/profile" render={(props) => (
              this.state.user && <UserProfile user={this.state.user} />
            )} />

            {/* go back an check this Karina */}
            <Route exact path="/user">
              {this.state.user?.professional ? <ProProfile user={this.state.user} /> : <UserProfile user={this.state.user} />}
            </Route>

            {/* go back an check this Karina */}
            <Route exact path="/videos/explore" render={(props) => (
              <Explore user={this.state.user} />
            )} />

            {/* go back an check this Karina */}

            <Route exact path="/settings" render={(props) => (
              <Settings user={this.state.user} />
            )} />

            {/* go back an check this Karina */}

            <Route exact path="/notifications" render={(props) => (
              <Notifications user={this.state.user} />
            )} />





            {/* STATIC PAGES AT END OF HOMEPAGEgo back an check this Karina */}
            
            <Route exact path="/faq" render={(props) => (
              <FAQ user={this.state.user} />
            )} />

            <Route exact path="/about" render={(props) => (
              <About user={this.state.user} />
            )} />
            <Route exact path="/blog" render={(props) => (
              <Blog user={this.state.user} />
            )} />
            <Route exact path="/professionals" render={(props) => (
              <ForProfessionals user={this.state.user} />
            )} />
            <Route exact path="/definitions" render={(props) => (
              <TagDefinitions user={this.state.user} />
            )} />
            <Route exact path="/team" render={(props) => (
              <Team user={this.state.user} />
            )} />
            <Route exact path="/terms" render={(props) => (
              <Terms user={this.state.user} />
            )} />

            {/* last route, ie: 404 */}
            <Route render={() => (<h1>Not Found</h1>)} />
          </Switch>



          
        </div>
      )} />
    );
  }
}

export default App;