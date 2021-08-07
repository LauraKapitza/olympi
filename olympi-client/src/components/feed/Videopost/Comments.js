import React from 'react';
import './Comments.css';

class Comments extends React.Component {
  render() {
    return (
      <div className="comments-wrapper">
        {this.props.comments.map((comment, index) => {
          return (
            <div key={index} className="comment">
              <h4>@{comment.author_id}</h4>
              <h5>@{comment.to_id}</h5><p>{comment.question}</p>
            </div>
          )
        })}
      </div>
    )
  }
};

export default Comments;