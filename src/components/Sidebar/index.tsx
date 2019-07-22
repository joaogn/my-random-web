/* eslint-disable import/no-named-default */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { default as classNames } from 'classnames';
import { Item } from './interface';
import LinkItem from './linkItem';
import CollapseItem from './collapseItem';
import { ApplicationState } from '../../store';

import './style.css';


interface Props {
  isOpen: boolean;
  itemList: Item[];
}


class Sidemenu extends Component<Props> {
  componentDidMount() {}


  render() {
    const { itemList, isOpen } = this.props;
    return (
      <nav className={classNames('sidebar', { hide: (isOpen) })}>
        <div className="header">
          <div className="header-content">Logo</div>
        </div>
        {
          itemList.map((item) => {
            const {
              name, subItemList, path, Logo,
            } = item;
            if (subItemList !== undefined) {
              return (
                <CollapseItem
                  name={name}
                  Logo={Logo}
                  path={path}
                  level={0}
                  itemList={subItemList}
                />
              );
            }
              return <LinkItem name={name} Logo={Logo} path={path} level={0} />;
            })
            }
      </nav>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  isOpen: state.sidemenu.isOpen,
});

export default connect(mapStateToProps)(Sidemenu);
