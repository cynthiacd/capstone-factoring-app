import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
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
            <Link className="btn btn-primary" to="/user/new">
              Sing Up
            </Link>
            <Link className="btn btn-primary" to="/user/login">
              Log In
            </Link>
          </div>
      </div>
    );
  }
}
export default Header;
