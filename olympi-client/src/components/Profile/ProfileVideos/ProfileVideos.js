import React from 'react'
import "./ProfileVideos.css"

class ProfileVideos extends React.Component {
  state = {
    video: this.props.video,
  }

  render() {
    return (
      <div className="ProfileVideosContainer">
 
        <div className="VideosTitle">Videos</div>
  
        <div className="VideosSection">
          <video width="200" height="200" controls>
            <source src="/assets/photos/videoplayback.mp4" type="video/mp4"/>
            <source src="/assets/photos/videoplayback.mp4" type="video/ogg"/>
          </video>
          <video width="200" height="200" controls>
            <source src="/assets/photos/Lya Bavoil 4 x 200 kg _ 441 lbs squat.mp4" type="video/mp4"/>
            <source src="/assets/photos/Lya Bavoil 4 x 200 kg _ 441 lbs squat.mp4" type="video/ogg"/>
          </video>
          <video width="200" height="200" controls>
            <source src="/assets/photos/Ankle Mobility.mp4" type="video/mp4"/>
            <source src="/assets/photos/Ankle Mobility.mp4" type="video/ogg"/>
        </video>
                  
        </div>  
      </div> 
    )
 
  }
};

export default ProfileVideos;