/* eslint-disable no-return-assign */
import axios from 'axios';

const setTokenToAxios = (token) =>
  (axios.defaults.headers.Authorization = `Bearer ${token}`);

const removeTokenFromAxios = () => (axios.defaults.headers.Authorization = '');

export {setTokenToAxios, removeTokenFromAxios};
