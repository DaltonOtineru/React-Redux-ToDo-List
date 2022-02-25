import { combineReducers } from 'redux';
import authReducer from './authReducer';
import todosReducer from './todosReducer';
import { reducer as formReducer } from 'redux-form';
import todos from '../../api/todosApi';

export default combineReducers({
  auth: authReducer,
  todos: todosReducer,
  form: formReducer,
});
