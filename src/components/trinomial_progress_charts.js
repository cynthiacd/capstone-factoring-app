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
    console.log("in TrinomialProgressCharts");
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
          <Link to="/practice/plus_plus"><Gauge value={ report["plus_plus"] } width={200} height={160} label="Plus Plus" color="#0275d8"/></Link>
          <Gauge value={ report["minus_plus"] } width={200} height={160} label="Minus Plus"/>
          <Gauge value={ report["minus_minus"] } width={200} height={160} label="Minus Minus"/>
          <Gauge value={ report["plus_minus"] } width={200} height={160} label="Plus Minus"/>
          <Gauge value={ report["plus_dbl_sq"] } width={200} height={160} label="Plus Dbl Sq"/>
          <Gauge value={ report["minus_dbl_sq"] } width={200} height={160} label="Minus Dbl Sq"/>
          <Gauge value={ report["diff_sq"] } width={200} height={160} label="Difference of Squares"/>
          <Gauge value={ report["gcf"] } width={200} height={160} label="GCF"/>
          <Gauge value={ report["prime"] } width={200} height={160} label="Prime"/>
          <Gauge value={ report["a_greater_one"] } width={200} height={160} label="a > 1"/>
          <Gauge value={ report["ones_and_zeros"] } width={200} height={160} label="Ones and Zeros"/>
        </div>
        <h1>Total Problems Completed: { report["total_problems"] }</h1>
      </div>
    );
  }
}

// const mapStateToProps = function(state) {
//   return { report: state.report };
// };

function mapStateToProps(state) {
  console.log("in mapStateToProps");
  console.log(state);
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
