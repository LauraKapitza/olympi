import {Redirect} from 'react-router-dom';
import React from 'react';
import './Feed.css';
import upload_icon from '../../assets/icons/add-button.svg'

import authService from '../auth/auth-service.js';
import VideoUpload from './Videopost/VideoUpload.js';
export default class FeedHeader extends React.Component {
  state = {
    uploadOpen: false
  }
  
  logout = (event) => {
    authService.logout()
      .then(response => {
        this.props.updateUser(null);
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
        <div className="Feed-header-wrapper">
          <header>
            <h2>Hi <span>{this.props.user.username}</span>!</h2>
          </header>

          <nav className="feed-header-actions">
            
            <button className="upload-button" onClick={this.toggle}><img src={upload_icon} alt="Upload button icon"></img></button>
            <button className="logout-button" onClick={this.logout}><img src="/assets/icons/logoutbtn.svg" alt="Logout button icon"></img></button>
          </nav>
        </div>
        <p>Which exercise are you sharing today?</p>

        {this.state.uploadOpen && <VideoUpload toggle={this.toggle} addVideo={this.props.addVideo} user={this.props.user}/>}

      </div>
    )
  }
}