import React from 'react';
import './AskProfessional.css';

import close_button from './../icons/close-button.svg';

class AskProf extends React.Component {
  state = {
    video: this.props.video,
    question: "",

    professionals: this.props.professionals,
    query: "",
    chosenProfessional: "",
    error: ""
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
    //TODO add comment to the video

    // close the upload form (method from parent)
    this.props.toggle();
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

          {/* for an error */}
          {this.state.error && (
            <p className="error">{this.state.error}</p>
          )}

          <div>

            <p>{this.state.video.exercise}</p>

            <div className="professional-searchbar">
                <label>
                    <input type='search' name='search' value={this.state.query} onChange={(event) => {this.handleQuery(event.target)}} placeholder="Search professional..."></input>
                </label>
                <label>
                    <input type='text' value={this.state.chosenProfessional} onChange={event => {this.handleQuery(event.target)}}></input>
                </label>

            </div>

            <p>
              <label htmlFor="question">
                Write your detailed questions
                <textarea id="question" name="question" rows="10" cols="33" value={this.state.question} placeholder="Write your questions here" onChange={this.handleChange}>
                </textarea>
              </label>
            </p>
          </div>

          
          <p className="form-submit">
            <input type="submit" value="Send Request" />
          </p>
        
        </form>

      </div>
    )
  }
}

export default AskProf;