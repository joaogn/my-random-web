/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component } from 'react';
import { Form, Input, SubmitHandler } from '@rocketseat/unform';
import * as Yup from 'yup';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Alert } from 'reactstrap';
import api from '../../services/api';
import { login } from '../../services/auth';
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

class Login extends Component<RouteComponentProps<any>> {
  state:State = { error: false }

    componentDidMount() {}

    handleSubmit: SubmitHandler<Data> = async (data) => {
        const { history } = this.props;
        try {
          const response = await api.post('/token', data);
          await login(response.data.token);
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

export default withRouter(Login);
