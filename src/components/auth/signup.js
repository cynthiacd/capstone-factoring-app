import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Field, reduxForm, reset } from 'redux-form';
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
        <div className="text-help">
          { touched ? error : "" }
        </div>
      </div>
    );
  }

  // want to show custom alerts on errors back from api - but this is tricky
  // might be better to format the errors on api side and then wont have to have so many
  // conditionals/formatting on frontend
  renderAlert() {
    if( this.props.errorMessages) {
      return (
        <div className="alert alert-danger">
          <p><strong>{ this.props.errorMessages }</strong></p>
        </div>
      );
    }
  }

  render() {
    console.log("in render of signin");
    const { handleSubmit } = this.props;
    return (
      <form method="post" onSubmit= { handleSubmit( this.onSubmit.bind(this) ) }>
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
  return { errorMessages: state.user.errors };
}

const validate = function(values) {
  const errors = {};

  if (values.password !== values.password_confirmation ) {
    errors.password_confirmation = "Passwords do not match";
  }
  console.log(errors);
  return errors;
}

// const afterSubmit = function (result, dispatch) {
//   // console.log("in afterSubmit");
//   dispatch( reset('signupForm') );
// }

export default reduxForm({
  validate,
  form: 'signupForm'
})(connect (mapStateToProps, actions)(Signup) );
