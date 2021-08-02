import React from 'react';
import {Link} from 'react-router-dom';
import authService from './auth-service.js';
import './auth.css';


class Signup extends React.Component {
  state = {
    professional: 0,
    username: "",
    email: "",
    password: "",
    city: "",
    fav_exercise: "",
    career_date: "",
    certifications: [],
    website: "",
    about: "",

    open: false,
    error: ""
  }


  changeProfessional = (props) => {
    this.setState({professional: props})
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // 1. Signup
    authService.signup(this.state)
      .then(() => {
        this.setState({error: ""});

        // 2. then, update with user infos
        authService.edit(this.state)
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
        <div className='signup'>
          <div className="bkg-circle">
            <Link className="back-btn" to="/"><img src="/assets/logos/OlympiLogoSVG.svg" alt='Olympi logo in red'/></Link>
          </div>

          <h1>Sign up</h1> 

          {this.state.professional === 0 && (
            <div className="signup-profile">
              <h2>Choose your profile</h2>

              {/* this.state.professional=false */}
              <button onClick={() => {this.setState({professional:false})}}>Normal User</button> 

              {/* this.state.professional=true */}
              <button  onClick={() => {this.setState({professional:true})}}>Professional</button>
            </div>
          )
          }

          
          {this.state.professional !== 0 && (
            <>
              <button className="back-btn back-to-profile" onClick={() => {this.setState({professional:0})}}>Back</button>
              <form onSubmit={this.handleSubmit} className="signup-form">

                {/* for an error */}
                {this.state.error && (
                  <p className="error">{this.state.error}</p>
                )}

                <div>

                  <p>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
                  </p>

                  <p>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
                  </p>

                  <p>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                  </p>

                  <p>
                    <input type="text" name="city" value={this.state.city} onChange={this.handleChange} placeholder="City" />
                  </p>

                  <p>
                    <input type="text" name="fav_exercise" value={this.state.fav_exercise} onChange={this.handleChange} placeholder="Favorite Exercise" />
                  </p>
                </div>

                {/* for professional user */}
                {this.state.professional === true && (
                  <div>
                    <p>
                      <label id="career-start">
                        <span>Career Start</span>
                        <input id="career-start-input" type="month" name="career_date" value={this.state.career_date} onChange={this.handleChange} />
                      </label>
                    </p>

                    <p>
                      <input type="text" name="certifications" value={this.state.certifications} onChange={this.handleChange} placeholder="Certifications" />
                    </p>

                    <p>
                      <input type="text" name="website" value={this.state.website} onChange={this.handleChange} placeholder="Website (optional)" />
                    </p>

                    <p>
                      <input type="text" name="about" value={this.state.about} onChange={this.handleChange} placeholder="About you" />
                    </p> 
                  </div>
                )}
                <p>
                  <input type="submit" value="Submit" />
                </p>
              
              </form>
              <p className="switch-form-btn">If you already have an account, you can login from <Link to="/login">here</Link>.</p>
            </>

          )}
        </div>
    );
  }
};

export default Signup;