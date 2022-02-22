import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../../Redux/slice/todoSlice';
import './TodoList.scss';

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const TodoList = (props) => {
  const [todo, setTodo] = useState('');

  const add = () => {
    if (todo === '') {
      alert('Input is Empty');
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
      });
      setTodo('');
      console.log(props.todos);
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
        />
        <button onClick={() => add()} className="add-btn">
          +
        </button>
      </div>
      <div className="todo--items">
        <ul>
          {props.todos.length > 0 &&
            props.todos.map((item) => {
              return <li key={item.id}>{item.item}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
