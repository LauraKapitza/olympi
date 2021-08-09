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
    .then(data => {
      this.setState({professionals: data})
      console.log("We got prof")
    })
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
  }
  
  render() {
    return(
      <>
      <div className="Feed">
        <FeedHeader updateUser={this.props.updateUser} user={this.props.user} addVideo={this.addVideo} />
        
        <div className="Feed-list-container">
          {this.state.videos.map((video) => (
              <VideoPost key={video._id} video={video} professionals={this.state.professionals}/>
          ))}
        </div>
      </div>
      <FeedFooter user={this.props.user} activate="feed"/>
      </>
    )
  }
};

export default Feed;