import api from '@utils/api';
import { getToken } from '@utils';

export const isAuthenticated = () => (getToken('token') ? true : false);

export const Login = user => {
  return api.post('/autenticacao', user);
};
