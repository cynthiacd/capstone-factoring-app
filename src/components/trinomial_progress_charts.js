import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gauge from 'react-svg-gauge';
import { Link } from 'react-router-dom';
import { fetchReport } from '../actions';


class TrinomialProgressCharts extends Component {
  componentDidMount() {
    this.props.fetchReport();
  }

  render () {
    // console.log("in TrinomialProgressCharts");
    // console.log(this.props);
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
        <div className="progress-chart">
          <Link to="/practice/plus_plus">
            <Gauge value={ report["plus_plus"] } width={200} height={160} label="Plus Plus" color="#0275d8"/>
          </Link>

          <Link to="/practice/minus_plus">
            <Gauge value={ report["minus_plus"] } width={200} height={160} label="Minus Plus"/>
          </Link>

          <Link to="/practice/plus_plus">
            <Gauge value={ report["minus_minus"] } width={200} height={160} label="Minus Minus"/>
          </Link>

          <Link to="/practice/plus_minus">
            <Gauge value={ report["plus_minus"] } width={200} height={160} label="Plus Minus"/>
          </Link>

          <Link to="/practice/plus_dbl_sq">
            <Gauge value={ report["plus_dbl_sq"] } width={200} height={160} label="Plus Dbl Sq"/>
          </Link>

          <Link to="/practice/minus_dbl_sq">
            <Gauge value={ report["minus_dbl_sq"] } width={200} height={160} label="Minus Dbl Sq"/>
          </Link>

          <Link to="/practice/diff_sq">
            <Gauge value={ report["diff_sq"] } width={200} height={160} label="Difference of Squares"/>
          </Link>

          <Link to="/practice/a_greater_one">
            <Gauge value={ report["a_greater_one"] } width={200} height={160} label="a > 1"/>
          </Link>

          <Link to="/practice/gcf">
            <Gauge value={ report["gcf"] } width={200} height={160} label="GCF"/>
          </Link>

          <Link to="/practice/prime">
            <Gauge value={ report["prime"] } width={200} height={160} label="Prime"/>
          </Link>
        </div>
        <div><p>* If you don't see any reports, we don't have enough data to assess your level, please keep practicing</p></div>
        <h1>Total Problems Completed: { report["total_problems"] }</h1>
      </div>
    );
  }
}

// const mapStateToProps = function(state) {
//   return { report: state.report };
// };

function mapStateToProps(state) {
  // console.log("in mapStateToProps");
  // console.log(state);
  return { report: state.user.report };
};

export default connect(mapStateToProps, { fetchReport })(TrinomialProgressCharts);
// export default TrinomialProgressCharts;

// const mapStateToProps = function(state) {
//   // console.log("in mapStateToProps");
//   // console.log(state.trinomial);
//   return { data: state.trinomial };
// }
//
// // function mapStateToProps(state) {
//   // return { data: state.trinomial };
// // }
//
// const afterSubmit = function (result, dispatch) {
//   dispatch(reset('TrinomialInputForm'));
// }
//
// export default reduxForm({
//   form: 'TrinomialInputForm',
//   onSubmitSuccess: afterSubmit
// })(connect(mapStateToProps, { fetchTrinomial, checkTrinomial })(TrinomialShow));
