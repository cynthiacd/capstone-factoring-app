import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Field, reduxForm, reset } from 'redux-form';
// import { fetchTrinomial, checkTrinomial } from '../../actions';
import * as actions from '../../actions';

class TrinomialShow extends Component {
  // this is a react Component life cycle method that auto calls when the page is first loaded or refreshed
  // but this function will not auto run if the state changes and the component re-renders
  componentDidMount() {
    console.log("going to get a problem");
    console.log(this.props.params.pattern);
    // const { pattern } = this.props.match.params;
    this.props.fetchTrinomial(this.props.params.pattern);
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${ touched && error ? 'has-danger' : ''}`;

    return (
      <div className={ className }>
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

  onSubmit(values) {
    // to access users id of pattern: values.userIdPattern
    delete values.step2;
    const score = ( values.final === this.props.data.trinomial.solution1 || values.final === this.props.data.trinomial.solution2 ? 1 : -1 );
    values["score"] = score;

    // will need to access state and grab user's token here - once you set up user auth
    values["username"] = "user1";
    // critical that you send back the pattern!
    values["pattern"] = this.props.data.trinomial.pattern;
    // const { pattern } = this.props.match.params;
    this.props.checkTrinomial(values, this.props.params.pattern);
  }

  render() {
    console.log("rendring the trinomial show");
    const trinomial = this.props.data.trinomial;
    const superScript2 = "2".sup
    const { handleSubmit } = this.props;

    // now this is not working - since changing my middleware
    if ( !trinomial ) {
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
            <div>
              <Field
                label="Pattern"
                name="userIdPattern"
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
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const validate = function(values) {
  const errors = {};
  // how do you pass the pattern to this function - not in scope ...
  // might need to research another way to do validations
  // if ( !values.userIdPattern ) {
  //   errors.userIdPattern = "Remember - identify the pattern by the signs of the operations in general form";
  // }
  //
  // if (!values.step2) {
  //   errors.step2 = "hint -set up final expression =()()"
  // }

  // want to run the string against a regex to see if matches form =(blah)(blah) ...
  if (!values.final) {
    errors.final = "Enter your final expression in the form: =(x+e)(x+f)"
  }
  return errors;
}

const mapStateToProps = function(state) {
  // console.log( "in mapStateToProps" );
  // console.log( this );
  return { data: state.trinomial };
}

const afterSubmit = function (result, dispatch) {
  dispatch( reset('TrinomialInputForm') );
}

export default reduxForm({
  validate,
  form: 'TrinomialInputForm',
  onSubmitSuccess: afterSubmit
})( connect(mapStateToProps, actions )(TrinomialShow));
