import React from 'react';
import './FeedFooter.css';

import {Link} from 'react-router-dom';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import UserIcon from '@material-ui/icons/Person';
import {ReactComponent as Dumbell} from './../feed/icons/greydumbell.svg';

function FunctionFooter(props) {
  
  return(
    <div className="footer-navigation">
      
      <div className={`footer-link ${props.activate === "explore" ? "active" : ""}`}> 
        <SearchRoundedIcon/>
        <Link to="/videos/explore">Explore</Link>
      </div>

      <div className={`footer-link ${props.activate === "feed" ? "active" : ""}`}> 
        <Dumbell/>
        <Link to='/videos'>Feed</Link>
      </div>

      <div className={`footer-link profile ${props.activate === "profile" ? "active" : ""}`}> 
      <UserIcon/>
        <Link to='/user'>Profile</Link>
      </div>

    </div>
  )
};

export default FunctionFooter;