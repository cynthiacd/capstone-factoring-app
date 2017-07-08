import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrinomial } from '../actions';

class TrinomialShow extends Component {
  componentDidMount() {
    this.props.fetchTrinomial();
  }

  render() {
    console.log(this.props.trinomial);
    // const promise = this.props.trinomial.trinomial;
    // const { trinomial } = this.props;
    // const data = trinomial.data;
    // console.log(data);
    // const trinomial = this.props.trinomial;
    // console.log(trinomial);

    return (
      <div>
        <h3>problem goes here</h3>
        <p></p>
      </div>
    );
  }
}

function mapStateToProps( state ) {
  return { trinomial: state.trinomial };
}

export default connect(mapStateToProps, { fetchTrinomial })(TrinomialShow);
