import React from 'react';
import {Link} from 'react-router-dom';
import authService from './auth-service.js';
import './auth.css';

class Login extends React.Component {
  state = {
    email: "",
    password: "",

    error: ""
  }

  handleSubmit = (event) => {
    event.preventDefault();

    authService.login(this.state.email, this.state.password)
      .then(response => {
        this.setState({error: ""});
        this.props.updateUser(response);
        this.props.history.push('/');
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
        <div className='login'>
          <div className="bkg-circle">
            <Link className="back-btn" to="/"><img src="/assets/logos/OlympiLogoSVG.svg" alt='Olympi logo in red'/></Link> 
          </div>
          <h1>Log in</h1>
          
          <form onSubmit={this.handleSubmit}>

            {this.state.error && (
              <p className="error">{this.state.error}</p>
            )}

            <p>
              <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
            </p>

            <p>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
            </p>

            <p>
              <input type="submit" value="Log in" />
            </p>

          </form>

          <p className="switch-form-btn">
            If you don't have an account yet, you can create your account <Link to="/signup">here</Link>.
          </p>
        </div>
    );
  }
}

export default Login;