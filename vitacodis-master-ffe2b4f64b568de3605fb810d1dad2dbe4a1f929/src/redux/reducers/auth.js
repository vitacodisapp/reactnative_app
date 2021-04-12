import {
  SET_CURRENT_USER,
  SET_LOADING_STATUS,
  RESET_AUTH,
} from '../actions/auth';

const initialState = {
  currentUser: null,
  isLoading: false,
};

const auth = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_CURRENT_USER:
      return {...state, currentUser: payload};
    case SET_LOADING_STATUS:
      return {...state, isLoading: payload};
    case RESET_AUTH:
      return initialState;
    default:
      return state;
  }
};

export default auth;
