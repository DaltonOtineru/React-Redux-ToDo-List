import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import addTodoReducer from './todoSlice';
import authReducer from './authSlice';

// const rootReducer = combineReducers({
//   todos: addTodoReducer,
//   auth: authReducer,
// });

const store = configureStore({
  reducer: {
    todos: addTodoReducer,
    auth: authReducer,
  },
});

export default store;
