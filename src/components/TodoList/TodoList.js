import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, fetchTodos, editTodo } from '../../Redux/actions';
import './TodoList.scss';
import './TodoItem.scss';

import TodoTextArea from './TodoTextArea';

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderList() {
    return this.props.todos.map((todo) => {
      if (todo.userId === this.props.currentUserId) {
        return (
          <div className="todo" key={todo.id}>
            <div className="todo--inner">
              <TodoTextArea
                todo={todo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                id={todo.id}
              />
            </div>
          </div>
        );
      } else {
        return (
          <div className="todo" key={todo.id}>
            <li>{todo.todo}</li>
          </div>
        );
      }
    });
  }

  render() {
    return (
      <div className="todo--display">
        <div className="todo--items">
          <ul>{this.renderList()}</ul>
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

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(TodoList);
