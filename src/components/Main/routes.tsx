import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from '../RepositoryList';

import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as CalculatorIcon } from '../../assets/icons/avcalculator.svg';


function Routes() {
    return (
      <Switch>
        <Route path="/main/feed" exact component={Feed} />
      </Switch>
    );
}

export const menuRoutes = [
  {
    Logo: HomeIcon,
    name: 'Home',
    path: '/main/feed',
  },
  {
    Logo: CalculatorIcon,
    name: 'Calculator',
    subItemList: [
          {
          name: 'Level',
          subItemList: [
              {
                  name: 'Level A',
              },
              {
                  name: 'Level B',
              },
              {
                  name: 'Level C',
              },
          ],
          },
          {
            name: 'Level 2',
          },
      ],
  },
];

export default Routes;
