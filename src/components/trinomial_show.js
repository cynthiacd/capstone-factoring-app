import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrinomial } from '../actions';

class TrinomialShow extends Component {
  componentDidMount() {
    this.props.fetchTrinomial();
  }

  render() {
    console.log(this.props.trinomial);
    const trinomial = this.props.trinomial.trinomial;
    // console.log(trinomial.trinomial);
    // const promise = this.props.trinomial.trinomial;
    // const { trinomial } = this.props;
    // const data = trinomial.data;
    // console.log(data);
    // const trinomial = this.props.trinomial;
    // console.log(trinomial);
    if (!trinomial) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <div>
        <h3>problem goes here</h3>
        <p>You need to know what pattern you want to render the correct problem</p>
        <p>{`x^2 + ${trinomial.b}x + ${trinomial.c}`}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { trinomial: state.trinomial };
}

export default connect(mapStateToProps, { fetchTrinomial })(TrinomialShow);
