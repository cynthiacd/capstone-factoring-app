import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { fetchTrinomial } from '../actions';
import { checkTrinomial } from '../actions';

class TrinomialShow extends Component {
  // const trinomial = this.props.data.trinomial;

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
    // const trinomial = this.props.data.trinomial;
    // I can check the answer if I want or I can send the answer back with the post API ...
    // I can generate problems in API and save in db pattern, solution, user_id?
    // values["solution"] = this.props.data.trinomial.solution
    // values["pattern1"] = this.props.data.trinomial.solution1
    // values["pattern2"] = this.props.data.trinomial.solution2
    delete values.step1
    delete values.step2
    const grade = ( values.final === this.props.data.trinomial.solution1 || values.final === this.props.data.trinomial.solution2 ? true : false );
    values["grade"] = grade
    values["username"] = "user1"
    values["pattern"] = this.props.data.trinomial.pattern;
    // console.log("Values to be posted:");
    // console.log(values);
    this.props.checkTrinomial(values);
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
          <p>x<sup>2</sup> { trinomial.general_form }</p>
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
})(connect(mapStateToProps, { fetchTrinomial, checkTrinomial })(TrinomialShow));
