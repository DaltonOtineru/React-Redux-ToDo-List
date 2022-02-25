import React, { Component } from 'react';
import { deleteTodo, editTodo } from '../../Redux/actions';
import { connect } from 'react-redux';
import { AiFillEdit } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';

class TodoItemTwo extends Component {
  render() {
    return (
      <div>
        {/* <li>{todo.todo}</li> */}
        <div className="buttons">
          <button>
            <AiFillEdit className="button--update" />
          </button>
          <button>
            <TiDelete className="button--update" />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: Object.values(state.todos),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { deleteTodo, editTodo })(TodoItemTwo);
