import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrinomial } from '../actions';

class TrinomialShow extends Component {
  render() {
    const { trinomial } = this.props;

    return (
      <div>
        <h3>{ trinomial }</h3>
      </div>
    );
  }
}

function mapStatetoProps( state ) {
  return { trinomial: state.trinomial };
}

export default connect(mapStatetoProps, { fetchTrinomial })(TrinomialShow);
