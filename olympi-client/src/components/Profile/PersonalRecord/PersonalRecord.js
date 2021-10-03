import React, {Redirect} from 'react'
import "./PersonalRecord.css"
import feedService from '../../feed/feed-service'


 export default class PersonalRecord extends React.Component {

   state = {
     videos: [],
  };

   fetchVideos = () => {
     feedService.getVideos()
     .then(data => this.setState({videos: data}))
     .catch(err => this.setState({videos: []}))
   }

  

   render() {
     if (this.props.user === false) return <Redirect to="/" />

     return (
 <>

    <div className="PersonalRecordContainer">
      
     <div className="PRtitle">Personal Record

      </div>

       <div className="RecordTableContainer">
 <table>
 <thead>
 <tr>
                      <th>Exercise</th>
                    <th>Weight</th>
                    <th>Date</th>
                 </tr>
             </thead>
                  <tbody>
                    <td> Deadlift</td>
                    <td>210 kg</td>
                    <td>August 13, 2021</td>
                    <tr>
                      <td> Squat</td>
                    <td>200 kg</td>
                    <td>August 14, 2021</td>
                     </tr>
                     <tr>
                      <td> Squat</td>
                    <td>0 kg</td>
                    <td>September 13, 2021</td>
                     </tr>
                  
                 </tbody>
             </table>
        </div>
       </div>

      
         </>
         ) 
   }
 }
