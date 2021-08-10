import React from 'react';
import './AskProfessional.css';

import close_button from '../../../assets/icons/close-button.svg';
import feedService from '../feed-service.js';

class AskProfessional extends React.Component {
  state = {
    question: "",

    to_id: "",
    error: "",
    isLoading: false
  };

  handleQuery = (event) => {
    if(event.type === 'text') {
      this.setState({chosenProfessional: event.value});
    };
    if (event.type === 'search') {
      this.setState({query: event.value});
    };
  };
  
  handleSubmit = (event) => {
    event.preventDefault();

    if( this.state.isLoading === true){
      return;
    }

    this.setState({isLoading: true});

    const data = {
      video_id: this.props.video._id, 
      to_id: this.state.to_id, 
      question: this.state.question
    }
    feedService.addQuestionVideo(data)
    .then((newComment) => {
      this.setState({error: ""});
      // call the addQuestion from parent to add the video to the feed
      this.props.addQuestion(newComment);

      // close the upload form (method from parent)
      this.props.toggle();
    })
    .catch(err => this.setState({error: err.response.data.message}))
    .finally(() => this.setState({question: "", to_id: ""}))
  };

  handleChange = (event) => {
    let {name, value} = event.target;
    this.setState({[name]: value});
  }; 

  render() {
    return (
      <div className="Ask-professional">
        <a onClick={this.props.toggle}><img src={close_button} alt="Close ask professional form"></img></a>
        <h2>Ask Professional</h2>

        <form id="askForm" onSubmit={this.handleSubmit} className="ask-form">

          

          <div>

            <h3>{this.props.video.exercise}</h3>

            {/* for an error */}
          {this.state.error && (
            <p className="error">{this.state.error}</p>
          )}
            <p className="form-select form-select--big">
              <label>
                Choose a professional
                <select name="to_id" value={this.state.to_id} onChange={this.handleChange}>
                  <option value="placeholder">Choose your professional</option>
                  {this.props.professionals.map((professional) => (
                    <option key={professional._id} value={professional._id}>{professional.username}</option>
                  ))}
                </select>
              </label>
            </p>

            <p>
              <label htmlFor="question">
                Write your detailed questions
                <textarea id="question" name="question" rows="10" cols="33" value={this.state.question} placeholder="Write your questions here" onChange={this.handleChange}>
                </textarea>
              </label>
            </p>
          </div>

          
          <p className={`form-submit ${this.state.isUploading ? "is-loading" : ""}`}>
            <input type="submit" value="Send Request" />
          </p>
        
        </form>

      </div>
    )
  }
}

export default AskProfessional;