const SET_CURRENT_USER = 'SET_CURRENT_USER';
const SET_LOADING_STATUS = 'SET_LOADING_STATUS';
const RESET_AUTH = 'RESET_AUTH';

const setCurrentUser = (currentUser) => {
  console.log('currentUser', currentUser);

  return {
    type: SET_CURRENT_USER,
    payload: currentUser,
  };
};

const setLoadingStatus = (status) => ({
  type: SET_LOADING_STATUS,
  payload: status,
});

const resetAuth = () => ({
  type: RESET_AUTH,
});

export {
  SET_CURRENT_USER,
  SET_LOADING_STATUS,
  RESET_AUTH,
  setCurrentUser,
  setLoadingStatus,
  resetAuth,
};

export default {
  SET_CURRENT_USER,
  SET_LOADING_STATUS,
  RESET_AUTH,
  setCurrentUser,
  setLoadingStatus,
  resetAuth,
};
