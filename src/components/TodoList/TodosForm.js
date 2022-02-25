import React, { Component } from 'react';
import { Field, formValues, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addTodo } from '../../Redux/actions';
import { GoPlus } from 'react-icons/go';
import './TodoForm.scss';

//   <div className="input--area">
//     <input
//       className="todo-input"
//       //   onChange={(e) => handleChange(e)}
//       //   value={todo}
//       //   onKeyPress={(e) => addItemKeyPress(e)}
//     />
//     <button className="add-btn">
//       <GoPlus />
//     </button>
//   </div>

class TodosForm extends Component {
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
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
    this.props.addTodo(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="todo" component={this.renderInput} />

        {/* <button className="ui button primary">Submit</button> */}
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
