import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrinomial } from '../actions';

class TrinomialShow extends Component {
  componentDidMount() {
    this.props.fetchTrinomial();
  }

  render() {
    console.log(this.props.trinomial);
    const { trinomial } = this.props;

    return (
      <div>
        <h3>{ trinomial }</h3>
      </div>
    );
  }
}

function mapStateToProps( state ) {
  return { trinomial: state.trinomial };
}

export default connect(mapStateToProps, { fetchTrinomial })(TrinomialShow);
