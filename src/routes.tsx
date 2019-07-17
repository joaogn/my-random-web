  
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './components/Main/';
import List from './components/RepositoryList';


function Routes() {
    return (
      <Switch>
        <Route path="/main" exact component={Main} />
        <Route path="/list" exact component={List} />
      </Switch>
    );
}

export default Routes;