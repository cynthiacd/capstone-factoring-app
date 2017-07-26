import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

  renderSignLinks() {
    if (this.props.authenticated === true) {
      // show link to signout
      return (
        <div className="col-lg-7 signin-out-links">
          <Link className="btn btn-primary" to="/report">
            Report
          </Link>
          <Link className="btn btn-primary" to="/practice/custom">
            Practice
          </Link>
          <Link className="btn btn-primary" to="/signout">
            Sign Out
          </Link>
        </div>
      );
    } else {
      return (
        <div className="col-lg-7 signin-out-links">
          <Link className="btn btn-primary" to="/signin">
            Sign In
          </Link>

          <Link className="btn btn-primary" to="/signup">
            Sign Up
          </Link>
        </div>
      );}
  }

  renderWelcomeMessage() {
    if (this.props.authenticated === true) {
      return (
        <div className="col-lg-6 welcome-message">
          <h5>Welcome { this.props.username }</h5>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="row header">
        <div className="row text-headers">
          <div className="col-lg-6">
            <Link to="/"><h1>Trinomial Factoring Practice</h1></Link>
          </div>
          { this.renderWelcomeMessage() }
        </div>

        <div className="row nav-buttons">
          <div className="col-lg-5 learn-buttons">
            <Link className="btn btn-primary" to="/learn_patterns">
              Learn the Patterns
            </Link>
            <Link className="btn btn-primary" to="/learn_video">
              Learn how to Factor
            </Link>
          </div>
            { this.renderSignLinks() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    authenticated: state.user.authenticated,
    username: state.user.username
  };
}

export default connect(mapStateToProps)(Header);
