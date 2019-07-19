/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Main from './components/Main';
import List from './components/RepositoryList';
import Login from './components/Login';

import { isAuthenticated } from './services/auth';

function Routes() {
    return (
      <Switch>
        <Route PrivateRoute path="/main" exact component={Main} />
        <Route path="/list" exact component={List} />
        <Route path="/login" exact component={Login} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    );
}

export default Routes;
