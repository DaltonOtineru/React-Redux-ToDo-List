import React, { useRef } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';
import { connect } from 'react-redux';
import { editTodo, deleteTodo } from '../../Redux/actions';

const TodoTextArea = ({ todo, editTodo, deleteTodo, id }) => {
  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const updateTodo = (id, value, e) => {
    if (e.which === 13) {
      editTodo(todo.id, value);
      inputRef.current.disabled = true;
      console.log(todo.id, value);
      console.log(todo);
    }
  };

  return (
    <>
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={todo.todo}
        onKeyPress={(e) => updateTodo(id, inputRef.current.value, e)}
      />
      <div className="buttons">
        <button onClick={() => changeFocus()}>
          <AiFillEdit className="button--update" />
        </button>
        <button>
          <TiDelete
            className="button--delete"
            onClick={() => deleteTodo(todo.id)}
          />
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: Object.values(state.todos),
  };
};

export default connect(mapStateToProps, { deleteTodo, editTodo })(TodoTextArea);
