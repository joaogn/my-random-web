/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component } from 'react';

import { BrowserRouter, RouteComponentProps, withRouter } from 'react-router-dom';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Routes, { menuRoutes } from './routes';

import './styles.css';

class Main extends Component<RouteComponentProps<any>> {
    componentDidMount() {}


    render() {
      const {
          history,
          staticContext,
          location,
          match,
      } = this.props;
      return (
        <BrowserRouter>
          <div className="main">
            <Sidebar itemList={menuRoutes} />
            <div className="main-content">
              <Header
                history={history}
                staticContext={staticContext}
                location={location}
                match={match}
              />
              <div className="main-routes">
                <Routes />
              </div>
            </div>
          </div>
        </BrowserRouter>
      );
    }
  }


export default withRouter(Main);
