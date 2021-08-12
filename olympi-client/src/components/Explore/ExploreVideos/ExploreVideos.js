import MoreIcon from "@material-ui/icons/More";
import moment from 'moment';
import React, { useEffect, useState } from "react";
import "./ExploreVideos.css";
import axios from "axios"
import feedService from "../../feed/feed-service.js";

function ExploreVideos({ category, sortBy }) {
  const [videos, setVideos] = useState(null)
  const loadVideos = async () => {
    const { data } = await feedService.getExploreVideos();
     
    console.log ('data', data);

    setVideos(data);
  }
  useEffect(() => {
    loadVideos()
  }, [category, sortBy]);

  const updateVotes = (video) => {
    axios.post(`http://localhost:5000/videos/${video._id}/upvote`, {
      votes: video.votes ? video.votes + 1 : 1,
    })
      .then(({ data }) => {
        const updatedVideos = videos.map((video) => {
          if (video._id === data._id) {
            return data
          }
          return video
        }
        )
        setVideos(updatedVideos)
      })
      .catch((e) => console.log("error", e))
  }

  return (
    <div className="ExploreVideosContainer">
      {
        console.log("videos", videos)

      }
      <div className="VideoSpace">
        {videos && videos.map((video, index) => {
          const { creator_id: creator } = video
          return (
            <div key={index}>
              <div className="VideoTitle">{creator.username} {moment(video.createdAt).format('LLL')}</div>
              <video width="320" height="240" controls>
                <source src={video.videoUrl} type="video/mp4" />
                <source src={video.videoUrl} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              <div className="VidOptions">
                <div onClick={() => updateVotes(video)}>
                  <img src="/assets/icons/upvotefull.svg" alt="upvote" />{video.votes ? video.votes : 0}
                </div>
                <MoreIcon />
              </div>
            </div>
          )
        })}
      </div>
    </div>


  );
}

export default ExploreVideos;