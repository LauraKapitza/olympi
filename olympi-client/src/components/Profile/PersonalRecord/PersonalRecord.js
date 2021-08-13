import React, {useState, useEffect} from 'react'
import "./PersonalRecord.css"
import Modal from "react-modal"
import axios from "axios"
import moment from "moment" 



const baseUrl = process.env.REACT_APP_APIURL
function PersonalRecord({user}) {
  const [records, setRecords]= useState(null)
  async function loadRecords(creator){
  const dd = await axios.get(`${baseUrl}/videos/loadUserVideos?creator=${creator}`)
   .then((response) => {
    setRecords(response.data);
   })
   .catch((e) => console.log("not found", e))
  }
useEffect(() => {
  user._id && loadRecords(user._id)
  console.log("rcord", records)
}, []);


    Modal.setAppElement(document.getElementById("root"))
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
  

    const EXERCISES = [
        'Overhead press',
        'Deadlift',
        'Squat',
        'Bench press'
      ]
      

  return (
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
                  {records && records.map((record, index) => {
                    return <tr key={index}>
                    <td> {record.exercise}</td>
                    <td>{`${record.weight} ${record.weight_metric}`}</td>
                    <td>{moment(record.createdAt).format("LL")}</td>
                    </tr>
                  })}
                    
                </tbody>
            </table>
        </div>

    

      </div>


    
  )
}

export default PersonalRecord
