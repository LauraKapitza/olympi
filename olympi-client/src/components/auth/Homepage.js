import React from 'react';

import {Link} from 'react-router-dom';

class Homepage extends React.Component {
  render() {
    return (
      <div className="cta">
            <Link className="btn" to="/signup">Sign up</Link>
            <Link className="btn" to="/login">Log in</Link>
      </div>
    );
  }
}

export default Homepage