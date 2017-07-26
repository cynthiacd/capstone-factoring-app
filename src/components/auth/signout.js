import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return <div className="row goodbye-message">Sorry to see you go - see you soon</div>;
  }
}

export default connect(null, actions)(Signout)
