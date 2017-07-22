import React, { Component } from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className="header">
      <Link to="/"><h1>Trinomial Factoring Practice</h1></Link>
        <div className="navigation-bar">
          <Link className="btn btn-primary" to="/learn_patterns">
            Learn the Patterns
          </Link>
          <Link className="btn btn-primary" to="/learn_video">
            Learn how to Factor
          </Link>
          <Link className="btn btn-primary" to="/practice/custom">
            Practice
          </Link>
          <Link className="btn btn-primary" to="/singin">
            Signin
          </Link>
          <Link className="btn btn-primary" to="/signup">
            Signup
          </Link>
        </div>
    </div>
  );
}

export default Header;
