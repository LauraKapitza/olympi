import React, {useEffect, useState, Redirect} from 'react'
import "./PersonalBio.css"
import Modal from "react-modal"
import axios from "axios"
import authService from '../../auth/auth-service'
import VideoUpload from '../UpdateProfile/UpdateProfile'



export default class PersonalBio extends React.Component {

  logout = (event) => {
    authService.logout()
      .then(response => {
        this.props.updateUser(false);
      })
    ;
  }

  handleUpload = (event) => {
    let formData = new FormData();
    formData.append('photo', event.target.files[0]);

    authService.upload(formData)
      .then(response => {
        this.props.updateUser(response);
      })
    ;
  } 


  toggle = () => {
    this.setState({uploadOpen: !this.state.uploadOpen})
  } 

  render() {
    if (this.props.user === false) return <Redirect to="/" />

    return (
<>



          <div className="PersonalBioContainer">
          <div className="BioTitle"> <span>User  Profile</span> </div>
          <div className="editImage" ><img  src="/assets/icons/editbutton.svg" alt=""></img>Edit </div>
            <img className="avatar" src={this.props.user.image || "/assets/icons/noprofilephoto.svg"} />
            <div className="UsersName">{this.props.user.username}</div>
            <div className="UsersCity">{this.props.user.city}</div>
            <div className="ShortBio">{this.props.user.about}</div>
            <form>
              <label>
                <input type="file" name="image" onChange={this.handleUpload} />
              </label>
            </form>






            </div>
         
         </>
        ) 
  }
}















// //const baseUrl = process.env.REACT_APP_APIURL
// //const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     width: "350px",
//     zIndex: 1
//   },
// };
// function PersonalBio({user}) {
//   const [profile, setProfile] = useState({
//     username:"",
//     email:"",
//     city:"",
//     fav_exercise:"",
//     about:""
//   })
//   Modal.setAppElement(document.getElementById("root"))
//   let subtitle;
//   const [modalIsOpen, setIsOpen] = useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = '#f00';
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }
//   async function fetchUser(user)
//   {
//     await axios.get(`${baseUrl}/auth/user?id=${user}`)
//     .then((response) => {
//       if(response.status == 201)
//       {
      
//         const data = response.data
//         setProfile({
//           username: data.username,
//           email: data.email,
//           city: data.city,
//           fav_exercise: data.fav_exercise,
//           about: data.about
//         })
//       }
//     })
//     .catch((e) => console.log("Not Found", e))
//   }
//   const handleChange = (event) => {
//     const {name, value} = event.target;
//     setProfile({...profile, [name]: value});
//   }
//   const onUpdate = async() => {
//    const result = await axios.put(`${baseUrl}/auth/updateUser?id=${user._id}`, profile)
//    if(result.status == 201)
//    {
//      setProfile(result.data)
//      setIsOpen(false)
//    }
//   }
//   useEffect(() =>{
//     fetchUser(user._id)
//   }, [])
//   return (
//     <div className="PersonalBioContainer">

// <div className="BioTitle"> <span>User  Profile</span> </div>

// <div className="editImage" onClick={openModal}><img  src="/assets/icons/editbutton.svg" alt=""></img>Edit </div>


//   <Modal
//     isOpen={modalIsOpen}
//     onAfterOpen={afterOpenModal}
//     onRequestClose={closeModal}
//     style={customStyles}
//   >
//     <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit profile</h2>
//     {/* <button onClick={closeModal}>close</button> */}
//     <div>Edit your profile info</div>
//       <div>
//         <p> <input type="text" name="username" onChange={handleChange} value={profile.username}  placeholder="Username" /> </p>
//         <p> <input type="email" name="email" onChange={handleChange} value={profile.email} placeholder="Email" /> </p>
//         <p> <input type="text" name="about" onChange={handleChange} value={profile.about}   placeholder="About" /> </p>
//         <p><input type="text" name="city" onChange={handleChange} value={profile.city} placeholder="City" /> </p>
//         <p><input type="text" name="fav_exercise" onChange={handleChange} value={profile.fav_exercise}  placeholder="Favorite Exercise" /></p>
//         <button type={"button"} onClick={onUpdate} className={"updateButton"}>Update</button>
//       </div>
//   </Modal>
// <img src="/assets/icons/noprofilephoto.svg" alt=""></img>
// <div className="UsersName">{profile.username}</div>
// <div className="UsersCity">{profile.city}</div>
// <div className="ShortBio">{profile.about}</div>



//     </div>
//   )
// }

// export default PersonalBio
