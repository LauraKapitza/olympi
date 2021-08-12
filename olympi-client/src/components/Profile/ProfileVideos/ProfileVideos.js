import React, {useEffect, useState} from 'react'
import "./ProfileVideos.css"
import axios from "axios"
import HighlightOff from "@material-ui/icons/HighlightOff";
const baseUrl = process.env.REACT_APP_APIURL

function ProfileVideos({user}) {  
    const [videos, setVideos]= useState(null)
    async function loadUserVideos(creator){
    const dd = await axios.get(`${baseUrl}/videos/loadUserVideos?creator=${creator}`)
     .then((response) => {
       setVideos(response.data);
     })
     .catch((e) => console.log("not found", e))
    }
  useEffect(() => {
    user._id && loadUserVideos(user._id)
  }, []);
  
 async function removeVideo(videoId)
 {
  const dd = await axios.delete(`${baseUrl}/videos/${videoId}`)
  .then((response) => {
    if(response.status == 204)
    loadUserVideos(user._id)
  })
  .catch((e) => console.log("Not Deleted", e))
 
 }
  return ( 
    <div className="ProfileVideosContainer">

    <div className="VideosTitle">Videos
    {/* <div className="EditPr">Edit<img src="/assets/icons/editbutton.svg" alt=""></img></div> */}
    </div>


      <div className="VideosSection">
            <div className={"videoContainer"}>
                {videos && videos.map((video, index) => {
                return <div className={"video"} key={index}>
                    <span className={"deleteVideoButton"}><HighlightOff  onClick={() => removeVideo(video._id)} className={"sdf"} /> </span>  

                    <video width="200" height="200" controls>
                    <source src={video.videoUrl} type="video/mp4"/>
                    <source src={video.videoUrl} type="video/ogg"/>
                    Your browser does not support the video tag.
                  </video>
                </div>
              })}
      </div>
      </div>

</div>







  )
}

export default ProfileVideos
