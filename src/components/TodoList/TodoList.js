import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
  fetchTodos,
} from '../../Redux/slice/todoSlice';
import './TodoList.scss';
import TodoItem from './TodoItem';
import { GoPlus } from 'react-icons/go';

const TodoList = (props) => {
  const [todo, setTodo] = useState('');

  const add = () => {
    if (todo === '') {
      alert('Input is Empty');
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
        userId: props.userId,
      });
      setTodo('');
      console.log(props);
    }
  };

  const addItemKeyPress = (e) => {
    if (e.which === 13) {
      add();
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="todos">
      <div className="input--area">
        <input
          className="todo-input"
          onChange={(e) => handleChange(e)}
          value={todo}
          onKeyPress={(e) => addItemKeyPress(e)}
        />
        <button onClick={() => add()} className="add-btn">
          <GoPlus />
        </button>
      </div>
      <div className="todo--items">
        <ul>
          {props.todos.length > 0 &&
            props.todos.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodo={props.completeTodo}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
    fetchTodo: (obj) => dispatch(fetchTodos(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
