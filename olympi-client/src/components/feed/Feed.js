import React from 'react';
import './Feed.css';

import feedService from './feed-service.js';
import FeedHeader from './FeedHeader.js';
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
  }
  
  render() {
    return(
      <div>
        <FeedHeader />

        {this.state.videos.map((video, index) => (
          <li key={video._id}>
            <VideoPost video={video}/>
          </li>
        ))}
      </div>
    )
  }
};

export default Feed;