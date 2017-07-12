import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { fetchTrinomial } from '../actions';
import { checkTrinomial } from '../actions';

class TrinomialShow extends Component {
  // this didn't work!!
  // const trinomial = this.props.data.trinomial;
  // maybe this would work?
  // trinomial() {
  //   this.props.data.trinomial;
  // }

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

  renderResponse() {
    console.log("the problem posted to the API and results were saved");
  }

  onSubmit(values) {
    // const trinomial = this.props.data.trinomial;
    // I can check the answer if I want or I can send the answer back with the post API ...
    // I can generate problems in API and save in db pattern, solution, user_id?
    // values["solution"] = this.props.data.trinomial.solution
    values["solution1"] = this.props.data.trinomial.solution1
    values["solution2"] = this.props.data.trinomial.solution2
    delete values.step1
    delete values.step2
    const score = ( values.final === this.props.data.trinomial.solution1 || values.final === this.props.data.trinomial.solution2 ? 1 : -1 );
    values["score"] = score
    values["username"] = "user1"
    values["pattern"] = "mastery_" + this.props.data.trinomial.pattern;

    // this.props.checkTrinomial(values);
    this.props.checkTrinomial(values, () => {
      // this is a callback function that should be called after the API post
      window.alert("Your problem was graded");
      // this is not best practice
      window.location.reload();
    });
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
          <p>Pattern: { trinomial.pattern }</p>
          <h2 className="trinomial-general-form">{ trinomial.a }x<sup>2</sup> { trinomial.general_form }</h2>
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

// const mapStateToProps = function(state) {
  // return { data: state.trinomial };
// }

function mapStateToProps(state) {
  return { data: state.trinomial };
}

export default reduxForm({
  form: 'TrinomialInputForm'
})(connect(mapStateToProps, { fetchTrinomial, checkTrinomial })(TrinomialShow));
