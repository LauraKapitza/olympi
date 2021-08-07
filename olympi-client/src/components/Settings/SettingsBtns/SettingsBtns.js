import React from 'react'
import "./SettingsBtns.css"
import { Link } from 'react-router-dom'

export default function SettingsBtns() {
  return (
    <div className="SettingsBtnsContainer">

<div className="Notifications"><img src="/assets/icons/notificationsicon.svg" alt=""></img><span>Notifications</span></div>
<div className="Analytics">     <img src="/assets/icons/analyticsbtn.svg" alt=""></img><span>See Analytics</span></div>
<Link to ="/faq"><div className="FAQs">    <img src="/assets/icons/faqbtn.svg" alt=""></img><span>FAQs</span></div></Link>
      
    </div>
  )
}
