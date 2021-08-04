import React from "react";
import MoreIcon from "@material-ui/icons/More";
import "./ExploreVideos.css";

function ExploreVideos() {
  return (
    <div className="ExploreVideosContainer">
      <div className="VideoSpace">
        <div className="VideoTitle">username 10 May 2021</div>
        <img src="https://via.placeholder.com/250"></img>
        <div className="VidOptions">
          <div>
            <img src="/assets/icons/upvotefull.svg"></img>2.3k
          </div>
          <MoreIcon />
        </div>

        <div className="VideoTitle">username 10 May 2021</div>
        <img src="https://via.placeholder.com/250"></img>
        <div className="VidOptions">
          <div>
            <img src="/assets/icons/upvotefull.svg"></img>2.3k
          </div>
          <MoreIcon />
        </div>

          <div className="VideoTitle">username 10 May 2021</div>
          <img src="https://via.placeholder.com/250"></img>
          <div className="VidOptions">
            <div>
              <img src="/assets/icons/upvotefull.svg"></img>2.3k
            </div>
            <MoreIcon />
          </div>
        </div>
      </div>
    
    
  );
}

export default ExploreVideos;
