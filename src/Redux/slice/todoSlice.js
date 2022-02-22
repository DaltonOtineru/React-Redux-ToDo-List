import { createSlice } from '@reduxjs/toolkit';

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
  },
});

export const { addTodos, removeTodos } = addTodoReducer.actions;
export const todoReducer = addTodoReducer.reducer;
export default addTodoReducer.reducer;
