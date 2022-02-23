import { createSlice } from '@reduxjs/toolkit';
import todosApi from '../../api/todosApi';

const initialState = [];

export const addTodoReducer = createSlice({
  name: 'todos',

  initialState,

  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
    fetchTodos: () => {
      return async (dispatch) => {
        const response = await todosApi.get('/todos');

        dispatch({
          payload: response.data,
        });
      };
    },
  },
});

export const { addTodos, removeTodos, updateTodos, completeTodos, fetchTodos } =
  addTodoReducer.actions;
export const todoReducer = addTodoReducer.reducer;
export default addTodoReducer.reducer;
