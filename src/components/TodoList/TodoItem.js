import React, { useRef } from 'react';
import { AiFillEdit } from 'react-icons/ai';

import { ImCheckmark } from 'react-icons/im';
import { TiDelete } from 'react-icons/ti';

import './TodoItem.scss';

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const updateItem = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <li key={item.id} className="todo--item">
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => updateItem(item.id, inputRef.current.value, e)}
      />
      <div className="buttons">
        <button onClick={() => changeFocus()}>
          <AiFillEdit className="button--update" />
        </button>
        {item.completed === false && (
          <button onClick={() => completeTodo(item.id)}>
            <ImCheckmark className="button--completed" />
          </button>
        )}
        <button onClick={() => removeTodo(item.id)}>
          <TiDelete className="button--delete" />
        </button>
      </div>
      {/* {item.completed && <span className="completed">Done</span>} */}
    </li>
  );
};

export default TodoItem;
