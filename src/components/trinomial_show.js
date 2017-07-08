import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrinomial } from '../actions';

class TrinomialIndex extends Component {
  render() {
    const { trinomial } = this.props;

    return (

    );
  }
}

function mapStatetoProps( state ) {
  return { trinomial: state.trinomial };
}

export default connect(mapStatetoProps, { fetchTrinomial })(TrinomialIndex);
