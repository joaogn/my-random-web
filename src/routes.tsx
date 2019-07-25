/* eslint-disable react/prop-types */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import List from './components/RepositoryList';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function Routes() {
    return (
      <Switch>
        <PrivateRoute path="/main" exact component={Main} />
        <Route path="/list" exact component={List} />
        <Route path="/" exact component={Login} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    );
}

export default Routes;
