import {Redirect} from 'react-router-dom';
import React from 'react';
import './Feed.css';

import authService from '../auth/auth-service.js';
import VideoUpload from './Videopost/VideoUpload.js';
export default class FeedHeader extends React.Component {
  state = {
    uploadOpen: false
  }
  
  logout = (event) => {
    authService.logout()
      .then(response => {
        this.props.updateUser(false);
      })
    ;
  }

  toggle = () => {
    this.setState({uploadOpen: !this.state.uploadOpen})
  } 

  render() {
    
    if (this.props.user === false) return <Redirect to="/" />
    return(
      <div className="Feed-header">
      <header>
        <h2>Hi <span>{this.props.user.username}</span>!</h2>
        <p>Which exercise are you sharing today?</p>
      </header>

      <nav>
        {this.state.uploadOpen && <VideoUpload toggle={this.toggle} />}
        <button onClick={this.toggle}>Upload</button>
        <button className="" onClick={this.logout}>Logout</button>
      </nav>

      </div>
    )
  }
}