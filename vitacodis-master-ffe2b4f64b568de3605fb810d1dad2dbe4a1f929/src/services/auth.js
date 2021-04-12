import axios from 'axios';

const signup = async (data) => {
  const res = await axios.post('/buddypress/v1/signup', {
    ...data,
  });

  return res.data;
};

const login = async (data) => {
  const res = await axios.post('/jwt-auth/v1/token', {
    ...data,
  });

  return res.data;
};

const getMyUser = async () => {
  const {data} = await axios.get('/wp/v2/users/me');

  return data;
};

const activate = async (activationKey) => {
  const {data} = await axios.post(
    `/buddypress/v1/signup/activate/${activationKey}`,
  );

  return data;
};

export {signup, login, getMyUser, activate};
export default {signup, login, getMyUser, activate};
