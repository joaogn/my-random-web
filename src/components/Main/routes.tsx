  
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from '../RepositoryList';


function Routes() {
    return (
      <Switch>
        <Route path="/main/feed" exact component={Feed} />
      </Switch>
    );
}

export default Routes;