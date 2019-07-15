import React from 'react';
import { Provider } from 'react-redux';

import RepositoryList from './components/RepositoryList';
import Sidebar from './components/Sidebar';

import store from './store';

const routes = [
    {
      collapsed: false,
      name: 'Dashboard',
      subItemList: [],
    },
    {
      collapsed: true,
      name: 'Pages',
      subItemList: [
            {
            collapsed: true,
            name: 'Pricing',
            subItemList: [
                {
                    collapsed: false,
                    name: 'Dashboard',
                    subItemList: [],
                },
                {
                    collapsed: false,
                    name: 'Dashboard',
                    subItemList: [],
                },
                {
                    collapsed: false,
                    name: 'Dashboard',
                    subItemList: [],
                },
            ],
            },
        ],
    },
    {
        collapsed: false,
        name: 'Dashboard',
        subItemList: [],
    },
    {
        collapsed: true,
        name: 'Pages',
        subItemList: [
              {
              collapsed: true,
              name: 'Pricing',
              subItemList: [
                  {
                      collapsed: false,
                      name: 'Dashboard',
                      subItemList: [],
                  },
                  {
                      collapsed: false,
                      name: 'Dashboard',
                      subItemList: [],
                  },
                ],
            },
        ],
    },

];

const App = () => <Provider store={store}><Sidebar itemList={routes} /></Provider>;

export default App;
