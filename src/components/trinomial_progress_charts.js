import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gauge from 'react-svg-gauge';
// import { Link } from 'react-router-dom';
import { fetchReport } from '../actions';


class TrinomialProgressCharts extends Component {
  componentDidMount() {
    this.props.fetchReport();
  }

  render () {
    console.log("in TrinomialProgressCharts");
    console.log(this.props);
    const report = this.props.report;

    if (!report) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    return (
      <div className="progress-chart">
        <Gauge value={ report["plus_plus"] } width={200} height={160} label="Plus Plus"/>
        <Gauge value={92} width={200} height={160} label="Minus Plus"/>
        <Gauge value={43} width={200} height={160} label="Minus Minus"/>
        <Gauge value={22} width={200} height={160} label="Plus Minus"/>
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
