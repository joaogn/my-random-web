/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Collapse } from 'react-collapse';

import test from '../../assets/icons/like.svg';
import './style.css';

const classNames = require('classnames');


interface Item {
    collapsed: boolean,
  //  path: string,
    name: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
   // component: Record<string, any>,
    subItemList: Item[]

}

interface Props {
    itemList: Item[]
}

class Sidebar extends Component<Props> {
  componentDidMount() {}

  createSubItemL2(itemList:Item[]) {
    return itemList.map((item) => {
      const { collapsed, name, subItemList } = item;
      if (subItemList.length > 0) {
       return (
         <>
           <li className={classNames('subItemL2')}>
             <a>{name}</a>
           </li>
           <Collapse isOpened={collapsed}>
             {this.createSubItemL2(subItemList)}
           </Collapse>
         </>
        );
      }
       return (
         <li className="subItemL2">
           <a>{name}</a>
         </li>
        );
    });
  }

  createSubItemL1(itemList:Item[]) {
    return itemList.map((item) => {
      const { collapsed, name, subItemList } = item;
      if (subItemList.length > 0) {
       return (
         <>
           <li className="subItem">
             <a>{name}</a>
             <div className="seta-cima" />
           </li>
           <Collapse isOpened={collapsed}>
             {this.createSubItemL2(subItemList)}
           </Collapse>
         </>
        );
      }
       return (
         <li className="subItem">
           <a>{name}</a>
         </li>
        );
    });
  }

  createMenus(itemList:Item[]) {
      return itemList.map((item) => {
        const { collapsed, name, subItemList } = item;
        if (subItemList.length > 0) {
         return (
           <>
             <li className="item">
               <img src={test} />
               <a>{name}</a>
               <div className="seta-cima" />
             </li>
             <Collapse isOpened={collapsed}>
               {this.createSubItemL1(subItemList)}
             </Collapse>
           </>
          );
        }
         return (
           <li className="item">
             <img src={test} />
             <a>{name}</a>
           </li>
          );
      });
  }

  render() {
      const { itemList } = this.props;
    return (
      <nav className="sidebar">
        <div className="header">
          <p>Logo</p>

          <hr />
        </div>

        {this.createMenus(itemList)}
      </nav>
    );
  }
}

export default Sidebar;
