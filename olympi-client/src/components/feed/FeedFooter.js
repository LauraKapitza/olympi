import {Link} from 'react-router-dom';
import React from 'react';
import './Feed.css';

function FunctionFooter(props) {
  return(
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
};

export default FunctionFooter;