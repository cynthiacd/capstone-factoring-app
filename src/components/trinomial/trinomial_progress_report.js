import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gauge from 'react-svg-gauge';
import { Link } from 'react-router';
// import { fetchReport } from '../../actions';
import * as actions from '../../actions';


class Report extends Component {
  componentDidMount() {
    // console.log("about to go get report");
    this.props.fetchReport();
  }

  render () {
    const report = this.props.report;

    if (!report) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    return (
      <div>
        <h1>Total Problems Completed: { report["total_problems"] }</h1>
        <div className="progress-chart">
          <Link to="/practice/plus_plus">
            <Gauge value={ report["plus_plus"] } width={200} height={160} label="Plus Plus" color="#0275d8"/>
          </Link>

          <Link to="/practice/minus_plus">
            <Gauge value={ report["minus_plus"] } width={200} height={160} label="Minus Plus" color="#0275d8"/>
          </Link>

          <Link to="/practice/minus_minus">
            <Gauge value={ report["minus_minus"] } width={200} height={160} label="Minus Minus" color="#0275d8"/>
          </Link>

          <Link to="/practice/plus_minus">
            <Gauge value={ report["plus_minus"] } width={200} height={160} label="Plus Minus" color="#0275d8"/>
          </Link>

          <Link to="/practice/plus_dbl_sq">
            <Gauge value={ report["plus_dbl_sq"] } width={200} height={160} label="Plus Double Square" color="#0275d8"/>
          </Link>

          <Link to="/practice/minus_dbl_sq">
            <Gauge value={ report["minus_dbl_sq"] } width={200} height={160} label="Minus Double Square" color="#0275d8"/>
          </Link>

          <Link to="/practice/diff_sq">
            <Gauge value={ report["diff_sq"] } width={200} height={160} label="Difference of Squares" color="#0275d8"/>
          </Link>

          <Link to="/practice/a_greater_one">
            <Gauge value={ report["a_greater_one"] } width={200} height={160} label="a > 1" color="#0275d8"/>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  // console.log("in mapStateToProps for report");
  console.log(state);
  return { report: state.user.report };
};

export default connect(mapStateToProps, actions)(Report);
