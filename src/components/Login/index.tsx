import React, { Component } from 'react';
import { Form, Input, SubmitHandler } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '../../services/api';
import { login, logout } from '../../services/auth';
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


export default class Login extends Component {
    componentDidMount() {}

    handleSubmit: SubmitHandler<Data> = async (data) => {
        console.log(data);
        const response = await api.post('/token', data);
        console.log(response);
        await login(response.data.token);
        const authresponse = await api.get('/api/users/1');
        console.log(authresponse);
        await logout();
        const authnoresponse = await api.get('/api/users/1');
        console.log(authnoresponse);
      }

    render() {
        return (
          <div className="container-login">
            <div className="wrap-login">
              <Form schema={schema} onSubmit={this.handleSubmit}>
                <span className="login-form-title">Logo</span>
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
