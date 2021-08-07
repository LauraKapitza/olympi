import React from 'react';
import './Feed.css';

import feedService from './feed-service.js';
import FeedHeader from './FeedHeader.js';
import FeedFooter from './FeedFooter.js';
import VideoPost from './VideoPost/VideoPost.js';


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
  }

  addVideo = (video) => {
    this.setState(prevState => ({
      videos: [...prevState.videos, video]
    }))
    console.log("state feed", this.state)
  }
  
  render() {
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