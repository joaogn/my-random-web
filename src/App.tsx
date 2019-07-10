import React from 'react';
import { Provider } from 'react-redux';

import RepositoryList from './components/RepositoryList';
import Sidebar from './components/Sidebar';

import store from './store';

const routes = [
    {
      collapse: false,
      name: 'Dashboard',
      subItemList: [],
    },
    {
      collapse: true,
      name: 'Pages',
      subItemList: [
            {
            collapse: true,
            name: 'Pricing',
            subItemList: [
                {
                    collapse: false,
                    name: 'Dashboard',
                    subItemList: [],
                },
                {
                    collapse: false,
                    name: 'Dashboard',
                    subItemList: [],
                },
                {
                    collapse: false,
                    name: 'Dashboard',
                    subItemList: [],
                },
            ],
            },
        ],
    },
    {
        collapse: false,
        name: 'Dashboard',
        subItemList: [],
    },
    {
        collapse: true,
        name: 'Pages',
        subItemList: [
              {
              collapse: true,
              name: 'Pricing',
              subItemList: [
                  {
                      collapse: false,
                      name: 'Dashboard',
                      subItemList: [],
                  },
                  {
                      collapse: false,
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
