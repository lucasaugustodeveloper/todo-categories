import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from '@utils';

// Pages
import Home from '@pages/home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <PrivateRoute path="/categories" component={() => <h1>Page Categories</h1>} />
      <PrivateRoute path="/users" component={() => <h1>Page Users</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
