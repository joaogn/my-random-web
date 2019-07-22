/* eslint-disable react/prop-types */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import List from './components/RepositoryList';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

import { isAuthenticated } from './services/auth';

function Routes() {
    return (
      <Switch>
        <Route path="/list" exact component={List} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute isAuthenticated={isAuthenticated()} authenticationPath="/login" exact component={Main} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    );
}

export default Routes;
