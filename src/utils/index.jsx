import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { isAuthenticated } from '@services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect t0={{ pathname: '/', state: { from: props.location } }} />
      )}
  />
);

export const setToken = (name, value) => {
  localStorage.setItem(name, value);

  return { message: `${name} salve success` };
};

export const getToken = name => {
  if (localStorage.getItem(name)) {
    return localStorage.getItem(name);
  }

  return false;
};

export default PrivateRoute;
