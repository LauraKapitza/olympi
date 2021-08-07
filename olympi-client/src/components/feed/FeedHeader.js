import {Redirect} from 'react-router-dom';
import React from 'react';
import './Feed.css';
import upload_icon from './icons/add-button.svg'

import authService from '../auth/auth-service.js';
import VideoUpload from './VideoPost/VideoUpload.js';
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

        <nav className="feed-header-actions">
          
          <button className="upload-button" onClick={this.toggle}><img src={upload_icon} alt="Upload button"></img></button>
          <button className="" onClick={this.logout}>Logout</button>
        </nav>

        {this.state.uploadOpen && <VideoUpload toggle={this.toggle} addVideo={this.props.addVideo} />}

      </div>
    )
  }
}