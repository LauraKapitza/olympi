import React from 'react';
// import {Video, CloudinaryContext, Transformation} from 'cloudinary-react';
import './../Feed.css';

class VideoPost extends React.Component {
state = {
  video: this.props.video,
  publicId: ""
}
  
  render() {
    console.log('VideoPost state', this.state)
    return(
      <article className='Video-post'>
  
        <header>
          <h3>{this.state.video.creator_id.username}</h3>
          <p>{this.state.video.weight}{this.state.video.weight_metric}, {this.state.video.reps} reps, {this.state.video.rounds} rounds</p>
          <p>Placeholder for a professional</p>
        </header>

        {/* <Video cloudName="lorbeercloud" version="1628015224"  publicId="Olympi/test_h7xnas" >
        </Video> */}
        <div classname="play-btn" role="button" tabIndex="0">
          <video muted autoPlay sequence="0" viewmode="feed" loop controls>
            <source src={this.state.video.videoUrl} type="video/mp4"/>
          </video>
          {/* <span className='play-btn' role='button'></span> */}
        </div>
  
        
  
        <footer>
          <h4>{this.state.video.exercise}</h4>
          <p>{this.state.video.description}</p>
        </footer>
  
      </article>
    )
  }
};

export default VideoPost;