import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm, reset } from 'redux-form';
import { fetchTrinomial, checkTrinomial } from '../actions';

class TrinomialShow extends Component {
  // this is a react Component life cycle method that auto calls when the page is first loaded or refreshed
  // but not if the state changes and the component is re-rendered
  componentDidMount() {
    this.props.fetchTrinomial();
  }

  // componentWillUpdate() {
  //   this.props.fetchTrinomial()
  // }

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
      </div>
    );
  }

  onSubmit(values) {
    // to access users id of pattern: values.userIdPattern

    // I can check the answer if I want or I can send the answer back with the post API ...
    values["solution1"] = this.props.data.trinomial.solution1;
    values["solution2"] = this.props.data.trinomial.solution2;
    delete values.step1;
    delete values.step2;
    const score = ( values.final === this.props.data.trinomial.solution1 || values.final === this.props.data.trinomial.solution2 ? 1 : -1 );
    values["score"] = score;
    values["username"] = "user1";
    values["pattern"] = this.props.data.trinomial.pattern;
    values["id"] = this.props.data.trinomial.id;
    values["type"] = this.props.data.trinomial.type;

    this.props.checkTrinomial(values, () => {
      // this is a callback function that should be called after the API post
      // window.alert("Your problem was graded");
      console.log("your problem was graded");
      // call fetchTrinomial to get a new problem without reloading the page
      this.props.fetchTrinomial();
    });
  }

  render() {
    // console.log(this.props.data);
    const trinomial = this.props.data.trinomial;
    const superScript2 = "2".sup
    const { handleSubmit } = this.props;

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
            <div>
              <label>Pattern</label>
              <div>
                <Field name="userIdPattern" component="select">
                  <option />
                  <option value="plus_plus">Plus Plus</option>
                  <option value="minus_plus">Minus Plus</option>
                  <option value="minus_minus">Minus Minus</option>
                </Field>
              </div>

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

const mapStateToProps = function(state) {
  // console.log("in mapStateToProps");
  // console.log(state.trinomial);
  return { data: state.trinomial };
}

const afterSubmit = function (result, dispatch) {
  dispatch(reset('TrinomialInputForm'));
}

export default reduxForm({
  form: 'TrinomialInputForm',
  onSubmitSuccess: afterSubmit
})( connect(mapStateToProps, { fetchTrinomial, checkTrinomial })(TrinomialShow) );
