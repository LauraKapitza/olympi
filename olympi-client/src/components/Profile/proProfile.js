import React from 'react'
import BottomNavBar from '../feed/FeedFooter.js'
import ProfessionalBio from './ProfessionalBio/ProfessionalBio'
import ProfileVideos from './ProfileVideos/ProfileVideos'
import "./proProfile.css"
import SettingsBar from './SettingsBar/SettingsBar'

export default function ProProfile( {user}){
  return (
    <div>
    <ProfessionalBio user={user}/>
      {/* <PersonalRecord user={user}/> */}
      <ProfileVideos user={user}/>
      <SettingsBar/>
      <BottomNavBar activate="profile"/>

    </div>
  )
}


