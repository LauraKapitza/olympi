import React from 'react';

import {Link} from 'react-router-dom';

import authService from './auth-service.js';

export default class extends React.Component {
  state = {
    professional: false,
    username: "",
    email: "",
    password: "",
    city: "",
    fav_exercise: "",
    career_date: "",
    certifications: [],
    website: "",
    about: "",

    error: ""
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // 1. Signup
    authService.signup(
      this.state.username,
      this.state.email, 
      this.state.password,
      this.state.city,
      this.state.fav_exercise,
      this.state.career_date,
      this.state.certifications,
      this.state.website,
      this.state.about)
      .then(() => {
        this.setState({error: ""});

        // 2. then, update with user infos
        authService.edit(
          this.state.username,
          this.state.email, 
          this.state.password,
          this.state.city,
          this.state.fav_exercise,
          this.state.career_date,
          this.state.certifications,
          this.state.website,
          this.state.about)
          .then(response => {
            this.setState({error: ""});
            
            this.props.updateUser(response);
            this.props.history.push('/');
          })
          .catch(err => this.setState({error: err.response.data.message}))
      })
      .catch(err => this.setState({error: err.response.data.message}))
    ;
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  } 

  render() {
    return (
        <>
          <h1>Sign up</h1>
          
          <form onSubmit={this.handleSubmit}>

            {this.state.error && (
              <p className="error">{this.state.error}</p>
            )}

            <p>
              <label>
                <em>Username</em>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
              </label>
            </p>

            <p>
              <label>
                <em>Email</em>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
              </label>
            </p>

            <p>
              <label>
                <em>Password</em>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
              </label>
            </p>

            <p>
              <label>
                <em>City</em>
                <input type="text" name="city" value={this.state.city} onChange={this.handleChange} />
              </label>
            </p>

            <p>
              <label>
                <em>Favorite Exercise</em>
                <input type="text" name="fav_exercise" value={this.state.fav_exercise} onChange={this.handleChange} />
              </label>
            </p>

          </form>

          <p>
            <small>If you already have an account, you can login from <Link to="/login">here</Link></small>
          </p>

        </>
    );
  }
}