import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export interface Props extends RouteProps {
    isAuthenticated: boolean;
    authenticationPath: string;
}

export default class PrivateRoute extends Route<Props> {
    public render() {
        let redirectPath = '';
        if (!this.props.isAuthenticated) {
            redirectPath = this.props.authenticationPath;
        }

        if (redirectPath) {
            const renderComponent = () => (<Redirect to={{ pathname: redirectPath }} />);
            return <Route {...this.props} component={renderComponent} render={undefined} />;
        }
            return <Route {...this.props} />;
    }
}
