import "./BottomNavBar.css"
import React from 'react'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import {Link} from "react-router-dom"

function BottomNavBar() {
  return (
    <div className="BottomNavBarContainer">
      
<div className="ExploreNavButton">
 <Link to ="/videos/explore">
<SearchRoundedIcon/></Link>
<span>Explore</span> 
</div>

<div className="FeedNavButton"> 
<Link to ="/videos"> <img src="/assets/icons/greydumbell.svg" alt=""></img></Link>
<span>Feed</span>
</div>

<div className="ProfileNavButton"> 
<img src="/assets/icons/user(27).svg" alt=""></img>
<span>Profile</span>
</div>






    </div>
  )
}

export default BottomNavBar

