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
  return { errorMessage: state.user.error };  // return state;
}

// function validate(values) {
//   const errors = {};
//   return errors;
// }

export default reduxForm({
  form: 'signin'
  })( connect (mapStateToProps, actions)(Singin) );
