import React from 'react';
import './ReplyComment.css';

import close_button from '../../../assets/icons/close-button.svg';
import feedService from '../feed-service.js';

class ReplyComment extends React.Component {
  state = {
    reply: "",

    to_id: "",
    error: "",
    isLoading: false
  };

  
  handleSubmit = (event) => {
    event.preventDefault();

    if( this.state.isLoading === true){
      return;
    }

    this.setState({isLoading: true});

    const data = {
      reply: this.state.reply, 
      comment_id: this.props.comment._id
    }


    feedService.addReplyVideo(data)
    .then((updatedComment) => {
      this.setState({error: ""});
      // call the addQuestion from parent to add the video to the feed
      this.props.addReply(updatedComment);

      // close the upload form (method from parent)
      this.props.toggle();
    })
    //.catch(err => this.setState({error: err.response.data.message}))
  };

  handleChange = (event) => {
    let {name, value} = event.target;
    this.setState({[name]: value});
  }; 

  render() {
    return (
      <div className="reply-comment">
        <a onClick={this.props.toggle}><img src={close_button} alt="Close reply comment form"></img></a>
        <h2>Reply</h2>

        <form id="replyCommentForm" onSubmit={this.handleSubmit} className="reply-comment-form">
          <div>
            {/* for an error */}
          {this.state.error && (
            <p className="error">{this.state.error}</p>
          )}
            
            <h5>To {this.props.comment.author_id.username}</h5>

            <p>
              <label htmlFor="reply">
                Write your detailed reply
                <textarea id="reply" name="reply" rows="10" cols="33" value={this.state.reply} placeholder="Write your reply here" onChange={this.handleChange}>
                </textarea>
              </label>
            </p>
          </div>

          
          <p className={`form-submit ${this.state.isLoading ? "is-loading" : ""}`}>
            <input type="submit" value="Send Request" />
          </p>
        
        </form>

      </div>
    )
  }
}

export default ReplyComment;