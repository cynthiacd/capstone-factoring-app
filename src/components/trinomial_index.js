import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TrinomialProgressCharts from './trinomial_progress_charts';
import Header from './header';

class TrinomialIndex extends Component {

  render() {
    return (
      <div>
        <div><Header /></div>
        <div className="Progress-Chart">
          <TrinomialProgressCharts />
        </div>
      </div>
    );
  }
}

export default TrinomialIndex;
