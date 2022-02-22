import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  FETCH_TODOS,
  SIGN_IN,
  SIGN_OUT,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state };
    case ADD_TODO:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
