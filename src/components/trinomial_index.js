import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TrinomialProgressCharts from './trinomial_progress_charts';

class TrinomialIndex extends Component {

  render() {
    return (
      <div className="header">
        <h1>Quadratic/Trinomial Factoring Practice</h1>
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

// // dont need this yet- not showing any data yet, just want to show a header - some html
// function mapStateToProps(state) {
//
// }

export default TrinomialIndex;
