import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gauge from 'react-svg-gauge';
import { Link } from 'react-router';
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

          <div className="col-lg-3 report-gauge">
              <h5>Plus Plus</h5>
              <h6>x<sup>2</sup> + bx + c</h6>
            <Link to="/practice/plus_plus">
              <Gauge value={ report["plus_plus"] } width={200} height={130} label="" color="#0275d8"/>
            </Link>
          </div>

          <div className="col-lg-3 report-gauge">
              <h5>Minus Plus</h5>
              <h6>x<sup>2</sup> - bx + c</h6>
            <Link to="/practice/minus_plus">
              <Gauge value={ report["minus_plus"] } width={200} height={130} label="" color="#0275d8"/>
            </Link>
          </div>

          <div className="col-lg-3 report-gauge">
              <h5>Minus Minus</h5>
              <h6>x<sup>2</sup> - bx - c</h6>
            <Link to="/practice/minus_minus">
              <Gauge value={ report["minus_minus"] } width={200} height={130} label="" color="#0275d8"/>
            </Link>
          </div>

          <div className="col-lg-3 report-gauge">
              <h5>Plus Minus</h5>
              <h6>x<sup>2</sup> + bx + c</h6>
            <Link to="/practice/plus_minus">
              <Gauge value={ report["plus_minus"] } width={200} height={130} label="" color="#0275d8"/>
            </Link>
          </div>

          <div className="col-lg-3 report-gauge">
            <h5>Plus Double Square</h5>
            <h6>x<sup>2</sup> + 2ax + a<sup>2</sup></h6>
            <Link to="/practice/plus_dbl_sq">
              <Gauge value={ report["plus_dbl_sq"] } width={200} height={130} label="" color="#0275d8"/>
            </Link>
          </div>

          <div className="col-lg-3 report-gauge">
            <h5>Minus Double Square</h5>
            <h6>x<sup>2</sup> - 2ax + a<sup>2</sup></h6>
            <Link to="/practice/minus_dbl_sq">
              <Gauge value={ report["minus_dbl_sq"] } width={200} height={130} label="" color="#0275d8"/>
            </Link>
          </div>

          <div className="col-lg-3 report-gauge">
            <h5>Difference of Squares</h5>
            <h6>x<sup>2</sup> - a<sup>2</sup></h6>
            <Link to="/practice/diff_sq">
              <Gauge value={ report["diff_sq"] } width={200} height={130} label="" color="#0275d8"/>
            </Link>
          </div>

          <div className="col-lg-3 report-gauge">
            <h5>a is greater than 1 ( a > 1 )</h5>
            <h6>ax<sup>2</sup> + bx +c</h6>
            <Link to="/practice/a_greater_one">
              <Gauge value={ report["a_greater_one"] } width={200} height={130} label="" color="#0275d8"/>
            </Link>
          </div>
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
