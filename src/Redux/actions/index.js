import todos from '../../api/todosApi';
import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  FETCH_TODOS,
  SIGN_IN,
  SIGN_OUT,
} from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const addTodo = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await todos.post('/todos', { ...formValues, userId });

    dispatch({
      type: ADD_TODO,
      payload: response.data,
    });
  };
};
export const fetchTodos = (id) => {
  return async (dispatch) => {
    const response = await todos.get('/todos/');

    dispatch({
      type: FETCH_TODOS,
      payload: response.data,
    });
  };
};

export const editTodo = (id, formValues) => {
  return async (dispatch) => {
    const response = await todos.patch(`/todos/${id}`, formValues);

    dispatch({
      type: EDIT_TODO,
      payload: response.data,
    });
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    await todos.delete(`/todos/${id}`);

    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  };
};

// export const addText = (value) => {
//   return {
//     type: ADD_TEXT,
//     payload: value,
//   };
// };
