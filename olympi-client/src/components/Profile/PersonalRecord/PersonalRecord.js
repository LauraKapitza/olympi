import React, {useState, useEffect} from 'react'
import "./PersonalRecord.css"
import Modal from "react-modal"
import axios from "axios"
import moment from "moment" 
const baseUrl = process.env.REACT_APP_APIURL
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: "350px",
    zIndex: 1
  },
};
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
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
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

      <div className="EditPr" onClick={openModal}>Edit<img  src="/assets/icons/editbutton.svg" alt=""></img>

      </div></div>

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

    <Modal
    isOpen={modalIsOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    style={customStyles}
  >
    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Personal Record</h2>
    {/* <button onClick={closeModal}>close</button> */}
    {/* <div>Edit your profile info</div> */}
      <div>
      <p className="form-select form-select--big">
              <label>
                Exercise
                <select name="exercise" value={EXERCISES[0]}>
                  <option value=""></option>
                  {EXERCISES.map((exercise) => (
                    <option key={exercise} value={exercise}>{exercise}</option>
                  ))}
                </select>
              </label>
            </p>
            <p><label>
                Weight
                <input type="text" name="weight"  placeholder="Weight" /> 
            </label></p>
            <p><label>
                Date
                <input type="date" name="date"  placeholder="Date" /> 
            </label></p>
        <button type={"button"} className={"updateButton"}>Update</button>
      </div>
  </Modal>

      </div>


    
  )
}

export default PersonalRecord
