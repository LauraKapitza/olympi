import React from 'react';
import './Feed.css';

import feedService from './feed-service.js';
import FeedHeader from './FeedHeader.js';
import FeedFooter from './FeedFooter.js';
import VideoPost from './Videopost/VideoPost.js';


class Feed extends React.Component {
  state = {
    videos: [],
    professionals: []
  };

  fetchVideos = () => {
    feedService.getVideos()
    .then(data => this.setState({videos: data}))
    .catch(err => this.setState({videos: []}))
  }

  fetchProfessionals() {
    feedService.getProfessionals()
    .then(data => this.setState({professionals: data}))
    .catch(err => this.setState({professionals: []}))
  }

  componentDidMount() {
    this.fetchVideos();
    this.fetchProfessionals()
  }

  addVideo = (video) => {
    let currentState = [...this.state.videos];
    currentState = [video, ...currentState];
    this.setState({videos: currentState})
    //TODO FIX ME (to see the new video the page needs to be reloaded ... not user friendly)
    console.log("state feed", this.state)
    this.forceUpdate();
  }
  
  render() {
    return(
      <div className="Feed">
        <FeedHeader updateUser={this.props.updateUser} user={this.props.user} addVideo={this.addVideo} />
        
        <div className="Feed-list-container">
          {this.state.videos.map((video, index) => (
              <VideoPost key={index} video={video} professionals={this.state.professionals}/>
          ))}
        </div>

        <FeedFooter user={this.props.user} />
      </div>
    )
  }
};

export default Feed;