import React from 'react';
import './VideoUpload.css';
import feedService from '../feed-service.js';
import upload_icon from '../../../assets/icons/upload-button.svg';
import close_button from '../../../assets/icons/close-button.svg';

const EXERCISES = [
  'Overhead press',
  'Deadlift',
  'Squat',
  'Bench press'
]

const UPLOAD_VIDEO_MAX_SIZE = 20; // Mib
class VideoUpload extends React.Component {

  constructor(props) {
    super(props);
    this.uploadInputRef = React.createRef();
  }

  state = {
    open: false,
    error: "",
    exercise: EXERCISES[0], //default value
    weight: "",
    weight_metric: "kg", //default value
    rounds: "",
    reps: "",
    category: "trending", //default value
    description: "",
    file: null,
    isUploading: false
  }




  handleSubmit = (event) => {
    event.preventDefault();

    if( this.state.isUploading === true){
      return;
    }

    this.setState({isUploading: true});

    // we need a formData to send the file (your backend needs this format)
    // so we created an empty one and file it up with the value of the state
    //send we send that to the feedService with axios

    const data = new FormData()
    for (let key in this.state) {
      data.append(key,this.state[key])
    }

    feedService.uploadVideo(data)
    .then((newVideo) => {
      this.setState({error: "", file: null, description: "", reps: "", rounds: "", weight: ""});
      
      // call the addVideo from parent to add the video to the feed
      this.props.addVideo(newVideo);

      // close the upload form (method from parent)
      this.props.toggle();
    })
  ;
  }

  triggerUploadFileInput = (event) => {
    event.preventDefault();
    this.uploadInputRef.current.click();
  }

  videoSizeValidation = (video) => {
    const fileSize = video.size / 1024 / 1024; // in MiB
    // return true if the the size is under our set limit, else false
    return fileSize <= UPLOAD_VIDEO_MAX_SIZE
  }

  handleChange = (event) => {
    let {name, value} = event.target;
    if(name === "file"){
        value = event.target.files[0]

        if(!this.videoSizeValidation(value)){
          // empty file input and display error?
          console.log("file is too big!")
        }
        console.log(value)
    }
    this.setState({[name]: value});
  } 

  render() {
    console.log(this.props.user)
    return (
      <div className="Video-upload">
        <a onClick={this.props.toggle}><img src={close_button} alt="Close upload form"></img></a>
        <h2>Upload</h2>

        <form id="uploadForm" onSubmit={this.handleSubmit} className="upload-form">

          {/* for an error */}
          {this.state.error && (
            <p className="error">{this.state.error}</p>
          )}

          <div>

            <p>
              <button className="upload-pretty" onClick={this.triggerUploadFileInput}>
                <img src={upload_icon} alt="Upload Video"></img>
                <p>Upload Video</p>
                {this.state.file && (
                  <p className="upload-file-name">File to be uploaded: {this.state.file.name}</p>
                )}
              </button>
              
              <input ref={this.uploadInputRef} type="file" name="file" onChange={this.handleChange}/>
            </p>
            


            <p className="form-select form-select--big">
              <label>
                Exercise
                <select name="exercise" value={this.state.exercise} onChange={this.handleChange}>
                  <option value=""></option>
                  {EXERCISES.map((exercise) => (
                    <option key={exercise} value={exercise}>{exercise}</option>
                  ))}
                </select>
              </label>
            </p>

            
            <div className="form-input-row">
              <div className="form-input-weight-container">
                <p>
                  <input type="number" name="weight" value={this.state.weight} onChange={this.handleChange} placeholder="Weight" />
                </p>
                <p className="form-select">
                  <select name="weight_metric" value={this.state.weight_metric} onChange={this.handleChange}>
                      <option value="kg">kg</option>
                      <option value="lb">lb</option>
                    </select>
                </p>
              </div>
              <p>
                <input type="number" name="rounds" value={this.state.rounds} onChange={this.handleChange} placeholder="Sets" />
              </p>

              <p>
                <input type="number" name="reps" value={this.state.reps} onChange={this.handleChange} placeholder="Reps" />
              </p>
            </div>

            <div className="radio-row">

              <div className="radio-row-container">

                <p>Category</p>

                <div className="category-container">
                  <div>
                    <input type="radio" id="trending" name="category" value="trending" onChange={this.handleChange} checked={this.state.category === "trending"}/>
                    <label htmlFor="trending">Trending</label>
                  </div>

                  <div>
                    <input type="radio" id="fail" name="category" value="fail" onChange={this.handleChange} checked={this.state.category === "fail"}/>
                    <label htmlFor="fail">Fail</label>
                  </div>

                  {this.props.user.professional === true && (
                    <div>
                      <input type="radio" id="learn" name="category" value="learn" onChange={this.handleChange} checked={this.state.category === "learn"}/>
                      <label htmlFor="learn">Learn</label>
                    </div>
                  )}

                </div>
              
              </div>

            </div>

            <p>
              <label htmlFor="description">Description
                <textarea id="description" name="description" rows="5" cols="33" value={this.state.description} placeholder="Write description here" onChange={this.handleChange}>
                </textarea>
              </label>
            </p>
          </div>

          <p className={`form-submit ${this.state.isUploading ? "is-uploading" : ""}`}>
            <input type="submit" value="Upload Video" /><div class="lds-ring"><div></div><div></div><div></div><div></div></div>
          </p>
        
        </form>

      </div>
    )
  }
}

export default VideoUpload;