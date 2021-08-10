import React from 'react';
import './Comments.css';

import ReplyIcon from '@material-ui/icons/Reply';
import ReplyComment from './ReplyComment.js';

class Comments extends React.Component {

  state = {
    replyOpen: false
  }

  toggle = () => {
    this.setState({replyOpen: !this.state.replyOpen})
  }

  render() {
    return (
      <div className="comments-wrapper">
        {this.props.comments.map((comment) => {
          return (
            <div key={comment._id} className="comment">
              <h4>@{comment.author_id.username}</h4>
              <h5>@{comment.to_id.username}</h5><p>{comment.question}</p>
              {this.props.user.username === comment.to_id.username && <button>Answer</button>}


              <div className="reply-wrapper">
                {this.state.replyOpen && <ReplyComment video={this.state.video} comment={comment} addResponse={this.props.addResponse} toggle={this.toggle} />}
                <button className="reply-button" onClick={this.toggle}>
                  <ReplyIcon />
                  <span>Reply</span>
                </button>
              </div>


            </div>

          )
        })}
      </div>
    )
  }
};

export default Comments;