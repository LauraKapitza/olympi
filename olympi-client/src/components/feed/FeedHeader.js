import {Link} from 'react-router-dom';
import React from 'react';
import './Feed.css';

function FunctionHeader(props) {
  return(
    <div className="Feed-header">
    <header>
      <h2>Hi <span>{props.user.username}</span>!</h2>
      <p>Which exercise are you sharing today?</p>
    </header>

    <nav>
      <Link to="/">N</Link>
      <Link to='/logout'>Logout</Link>
      <button><img src="/assets/icons/upload.svg" alt="Upload Icon" /></button>
    </nav>

    </div>
  )
};

export default FunctionHeader;