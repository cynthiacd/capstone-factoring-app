import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

  renderSignLinks() {
    if (this.props.authenticated === true) {
      // show link to signout
      return (
        <Link className="btn btn-primary" to="/signout">
          Sign Out
        </Link>
      );
    } else {
      return (
        <div>
          <Link className="btn btn-primary" to="/signin">
            Sign In
          </Link>

          <Link className="btn btn-primary" to="/signup">
            Sign Up
          </Link>
        </div>
      );}
  }

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
            <Link className="btn btn-primary" to="/report">
              Report
            </Link>
            <Link className="btn btn-primary" to="/practice/custom">
              Practice
            </Link>

            <div className="signin-signout-link">
              { this.renderSignLinks() }
            </div>

          </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    authenticated: state.user.authenticated
  };
}

export default connect(mapStateToProps)(Header);
