import React, {useEffect, useState} from 'react'
import "./ProfileVideos.css"
import axios from "axios"
import HighlightOff from "@material-ui/icons/HighlightOff";
const baseUrl = process.env.REACT_APP_APIURL

class ProfileVideos extends React.Component {
  state = {
    video: this.props.video,
  }


  
  

  
  render() {
    return (
      <div className="ProfileVideosContainer">
 
        <div className="VideosTitle">Videos
         </div>
    
    
            <div className="VideosSection">
                        <video width="200" height="200" controls>
                        <source src="/assets/photos/videoplayback.mp4" type="video/mp4"/>
                        <source src="/assets/photos/videoplayback.mp4" type="video/ogg"/>
                      </video>
                      <video width="200" height="200" controls>
                        <source src="/assets/photos/Lya Bavoil 4 x 200 kg _ 441 lbs squat.mp4" type="video/mp4"/>
                        <source src="/assets/photos/Lya Bavoil 4 x 200 kg _ 441 lbs squat.mp4" type="video/ogg"/>
                      </video>
                      <video width="200" height="200" controls>
                        <source src="/assets/photos/Ankle Mobility.mp4" type="video/mp4"/>
                        <source src="/assets/photos/Ankle Mobility.mp4" type="video/ogg"/>
                        
                      </video>
                  
          </div>  
          </div> 
    )
      
    
  }
};

export default ProfileVideos;





///////notes/////
          
      // <article  className='Video-post'>
  
      //   <header>
      //     <>{this.state.video.creator_id.username}</>
      //   </header>



      //   {/* <Video cloudName="lorbeercloud" version="1628015224"  publicId="Olympi/test_h7xnas" >
      //   </Video> */}
      //   <div className="video-wrapper" role="button" tabIndex="0">
      //     <video muted autoPlay sequence="0" viewmode="feed" loop controls>
      //       <source src={this.state.video.videoUrl} type="video/mp4"/>
      //     </video>
      //     {/* <span className='play-btn' role='button'></span> */}
      //   </div>
        
  
        
  
      //   <footer>
      //     <>{this.state.video.exercise}</>
      //   </footer>
  
      // </article>
      //////end notes











// function ProfileVideos({user}) {  
//     const [videos, setVideos]= useState(null)
//     async function loadUserVideos(creator){
//     const dd = await axios.get(`${baseUrl}/videos/loadUserVideos?creator=${creator}`)
//      .then((response) => {
//        setVideos(response.data);
//      })
//      .catch((e) => console.log("not found", e))
//     }
//   useEffect(() => {
//     user._id && loadUserVideos(user._id)
//   }, []);
  
//  async function removeVideo(videoId)
//  {
//   const dd = await axios.delete(`${baseUrl}/videos/${videoId}`)
//   .then((response) => {
//     if(response.status == 204)
//     loadUserVideos(user._id)
//   })
//   .catch((e) => console.log("Not Deleted", e))
 
//  }
  // return ( 
  //   <div className="ProfileVideosContainer">
 
  //   <div className="VideosTitle">Videos
  //   </div>


       /* <div className="VideosSection">
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
      </div>   */

// </div>







//   )
// }

// export default ProfileVideos
