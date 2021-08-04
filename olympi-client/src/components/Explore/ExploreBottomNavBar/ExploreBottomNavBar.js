import "./ExploreBottomNavBar.css"
import React from 'react'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';


function ExploreBottomNavBar() {
  return (
    <div className="ExploreBottomNavBarContainer">
      
<div className="ExploreExploreNavButton"> 
<SearchRoundedIcon/>
<span>Explore</span>
</div>

<div className="ExploreFeedNavButton"> 
<img src="/assets/icons/greydumbell.svg"></img>
<span>Feed</span>
</div>

<div className="ExploreProfileNavButton"> 
<img src="/assets/icons/greyuser.svg"></img>
<span>Profile</span>
</div>






    </div>
  )
}

export default ExploreBottomNavBar

