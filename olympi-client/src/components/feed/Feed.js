import React from 'react';
import './Feed.css';

import feedService from './feed-service.js';
import FeedHeader from './FeedHeader.js';
import FeedFooter from './FeedFooter.js';
import VideoPost from './Videopost/VideoPost.js';


class Feed extends React.Component {
  state = {
    videos: []
  };

  fetchVideos = () => {
    feedService.getVideos()
    .then(data => this.setState({videos: data}))
    .catch(err => this.setState({videos: []}))
  }

  componentDidMount() {
    this.fetchVideos();
    console.log("okkk")
  }

  addVideo = (video) => {
    let currentState = [...this.state.videos];
    currentState = [video, ...currentState];
    this.setState({videos: currentState})
    console.log("state feed", this.state)
    this.forceUpdate();
  }
  
  render() {
    console.log("render is run")
    return(
      <div className="Feed">
        <FeedHeader updateUser={this.props.updateUser} user={this.props.user} addVideo={this.addVideo} />
        
        <div className="Feed-list-container">
          {this.state.videos.map((video, index) => (
              <VideoPost key={index} video={video}/>
          ))}
        </div>

        <FeedFooter user={this.props.user} />
      </div>
    )
  }
};

export default Feed;