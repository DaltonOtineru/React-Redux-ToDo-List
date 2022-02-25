import _ from 'lodash';
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
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case ADD_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_TODO:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
