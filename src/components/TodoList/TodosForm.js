import React, { Component } from 'react';
import { Field, formValues, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addTodo } from '../../Redux/actions';
import { GoPlus } from 'react-icons/go';
import './TodoForm.scss';
import { reset } from 'redux-form';

class TodosForm extends Component {
  renderInput = ({ input }) => {
    return (
      <div className="input--area">
        <input {...input} autoComplete="off" className="input" />
        <button className="add-btn">
          <GoPlus />
        </button>
      </div>
    );
  };

  onSubmit = (formValues) => {
    const { resetForm } = this.props;
    return this.props.addTodo(formValues).then(() => {
      resetForm();
    });
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="todo" component={this.renderInput} />
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.todo) {
    errors.todo = 'You must enter a task';
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'todosForm',
  validate: validate,
})(TodosForm);
// reduxForm receives a single object
export default connect(null, { addTodo })(formWrapped);
