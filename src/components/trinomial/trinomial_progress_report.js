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
      <div className="row report">
        <div className="row problem-traker">
          <h3 className="col-lg-6">Total Problems Completed: { report["total_problems"] }</h3>
          <h3 className="col-lg-6">Total Problems Correct: { report["total_problems_correct"]}</h3>
        </div>
        <div className="row progress-chart">
          <Link to="/practice/plus_plus" className="col-lg-3">
            <Gauge value={ report["plus_plus"] } width={200} height={160} label="Plus Plus" color="#0275d8"/>
          </Link>

          <Link to="/practice/minus_plus" className="col-lg-3">
            <Gauge value={ report["minus_plus"] } width={200} height={160} label="Minus Plus" color="#0275d8"/>
          </Link>

          <Link to="/practice/minus_minus" className="col-lg-3">
            <Gauge value={ report["minus_minus"] } width={200} height={160} label="Minus Minus" color="#0275d8"/>
          </Link>

          <Link to="/practice/plus_minus" className="col-lg-3">
            <Gauge value={ report["plus_minus"] } width={200} height={160} label="Plus Minus" color="#0275d8"/>
          </Link>

          <Link to="/practice/plus_dbl_sq" className="col-lg-3">
            <Gauge value={ report["plus_dbl_sq"] } width={200} height={160} label="Plus Double Square" color="#0275d8"/>
          </Link>

          <Link to="/practice/minus_dbl_sq" className="col-lg-3">
            <Gauge value={ report["minus_dbl_sq"] } width={200} height={160} label="Minus Double Square" color="#0275d8"/>
          </Link>

          <Link to="/practice/diff_sq" className="col-lg-3">
            <Gauge value={ report["diff_sq"] } width={200} height={160} label="Difference of Squares" color="#0275d8"/>
          </Link>

          <Link to="/practice/a_greater_one" className="col-lg-3">
            <Gauge value={ report["a_greater_one"] } width={200} height={160} label="a > 1" color="#0275d8"/>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  // console.log("in mapStateToProps for report");
  // console.log(state);
  return { report: state.user.report };
};

export default connect(mapStateToProps, actions)(Report);
