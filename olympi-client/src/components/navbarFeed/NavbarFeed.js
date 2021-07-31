import React from "react";
import "./navbarFeed.css";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';




export default function NavbarFeed() {



  return (
    <div className="navbarFeedContainer">
      <div className="navbarFeedLeft">
      <img src="/assets/logos/OlympiLogoSVG.svg" alt="" className="logo"/>         
        <div className="NavbarLinks">
        <span className="NavbarLink">How it works</span>
        <span className="NavbarLink"> Features</span>
      </div>
      </div>

      <div className="navbarFeedCenter">
      <div className="addIcon"><AddBoxRoundedIcon style={{ fontSize: 55 }} /></div>
      </div>


      <div className="navbarFeedRight">
        

        <div className="NavbarIcons">
        <div className="NavbarIcon">
        <NotificationsRoundedIcon/>
        <span className="Iconbadge">1</span></div>

        <div className="NavbarIcon"><img src="/assets/icons/dumbell(1).svg" alt=""/></div>
        <div className="NavbarIcon">
        <SearchRoundedIcon/>
        </div>
        <div className="NavbarIcon">
        <AccountCircleRoundedIcon/>
        </div>
        </div>
      </div>
    </div>
  );
}
