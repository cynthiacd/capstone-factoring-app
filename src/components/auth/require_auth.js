import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {

    static contextTypes = {
      router: React.PropTypes.object
      // to access this - use Authentication.router
    }

    // this will boot user back to the home path
    componentWillMount() {
      if(!this.props.authenticated) { this.context.router.push("/"); }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent { ...this.props } />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.user.authenticated };
  }
  return connect(mapStateToProps)(Authentication)
}
