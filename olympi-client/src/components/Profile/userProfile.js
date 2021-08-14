import React from 'react'
import BottomNavBar from '../feed/FeedFooter.js'
import PersonalBio from './PersonalBio/PersonalBio'
import PersonalRecord from './PersonalRecord/PersonalRecord'
import ProfileVideos from './ProfileVideos/ProfileVideos'
import SettingsBar from './SettingsBar/SettingsBar'
import "./userProfile.css"
import feedService from '../feed/feed-service.js'
import VideoPost from '../feed/Videopost/VideoPost.js'

// function UserProfile({user}) {
//   return (
//     <div>
//       <PersonalBio user={user}/>
//       <PersonalRecord user={user} />
//       <ProfileVideos user={user}/>
//       <SettingsBar user={user}/>
//       <BottomNavBar activate="profile"/>
//     </div>
//   )
// }

// export default UserProfile



class UserProfile extends React.Component {
  state = {
    videos: [],
  };

  fetchVideos = () => {
    feedService.getVideos()
    .then(data => this.setState({videos: data}))
    .catch(err => this.setState({videos: []}))
  }

  
  componentDidMount() {
    this.fetchVideos();
  }

  render() {
    return(
      <>

<div>
      <PersonalBio updateUser={this.props.updateUser} user={this.props.user}/>
      <PersonalRecord user={this.props.user} />
      <ProfileVideos  professionals={this.state.professionals} user={this.props.user}/>
      <SettingsBar user={this.props.user}/>
      <BottomNavBar user={this.props.user} activate="profile"/>
    </div>
      
      </>
    )
  }
};

export default UserProfile;