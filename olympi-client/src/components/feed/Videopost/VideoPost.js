import React from 'react';
import './../Feed.css';

function VideoPost(props) {
  return(
    <article className='video-post'>

      <header>
        <h3>{props.creator_id}</h3>
        <p>{props.weight}{props.weight_metric}, {props.reps} reps, {props.rounds} rounds</p>
        <p>Placeholder for Clement aka Ask a professional</p>
      </header>

      <video poster={`${props.videoUrl}`}>
        <source src={`${props.videoUrl}`} type="video/webm"/>
        <source src={`${props.videoUrl}`} type="video/mp4"/>
        <source src={`${props.videoUrl}`} type="video/ogg"/>
      </video>

      <footer>
        <h4>{props.exercise}</h4>
        <p>{props.description}</p>
      </footer>

    </article>
  )
};

export default VideoPost;