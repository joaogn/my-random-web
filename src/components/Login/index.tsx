/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component } from 'react';
import { Form, Input, SubmitHandler } from '@rocketseat/unform';
import * as Yup from 'yup';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import api from '../../services/api';
import { login } from '../../services/auth';
import { User } from '../../store/ducks/user/types';
import * as UserActions from '../../store/ducks/user/actions';
import { ApplicationState } from '../../store';

import './style.css';

const schema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required('Email is required'),
    password: Yup.string()
      .min(4)
      .required('Password is required'),
  });

interface Data {
    email?: string;
    password?: string;
  }

interface State {
  error: boolean;
}

interface StateProps {
  user: User;
}

interface DispatchProps {
  addUser(user:User): void;
}

type Props = StateProps & DispatchProps & RouteComponentProps<any>;

class Login extends Component<Props, State> {
  state:State = { error: false }

    componentDidMount() {}

    handleSubmit: SubmitHandler<Data> = async (data) => {
        const { history, addUser } = this.props;
        try {
          const response = await api.post('/token', data);
          await login(response.data.token);
          const responseUser = await api.get(`/api/users/email/${data.email}`);
          await addUser(responseUser.data.payload);
          await history.push('/main');
        } catch {
          this.setState({ error: true });
        }
      }

    render() {
      const { error } = this.state;
        return (
          <div className="container-login">
            <div className="wrap-login">
              <Form schema={schema} onSubmit={this.handleSubmit}>
                <span className="login-form-title">Logo</span>
                {
                error
                && (
                <Alert color="danger">
                  Wrong email or password
                </Alert>
                )
                }
                <Input className="input" name="email" type="email" placeholder="Email" />
                <Input className="input" name="password" type="password" placeholder="Senha" />

                <div className="container-login-form-btn">
                  <button className="login-form-btn" type="submit">Login</button>
                </div>
              </Form>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
     UserActions, dispatch,
);


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
