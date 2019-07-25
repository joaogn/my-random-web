import React, { Component } from 'react';
import { Form, Input, SubmitHandler } from '@rocketseat/unform';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { User } from '../../store/ducks/user/types';
import * as UserActions from '../../store/ducks/user/actions';
import api from '../../services/api';

import './style.css';

const schema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required'),
    email: Yup.string()
      .email()
      .required('Email is required'),
    password: Yup.string()
      .min(4)
      .required('Password is required'),
    passwordConfirmation: Yup.string()
         .oneOf([Yup.ref('password'), ''], 'Passwords must match'),
  });

interface Data {
    name?: string;
    email?: string;
    password?: string;
  }

  interface StateProps {
    user: User;
  }

  interface DispatchProps {
    loadRequest(): void
}

type Props = StateProps & DispatchProps;

class EditUser extends Component<Props> {
    componentDidMount() {
      const { loadRequest } = this.props;
      loadRequest();
    }

    handleSubmit: SubmitHandler<Data> = async (data) => {
      const { user } = this.props;
      try {
        await api.put(`/api/users/${user.id}/update`, data);
        const { loadRequest } = this.props;
        loadRequest();
      } catch {
           //   this.setState({ error: true });
      }
    }

  render() {
    const { user } = this.props;
    const formData:Data = {
      name: user.name,
      email: user.email,
    };
      return (
        <div className="container-edit-user">
          <p className="container-edit-user-title"> Edit User</p>
          <div className="wrap-edit-user">
            <Form initialData={formData} schema={schema} onSubmit={this.handleSubmit}>
              <div className="container-edit-user-form-btn">
                <p className="label">Name</p>
                <Input className="input" name="name" type="name" placeholder="Nome" />
              </div>
              <div className="container-edit-user-form-btn">
                <p>Email</p>
                <Input className="input" name="email" type="email" placeholder="Email" />
              </div>
              <div className="container-edit-user-form-btn">
                <p>New Password</p>
                <Input className="input" name="password" type="password" placeholder="Nova Senha" />
              </div>
              <div className="container-edit-user-form-btn">
                <p>Confirm Password</p>
                <Input className="input" name="passwordConfirmation" type="password" placeholder="Repetir Senha" />
              </div>
              <div className="container-edit-user-form-btn">
                <button className="edit-user-form-btn" type="submit">Atualizar</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
