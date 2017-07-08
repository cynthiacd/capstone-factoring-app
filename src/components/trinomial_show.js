import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrinomial } from '../actions';

class TrinomialShow extends Component {
  componentDidMount() {
    this.props.fetchTrinomial();
  }

  render() {
    // console.log(this.props.data);
    const trinomial = this.props.data.trinomial;

    // just like the course said - this conditional is important ...
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
        <p> Now getting pattern and string with api call</p>
        <p>Pattern: { trinomial.pattern }</p>
        <p>{ trinomial.general_form }</p>
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
