import api from '@utils/api';
import { setToken, getToken } from '@utils';

export const isAuthenticated = () => (getToken('token') ? true : false);

export const Login = user => {
  api
    .post('/autenticacao', user)
    .then(res => {
      if (!getToken('token')) {
        return setToken('token', res.data.token);
      }

      return setToken('token', res.data.token);
    })
    .catch(error => console.error('error', error));
};
