import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';


class Signup extends Component {

  onSubmit( {username, password, password_confirmation} ) {
    this.props.signupUser( {username, password, password_confirmation} );
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
    if( this.props.errorMessages) {
      if ( this.props.errorMessages["username"] && this.props.errorMessages["password_confirmation"] ) {
        return (
          <div className="alert alert-danger">
            <p><strong>Username: { this.props.errorMessages["username"] }</strong></p>
            <p><strong>Passwords do not match</strong></p>
          </div>
      );} else if ( this.props.errorMessages["username"] ) {
        return (
          <div className="alert alert-danger">
            <p><strong>Username: { this.props.errorMessages["username"] }</strong></p>
          </div>
      );} else if ( this.props.errorMessages["password_confirmation"] ) {
        return (
          <div className="alert alert-danger">
            <p><strong>Passwords do not match</strong></p>
          </div>
      );}
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
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
        <Field
          label="Password Confirmation"
          name="password_confirmation"
          type="password"
          component={ this.renderField }
        />
        { this.renderAlert() }
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link className="btn btn-danger" to="/">
          Cancel
        </Link>
      </form>
    );
  }
}

const mapStateToProps = function(state) {
  return { errorMessages: state.user.errors };  // return state;
}

// function validate(values) {
//   const errors = {};
//   return errors;
// }

export default reduxForm({
  form: 'signup'
})(connect (mapStateToProps, actions)(Signup) );
