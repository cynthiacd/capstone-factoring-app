import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrinomial } from '../actions';
import { Link } from 'react-router-dom';

class TrinomialShow extends Component {
  componentDidMount() {
    this.props.fetchTrinomial();
  }

  render() {
    // console.log(this.props.data);
    const trinomial = this.props.data.trinomial;
    const superScript2 = "2".sup

    // just like you were taught - this conditional is important cause of async issues
    if (!trinomial) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <div>
        <Link to="/"> Back </Link>
        <h3>Problem goes here: </h3>
        <p> Here is all the info the API request provides</p>
        <p>Pattern: { trinomial.pattern }</p>
        <p>{ trinomial.general_form }</p>
        <p>x<sup>2</sup> + { trinomial.b }x + { trinomial.c }</p>
        <p>a: { trinomial.a }</p>
        <p>b: { trinomial.b }</p>
        <p>c: { trinomial.c }</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { data: state.trinomial };
}

export default connect(mapStateToProps, { fetchTrinomial })(TrinomialShow);
