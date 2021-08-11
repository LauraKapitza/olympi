import React from 'react';
import './VideoPost.css';

import help_icon from '../../../assets/icons/help-professional-button.svg';
import Tags from './Tags.js';
import Comments from './Comments.js';
import AskProfessional from './AskProfessional';

class VideoPost extends React.Component {
  state = {
    video: this.props.video,
    askOpen: false
  }

  toggle = () => {
    this.setState({askOpen: !this.state.askOpen})
  }

  addTags = (tags) => {
    let currentVideoState = this.state.video;

    tags.forEach((tag, index) => {
      currentVideoState.tags[tag].push(this.props.user._id)
    })

    this.setState({videos: currentVideoState})
  }
  
  addQuestion = (question) => {
    let currentVideoState = this.state.video;
    currentVideoState.comments.push(question)
    this.setState({videos: currentVideoState})
  }

  addReply = (updatedComment) => {
    let currentVideoState = {...this.state.video};
    currentVideoState.comments.map((comment, index) => {
      if (comment._id === updatedComment._id){
        currentVideoState.comments[index] = updatedComment;
        return;
      }
    })
    this.setState({videos: currentVideoState})
  }
  
  render() {
    console.log(this.state.video)
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
          {this.state.askOpen && <AskProfessional professionals={this.props.professionals} video={this.state.video} addQuestion={this.addQuestion} toggle={this.toggle} />}
          <button className="ask-button" onClick={this.toggle}>
            <span>Ask a professional</span>
            <img src={help_icon} alt="Ask a professional"></img>
          </button>
        </div>
  
        
  
        <footer>
          <h4>{this.state.video.exercise}</h4>
          <p className="video-description">{this.state.video.description}</p>

          <Comments comments={this.state.video.comments} user={this.props.user} addReply={this.addReply} />

          <Tags tags={this.state.video.tags} exercise={this.state.video.exercise} video_id={this.state.video._id} addTags={this.addTags} user={this.props.user} />
        </footer>
  
      </article>
    )
  }
};

export default VideoPost;