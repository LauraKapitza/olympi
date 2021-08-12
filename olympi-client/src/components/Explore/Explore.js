import React, { useState } from 'react';
import moment from 'moment';
import ExploreBottomNavBar from './ExploreBottomNavBar/ExploreBottomNavBar'
import Filters from './Filters/Filters'
import SearchBar from './SearchBar/SearchBar';

import MoreIcon from "@material-ui/icons/More";
import feedService from '../feed/feed-service.js';
import './Explore.css';

class Explore extends React.Component {
  
  state = {
    videos: false,
    categorySelected: 'trending',
    changeSortBy: 'desc',
  }

  fetchVideos(category = this.state.categorySelected) {
    feedService.getExploreVideos(category)
    .then(data => {
      console.log('front', data)
      this.setState({videos: data})
    })
    .catch(err => this.setState({videos: false}))
  }

  // useEffect(() => {
  //   loadVideos()
  // }, [category, sortBy]);

  updateVotes(video) {
    feedService.updateVotes(video)
      .then(data => {
        console.log('voted video', data)
        const updatedVideos = this.state.videos.map((video) => {
          if (video._id === data._id) {
            return data
          }
          return video
        })
        this.setState({videos: updatedVideos})
      })
      .catch((e) => console.log("error", e))
  }

  componentDidMount() {
    this.fetchVideos()
  }

  render() {
    return (
      <div>
        
        <div className="PagesContainer">
          <div className={`Fails ${this.state.categorySelected === 'fails' ? 'selected-tab' : 'tab-border'}`} onClick={() => this.fetchVideos('fail')}>Fails</div>
          <div className={`Trending ${this.state.categorySelected === 'trending' ? 'selected-tab' : 'tab-border'}`} onClick={() => this.fetchVideos("trending")}>Trending</div>
          <div className={`Learn ${this.state.categorySelected === 'learn' ? 'selected-tab' : 'tab-border'}`} onClick={() => this.fetchVideos("learn")}>Learn</div>
        </div>

        <Filters changeSortBy={this.state.changeSortBy} />
        {/* <ExploreVideos category={tab} sortBy={sortBy} /> better to do the map here */}
        <ExploreBottomNavBar />


        <div className="ExploreVideosContainer">
        <div className="VideoSpace">
          {this.state.videos && this.state.videos.map((video, index) => {
            const { creator_id: creator } = video
            return (
              <div key={video._id}>
                <div className="VideoTitle">{creator.username} {moment(video.createdAt).format('LLL')}</div>
                <video width="320" height="240" controls>
                  <source src={video.videoUrl} type="video/mp4" />
                  <source src={video.videoUrl} type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
                <div className="VidOptions">
                  <div onClick={() => this.updateVotes(video)}>
                    <img src="/assets/icons/upvotefull.svg" alt="upvote" />{video.votes ? video.votes : 0}
                  </div>
                  <MoreIcon />
                </div>
              </div>
            )
          })}
        </div>

        <ExploreBottomNavBar />

      </div>


      </div>
    )
  }
}

export default Explore;
