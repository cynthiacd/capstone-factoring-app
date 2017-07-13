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

  // this is a react Component life cycle method that auto calls when the page is first loaded or refreshed
  // but not if the state changes and the component is re-rendered
  // componentDidMount() {
    // this.props.fetchTrinomial();
  // }

  // componentWillReceiveProps() {
  //   this.props.fetchTrinomial();
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if ( !this.props.data ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // componentWillReceiveProps() {
  //
  // }

  // this causes an infinite loop - good way to test api calls :P
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.data !== this.props.data)
  //     { this.props.fetchTrinomial(); }
  // }

  // this works - my own custom method that will run if !trinomial in render
  getTrinomial() {
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
      // call fetchTrinomial or componentDidMount to get a new problem without reloading the page
      // this.props.fetchTrinomial();
      // but you should be able to use another react built in method to do this - your app should react to the change in state
      // but values in form still showing so want to reset/clear out form data
      // see your bookmark on redux form about how to do this
    });
  }

  render() {
    // console.log(this.props.data);
    const trinomial = this.props.data.trinomial;
    const superScript2 = "2".sup
    const { handleSubmit } = this.props;

    // just like you were taught - this conditional is important cause of async issues
    if (!trinomial) {
      this.getTrinomial();
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
