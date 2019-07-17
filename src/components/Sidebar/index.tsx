
import React, { Component } from 'react';
import { Item } from './interface'
import LinkItem from './linkItem';
import CollapseItem from './collapseItem';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';

import './style.css';

const classNames = require('classnames');

interface Props {
  isOpen: boolean;
  itemList: Item[];
}


class Sidemenu extends Component<Props> {
  componentDidMount() {}


  render() {
    const { itemList } = this.props;
    return (
        <nav className={classNames('sidebar',{'hide': (this.props.isOpen)})}>
            <div className='header'>
              <div className='header-content'>Logo</div>
            </div>
            { 
              itemList.map((item) =>{
                const { name, subItemList, path, Logo } = item;
                if(subItemList !== undefined){
                  return <CollapseItem name={ name } Logo={Logo} path={ path } level={0} itemList={subItemList} />
                }else {
                  return <LinkItem name={ name } Logo={Logo} path={ path } level={0} />
                }

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