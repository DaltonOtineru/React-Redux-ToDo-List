import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../Redux/actions';
import TodosForm from './TodosForm';

class TodoCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

// reduxForm receives a single object

export default connect(null, { createStream })(TodoCreate);
