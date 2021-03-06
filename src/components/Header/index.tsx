/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {
 Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import { RouteComponentProps, Link } from 'react-router-dom';

import { logout } from '../../services/auth';

import { ApplicationState } from '../../store';

import * as SideMenuActions from '../../store/ducks/sidemenu/actions';
import * as UserActions from '../../store/ducks/user/actions';


import { User } from '../../store/ducks/user/types';

import './styles.css';

import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';


interface StateProps {
    isOpen: boolean;
    user: User;
}

interface DispatchProps {
    toggleMenu(): void;
    loadRequest(): void
}

interface State {
  isUserOpen: boolean;
}

type Props = StateProps & DispatchProps & RouteComponentProps<any>;

class Header extends Component<Props, State> {
    state:State = { isUserOpen: false }

    componentDidMount() {
      const { loadRequest } = this.props;

      loadRequest();
    }

    handleActivate = async () => {
        const { toggleMenu } = this.props;
        toggleMenu();
    }

    handleUserActivate = async () => {
      const { isUserOpen } = this.state;
      this.setState({ isUserOpen: !isUserOpen });
    }

    handleLogout = async () => {
      await logout();
      const { history } = this.props;
      history.push('/');
    }

    render() {
      const { isUserOpen } = this.state;
      const { user } = this.props;
        return (
          <div className="main-header">
            <div className="header-content">
              <MenuIcon width="24" height="24" onClick={() => this.handleActivate()} />
              <div className="user-content">
                <Dropdown direction="left" isOpen={isUserOpen} toggle={this.handleUserActivate} onClick={() => this.handleUserActivate()}>
                  <DropdownToggle caret tag="span">
                    { user.name }
                  </DropdownToggle>
                  <DropdownMenu className="dropitem">
                    <Link to="/main/user">
                      <DropdownItem>
                        Edit User
                      </DropdownItem>
                    </Link>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => this.handleLogout()}>Logout</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <UserIcon width="32" height="32" className="circle" />
              </div>
            </div>
          </div>
        );
    }
}


const mapStateToProps = (state: ApplicationState) => ({
     isOpen: state.sidemenu.isOpen,
     user: state.user,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  Object.assign({}, SideMenuActions, UserActions), dispatch,
);


export default connect(mapStateToProps, mapDispatchToProps)(Header);
