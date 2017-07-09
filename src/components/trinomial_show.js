import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrinomial } from '../actions';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class TrinomialShow extends Component {
  componentDidMount() {
    this.props.fetchTrinomial();
  }

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
    // console.log(this.props.data);
    const trinomial = this.props.data.trinomial;
    const superScript2 = "2".sup
    const { handleSubmit } = this.props;

    // just like you were taught - this conditional is important cause of async issues
    if (!trinomial) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <div>
        <div className="problem">
          <Link to="/"> Back </Link>
          <h3>Problem goes here: </h3>
          <p> Here is all the info the API request provides</p>
          <p>Pattern: { trinomial.pattern }</p>
          <p>{ trinomial.general_form }</p>
          <p>x<sup>2</sup> + { trinomial.b }x + { trinomial.c }</p>
          <p>a: { trinomial.a }</p>
          <p>b: { trinomial.b }</p>
          <p>c: { trinomial.c }</p>
        </div>

        <div className="ans-input-form">
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
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { data: state.trinomial };
}

export default reduxForm({
  form: 'TrinomialInputForm'
})(connect(mapStateToProps, { fetchTrinomial })(TrinomialShow));
