import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class TrinomialInputForm extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${ touched && error ? 'has-danger' : ''}`;

    return (
      <div className={ className }>
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
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
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
      </form>
    );
  }
}

// function validate(values) {

// }

export default reduxForm({form: 'TrinomialInputForm'})(TrinomialInputForm);
