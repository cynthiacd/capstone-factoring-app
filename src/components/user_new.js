import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
// import { createUser } from '../actions';

class UserNew extends Component {
  renderField(field) {
    const { meta: { touched, error} } = field;
    const className = `form-group ${ touched && error ? 'has-danger' : ''}`;

    return (
      <div className= { className }>
        <label>{ field.label }</label>
        <input
          className="form-control"
          type="text"
          { ...field.input }
        />
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);

    // need to pose to API this belongs as action
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit= { handleSubmit(this.onSubmit.bind(this)) }>
        <Field
          label="Username"
          name="username"
          component={ this.renderField }
        />
        <Field
          label="Password"
          name="password"
          component={ this.renderField }
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link className="btn btn-danger" to="/">
          Cancel
        </Link>
      </form>
    );
  }
}
//
// function validate(values) {
//   const errors = {};
//   return errors;
// }

export default reduxForm({form: 'NewUserForm'})(UserNew);
