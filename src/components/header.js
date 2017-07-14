import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Header extends Component {

  render() {
    return (
      <div className="header">
        <h1>Trinomial Factoring Practice</h1>
          <div className="navigation-bar">
              <Link className="btn btn-primary" to="/practice">
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
