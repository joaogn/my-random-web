import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
// reactstrap components
import { Nav, Collapse } from 'reactstrap';

interface Item {
    collapse: boolean,
  //  path: string,
    name: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
   // component: Record<string, any>,
    subItemList: Item[]

}

interface Props {
    itemList: Item[]
}

class RepositoryList extends Component<Props> {
  componentDidMount() {}

  createMenus(itemList:Item[]) {
      return itemList.map((item) => {
        const { collapse, name, subItemList } = item;
        if (collapse) {
         return (
           <>
             <li>{name}</li>
             <Collapse isOpen={false}>
               <ul>
                 {this.createMenus(subItemList)}
               </ul>
             </Collapse>
           </>
          );
        }
         return <li>{name}</li>;
      });
  }

  render() {
      const { itemList } = this.props;
    return (
      <Nav>
        {this.createMenus(itemList)}
      </Nav>
    );
  }
}

export default RepositoryList;
