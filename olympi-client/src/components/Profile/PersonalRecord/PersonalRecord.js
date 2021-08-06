import React from 'react'
import "./PersonalRecord.css"

function PersonalRecord() {
  return (
    <div className="PersonalRecordContainer">
      
      <div className="PRtitle">Personal Record

      <div className="EditPr">Edit<img src="/assets/icons/editbutton.svg" alt=""></img>

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
                    <tr>
                        <td> Squat</td>
                        <td> 50 kg</td>
                        <td> 10 May 2021</td>
                        
                    </tr>

                    <tr>
                        <td> Deadlift </td>
                        <td> 50 kg</td>
                        <td> 10 May 2021</td>
                        
                    </tr>

                    
                   
                    <tr>
                        <td> Bench Press </td>
                        <td> 50 kg</td>
                        <td> 10 May 2021</td>
                        </tr>
                    

                    <tr>
                        <td> Overhead Press </td>
                        <td> 50 kg</td>
                        <td> 10 May 2021</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>

        

      </div>


    
  )
}

export default PersonalRecord
