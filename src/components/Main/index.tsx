import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Routes from './routes';

import './styles.css';

import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as CalculatorIcon } from '../../assets/icons/avcalculator.svg';


class Main extends Component {

    componentDidMount() {}


    render() {
      return (
        <BrowserRouter>
          <div className="main">
            <Sidebar itemList={routes} />
            <div className="main-content">
              <Header />
              <div className="main-routes">
                <Routes />
              </div>
            </div>
          </div>
        </BrowserRouter>
      );
    }
  }


export default Main;

const routes = [
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
