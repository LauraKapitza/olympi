import {Link, Redirect} from 'react-router-dom';
import authService from '../auth/auth-service.js';
import React from 'react';
import './Feed.css';

export default class FeedHeader extends React.Component {
  logout = (event) => {
    authService.logout()
      .then(response => {
        this.props.updateUser(false);
      })
    ;
  }

  // handleUpload = (event) => {
  //   let formData = new FormData();
  //   formData.append('photo', event.target.files[0]);

  //   authService.upload(formData)
  //     .then(response => {
  //       this.props.updateUser(response);
  //     })
  //   ;
  // } 

  render() {
    if (this.props.user === false) return <Redirect to="/" />
    return(
      <div className="Feed-header">
      <header>
        <h2>Hi <span>{props.user.username}</span>!</h2>
        <p>Which exercise are you sharing today?</p>
      </header>

      <nav>
        
        <div className="">
              <button className="" onClick={this.logout}>Logout</button>
        </div>
      </nav>

      </div>
    )
  }
}