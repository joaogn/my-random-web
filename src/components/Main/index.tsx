import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Routes, { menuRoutes } from './routes';

import './styles.css';

class Main extends Component {
    componentDidMount() {}


    render() {
      return (
        <BrowserRouter>
          <div className="main">
            <Sidebar itemList={menuRoutes} />
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
