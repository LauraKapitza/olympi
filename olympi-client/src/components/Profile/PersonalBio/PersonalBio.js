import React, {useEffect, useState} from 'react'
import "./PersonalBio.css"
import SportsIcon from '@material-ui/icons/Sports';
import Modal from "react-modal"
import axios from "axios"
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
function PersonalBio({user}) {
  const [profile, setProfile] = useState({
    username:"",
    email:"",
    city:"",
    fav_exercise:"",
    about:""
  })
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
  async function fetchUser(user)
  {
    await axios.get(`${baseUrl}/auth/user?id=${user}`)
    .then((response) => {
      if(response.status == 201)
      {
      
        const data = response.data
        setProfile({
          username: data.username,
          email: data.email,
          city: data.city,
          fav_exercise: data.fav_exercise,
          about: data.about
        })
      }
    })
    .catch((e) => console.log("Not Found", e))
  }
  const handleChange = (event) => {
    const {name, value} = event.target;
    setProfile({...profile, [name]: value});
  }
  const onUpdate = async() => {
   const result = await axios.put(`${baseUrl}/auth/updateUser?id=${user._id}`, profile)
   if(result.status == 201)
   {
     setProfile(result.data)
     setIsOpen(false)
   }
  }
  useEffect(() =>{
    fetchUser(user._id)
  }, [])
  return (
    <div className="ProBioContainer">

<div className="ProBioTitle"> <span>User  Profile</span> </div>

<div className="ProeditImage" onClick={openModal}><img  src="/assets/icons/editbutton.svg" alt=""></img>Edit </div>


  <Modal
    isOpen={modalIsOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    style={customStyles}
  >
    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit profile</h2>
    {/* <button onClick={closeModal}>close</button> */}
    <div>Edit your profile info</div>
      <div>
        <p> <input type="text" name="username" onChange={handleChange} value={profile.username}  placeholder="Username" /> </p>
        <p> <input type="email" name="email" onChange={handleChange} value={profile.email} placeholder="Email" /> </p>
        <p> <input type="text" name="about" onChange={handleChange} value={profile.about}   placeholder="About" /> </p>
        <p><input type="text" name="city" onChange={handleChange} value={profile.city} placeholder="City" /> </p>
        <p><input type="text" name="fav_exercise" onChange={handleChange} value={profile.fav_exercise}  placeholder="Favorite Exercise" /></p>
        <button type={"button"} onClick={onUpdate} className={"updateButton"}>Update</button>
      </div>
  </Modal>
<img src="/assets/icons/noprofilephoto.svg" alt=""></img>
<div className="ProUsersName">{profile.username}<i><SportsIcon/></i></div>
<div className="ProUsersCity">{profile.city}</div>
<div className="ProShortBio">{profile.about}</div>
<button className="askFeedback">Ask for Feedback</button>


    </div>
  )
}

export default PersonalBio
