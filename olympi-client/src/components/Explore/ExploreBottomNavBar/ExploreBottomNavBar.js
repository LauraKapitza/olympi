import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import React from 'react';
import { useHistory } from 'react-router-dom'
import "./ExploreBottomNavBar.css";


function ExploreBottomNavBar() {
  const history = useHistory()
  return (
    <div className="ExploreBottomNavBarContainer">
      <div className="ExploreExploreNavButton" onClick={() => history.push('/explore')}>
        <SearchRoundedIcon />
        <span>Explore</span>
      </div>
      <div className="ExploreFeedNavButton" onClick={() => history.push('/videos')}>
        <img src="/assets/icons/greydumbell.svg" alt=""></img>
        <span>Feed</span>
      </div>
      <div className="ExploreProfileNavButton" onClick={() => history.push('/user')}>
        <img src="/assets/icons/greyuser.svg" alt=""></img>
        <span>Profile</span>
      </div>
    </div>
  )
}

export default ExploreBottomNavBar

