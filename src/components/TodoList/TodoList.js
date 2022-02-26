import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, fetchTodos, editTodo } from '../../Redux/actions';
import './TodoList.scss';
import './TodoItem.scss';

import TodoTextArea from './TodoTextArea';

class TodoList extends Component {
  // const [todo, setTodo] = useState('');
  componentDidMount() {
    this.props.fetchTodos();
  }

  // const add = () => {
  //   if (todo === '') {
  //     alert('Input is Empty');
  //   } else {
  //     props.addTodo({
  //       id: Math.floor(Math.random() * 1000),
  //       item: todo,
  //       completed: false,
  //       userId: props.userId,
  //     });
  //     setTodo('');
  //     console.log(props);
  //   }
  // };

  // const addItemKeyPress = (e) => {
  //   if (e.which === 13) {
  //     add();
  //   }
  // };

  // const handleChange = (e) => {
  //   setTodo(e.target.value);
  // };

  deleteTodo = (id) => {
    this.props.deleteTodo(id);
  };

  renderList() {
    return this.props.todos.map((todo) => {
      if (todo.userId === this.props.currentUserId) {
        return (
          // <TodoItemTwo />
          <div className="todo" key={todo.id}>
            <div className="todo--inner">
              <TodoTextArea
                todo={todo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
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

//  <div className="todos">
//    <div className="input--area">
//      <input
//       className="todo-input"
//       onChange={(e) => handleChange(e)}
//       value={todo}
//       onKeyPress={(e) => addItemKeyPress(e)}
//     />
//     <button onClick={() => add()} className="add-btn">
//       <GoPlus />
//     </button>
//   </div>
/* {props.todos.length > 0 &&
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
              })} */

// <li>{todo.todo}</li>
// <div className="buttons">
//   <button>
//     <AiFillEdit className="button--update" />
//   </button>
//   <button>
//     {/* <TiDelete
//       className="button--delete"
//       onClick={this.deleteTodo()}
//     />  */}
//     <TodoDelete todo={todo} deleteTodo={deleteTodo} />
//   </button>
// </div>
