import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';


class Singin extends Component {

  onSubmit({username, password}) {
    this.props.signinUser( {username, password} );
  }

  renderField(field) {

    const { meta: { touched, error} } = field;
    const className = `form-group ${ touched && error ? 'has-danger' : ''}`;

    return (
      <div className= { className }>
        <label>{ field.label }</label>
        <input
          className="form-control"
          type={ field.type }
          { ...field.input }
        />
      </div>
    );
  }

  renderAlert() {
    if( this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong> {this.props.errorMessage }</strong>
        </div>
      );
    }
  }

  renderWelcome() {
    if ( this.props.welcomeMessage) {
      return (
        <div><h4>Your signup was successful. Welcome new user. Please signin. </h4></div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        { this.renderWelcome() }
        <form onSubmit= { handleSubmit(this.onSubmit.bind(this)) }>
          <Field
            label="Username"
            name="username"
            type="text"
            component={ this.renderField }
          />
          <Field
            label="Password"
            name="password"
            type="password"
            component={ this.renderField }
          />
          { this.renderAlert() }
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link className="btn btn-danger" to="/">
            Cancel
          </Link>
        </form>
      <div>
    );
  }
}

const mapStateToProps = function(state) {
  return { errorMessage: state.user.errors,
           welcomeMessage: state.user.welcomeNewUser
  };
}

// function validate(values) {
//   const errors = {};
//   return errors;
// }

export default reduxForm({
  form: 'signin'
  })( connect (mapStateToProps, actions)(Singin) );
