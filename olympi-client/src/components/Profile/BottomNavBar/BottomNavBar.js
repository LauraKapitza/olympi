import "./BottomNavBar.css"
import React from 'react'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';


function BottomNavBar() {
  return (
    <div className="BottomNavBarContainer">
      
<div className="ExploreNavButton"> 
<SearchRoundedIcon/>
<span>Explore</span>
</div>

<div className="FeedNavButton"> 
<img src="/assets/icons/greydumbell.svg" alt=""></img>
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

