import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class TrinomilaInputForm extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${ touched && error ? 'has-danger' : ''}`

    return (
      <div className={ className }>
        <label>{ field.label }</label>
        <input
          className="form-control"
          type="text"
          { ...field.input }
        />
        <div className="text-help">
          { touched ? error : "" }
        </div>
      </div>
    );
  }

  onSumbmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Step 1"
          name="step1"
          component={ this.renderField }
        />
        <Field
          label="Step 2"
          name="step2"
          component={ this.renderField }
        />
        <Field
          label="Final Answer"
          name="final"
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

// function validate(values) {

// }

export default reduxForm({form: 'TrinomialInputForm'})(TrinomialInputForm);
