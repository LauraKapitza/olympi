import React from 'react';
import './Feed.css';

import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

function FunctionFooter(props) {
  
  return(
    <div className="ExploreBottomNavBarContainer">
      
      <div className="ExploreExploreNavButton"> 
      <SearchRoundedIcon/>
      <span>Explore</span>
      </div>

      <div className="ExploreFeedNavButton"> 
      <img src="/assets/icons/greydumbell.svg" alt="Dumbell icon"></img>
      <span>Feed</span>
      </div>

      <div className="ExploreProfileNavButton"> 
      <img src="/assets/icons/greyuser.svg" alt="User icon"></img>
      <span>Profile</span>
      </div>

    </div>
  )
};

export default FunctionFooter;