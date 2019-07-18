
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import List from './components/RepositoryList';
import Login from './components/Login';


function Routes() {
    return (
      <Switch>
        <Route path="/main" exact component={Main} />
        <Route path="/list" exact component={List} />
        <Route path="/login" exact component={Login} />
      </Switch>
    );
}

export default Routes;
