import React from 'react';
import './VideoPost.css';

import help_icon from './../icons/help-professional-button.svg';
import Tags from './Tags.js';
import Comments from './Comments.js';

class VideoPost extends React.Component {
  state = {
    video: this.props.video,
  }
  
  render() {
    console.log('VideoPost state', this.state)
    return(
      <article  className='Video-post'>
  
        <header>
          <h3>{this.state.video.creator_id.username}</h3>
          <p className="video-details">{this.state.video.weight}{this.state.video.weight_metric}, {this.state.video.reps} reps, {this.state.video.rounds} rounds</p>
        </header>


        {/* <Video cloudName="lorbeercloud" version="1628015224"  publicId="Olympi/test_h7xnas" >
        </Video> */}
        <div className="video-wrapper" role="button" tabIndex="0">
          <video muted autoPlay sequence="0" viewmode="feed" loop controls>
            <source src={this.state.video.videoUrl} type="video/mp4"/>
          </video>
          {/* <span className='play-btn' role='button'></span> */}
        </div>
        <div className="ask-professional">
          <p>Ask a professional</p><img src={help_icon} alt="Ask a professional"></img>
        </div>
  
        
  
        <footer>
          <h4>{this.state.video.exercise}</h4>
          <p className="video-description">{this.state.video.description}</p>

          <Comments comments={this.state.video.comments} />

          <Tags tags={this.state.video.tags} exercise={this.state.video.exercise} video_id={this.state.video._id} />
        </footer>
  
      </article>
    )
  }
};

export default VideoPost;