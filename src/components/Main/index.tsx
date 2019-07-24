/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component } from 'react';
import { BrowserRouter, RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Routes, { menuRoutes } from './routes';

import { ApplicationState } from '../../store';

import './styles.css';

interface StateProps {
  isAuth: boolean;
}

type Props = StateProps & RouteComponentProps<any>;

class Main extends Component<Props> {
    componentDidMount() {}

    shouldComponentUpdate() {
      const { isAuth, history } = this.props;
      if (isAuth) {
        return true;
      }
        history.push('/login');
        return false;
    }

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

  const mapStateToProps = (state: ApplicationState) => ({
    isAuth: state.auth.isAuth,
  });


export default connect(mapStateToProps)(withRouter(Main));
