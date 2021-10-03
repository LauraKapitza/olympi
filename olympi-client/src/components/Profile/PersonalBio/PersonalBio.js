import React, {Redirect} from 'react'
import "./PersonalBio.css"
import authService from '../../auth/auth-service'
export default class PersonalBio extends React.Component {

  logout = (event) => {
    authService.logout()
      .then(response => {
        this.props.updateUser(false);
      })
    ;
  }

  handleUpload = (event) => {
    let formData = new FormData();
    formData.append('photo', event.target.files[0]);

    authService.upload(formData)
      .then(response => {
        this.props.updateUser(response);
      })
    ;
  } 


  toggle = () => {
    this.setState({uploadOpen: !this.state.uploadOpen})
  } 

  render() {
    if (this.props.user === false) return <Redirect to="/" />

    return (
    <>
      <div className="PersonalBioContainer">
        <div className="BioTitle"> <span>  Profile</span> </div>
      
        <img className="avatar" src={this.props.user.image || "/assets/photos/lyaphoto.jpeg"} alt="" />
        <div className="UsersName">{this.props.user.username}</div>
        <div className="UsersCity">{this.props.user.city}</div>
        <div className="ShortBio">{this.props.user.about}</div>
        
      </div>  
    </>
    ) 
  }
}