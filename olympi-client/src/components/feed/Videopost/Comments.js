import React from 'react';
import './Comments.css';

import ReplyIcon from '@material-ui/icons/Reply';
import ReplyComment from './ReplyComment.js';

class Comments extends React.Component {

  state = {
    replyOpen: false,
    currentComment: null
  }

  toggle = () => {
    this.setState({replyOpen: !this.state.replyOpen})
  }

  canReply = (comment) => {
    return (comment.to_id._id === this.props.user._id && comment.reply === undefined)
  }

  render() {
    return (
      <div className="comments-wrapper">
        {this.props.comments.map((comment) => {
          return (
            <>
            <div key={comment._id} className="comment">
              <h4>{comment.author_id.username}</h4>
              <h5>@{comment.to_id.username}</h5><p>{comment.question}</p>
            </div>
            {comment.reply && 
                <div className="reply-wrapper">
                  <h6>{comment.to_id.username}</h6><p>{comment.reply}</p>
                </div>
              }

              <div className="reply-comment-wrapper">
                {this.canReply(comment) && 
                  <button className="reply-button" onClick={()=>{
                    this.toggle();
                    this.setState({currentComment: comment})
                  }}>
                    <ReplyIcon />
                    <span>Reply</span>
                  </button>
                }
              </div>
            </>
          )
        })}
        {this.state.replyOpen && <ReplyComment video={this.state.video} comment={this.state.currentComment} addReply={this.props.addReply} toggle={this.toggle} />}
      </div>
    )
  }
};

export default Comments;