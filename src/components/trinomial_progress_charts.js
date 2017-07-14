import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gauge from 'react-svg-gauge';
// import { Link } from 'react-router-dom';
// import { fetchProgressChart } from '../actions';


class TrinomialProgressCharts extends Component {
  // componentDidMount() {
  //   this.props.fetchProgressChart();
  // }

  render () {
    console.log("in TrinomialProgressCharts");
    return (
      <div className="progress-chart">
        <Gauge value={87} width={200} height={160} label="Plus Plus"/>
        <Gauge value={92} width={200} height={160} label="Minus Plus"/>
        <Gauge value={43} width={200} height={160} label="Minus Minus"/>
        <Gauge value={22} width={200} height={160} label="Plus Minus"/>
      </div>

    );
  }
}

export default TrinomialProgressCharts;


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
