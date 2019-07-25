import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';

export interface Props extends RouteProps {
    isAuth: boolean;
}
class PrivateRoute extends Route<Props> {
    public render() {
        const { isAuth } = this.props;
        if (!isAuth) {
            return <Redirect to="/" />;
        }
            return <Route {...this.props} />;
    }
}


const mapStateToProps = (state: ApplicationState) => ({
    isAuth: state.auth.isAuth,
  });


export default connect(mapStateToProps)(PrivateRoute);
