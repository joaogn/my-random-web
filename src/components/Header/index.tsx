import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {
 Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';

import { ApplicationState } from '../../store';

import * as SideMenuActions from '../../store/ducks/sidemenu/actions';

import './styles.css';

import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';


interface StateProps {
    isOpen: boolean;
}

interface DispatchProps {
    toggleMenu(): void;
    readMenu(): void;
}

interface State {
  isUserOpen: boolean;
}

type Props = StateProps & DispatchProps

class Header extends Component<Props, State> {
    state:State = { isUserOpen: false }

    componentDidMount() {}

    handleActivate = async () => {
        const { toggleMenu } = this.props;
        toggleMenu();
    }

    handleUserActivate = async () => {
      const { isUserOpen } = this.state;
      this.setState({ isUserOpen: !isUserOpen });
  }

    render() {
      const { isUserOpen } = this.state;
        return (
          <div className="main-header">
            <div className="header-content">
              <MenuIcon width="24" height="24" onClick={() => this.handleActivate()} />
              <div className="user-content">
                <Dropdown isOpen={isUserOpen} onClick={() => this.handleUserActivate()}>
                  <DropdownToggle caret tag="span"> User</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Logout</DropdownItem>
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
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
        SideMenuActions, dispatch,
);


export default connect(mapStateToProps, mapDispatchToProps)(Header);
