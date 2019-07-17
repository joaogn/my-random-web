/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-self-import */

import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import { Item } from './interface';
import LinkItem from './linkItem';
import CollapseItem2 from './collapseItem';

import './style.css';


const classNames = require('classnames');

interface Props {
    Logo?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    name: string,
    path?: string,
    level: number;
    itemList: Item[]
}


interface State {
    collapse: boolean
  }

export default class CollapseItem extends Component<Props, State> {
    state:State = { collapse: false }

    componentDidMount() {}

    handleCollapse = async () => {
        const { collapse } = this.state;
        this.setState({ collapse: !collapse });
    }

    createLogo = (Logo:React.FunctionComponent<React.SVGProps<SVGSVGElement>> | undefined) => {
        if (Logo !== undefined) {
          return <Logo width="24" height="24" className="menu-logo" />;
        }
          return null;
      }

    render() {
        const {
          name, Logo, itemList, level,
          } = this.props;
        const { collapse } = this.state;
        return (
          <div>
            <li
              key={name}
              className={classNames(
              { item: (level === 0) },
              { subItem: (level === 1) },
              { subItemL2: (level >= 2) },
              { itemcollapsed: collapse },
              )}
              onClick={() => this.handleCollapse()}
            >
              {this.createLogo(Logo)}
              <span>{name}</span>
              <div className={classNames({ 'seta-cima': collapse }, { 'seta-baixo': !collapse })} />
            </li>
            <Collapse isOpen={collapse}>
              {
                  itemList.map((item) => {
                    const {
                          name, subItemList, path, Logo,
                          } = item;
                    if (subItemList !== undefined) {
                      return (
                        <CollapseItem2
                          name={name}
                          Logo={Logo}
                          path={path}
                          level={level + 1}
                          itemList={subItemList}
                        />
                      );
                    }
                      return <LinkItem name={name} Logo={Logo} path={path} level={level + 1} />;
                  })
              }
            </Collapse>
          </div>

        );
    }
}
