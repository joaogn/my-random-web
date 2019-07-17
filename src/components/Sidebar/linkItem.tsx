import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const classNames = require('classnames');

interface Props {
    Logo?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    name: string,
    path?: string,
    level: number;
}

interface State {
    active: boolean
}

export default class LinkItem extends Component<Props, State> {
    state:State = { active: false }

    componentDidMount() {}

    handleActivate = async () => {
        this.setState({ active: !this.state.active });
    }

    createLogo(Logo:React.FunctionComponent<React.SVGProps<SVGSVGElement>> | undefined) {
        if (Logo !== undefined) {
          return <Logo width="24" height="24" className="menu-logo" />;
        }
          return null;


      }

    render() {
        const { name, Logo, level } = this.props;
        const { active } = this.state;
        let { path } = this.props;
        if (path === undefined) {
            path = '';
        }
        return (
          <Link to={path}>
            <li
              key={name}
              className={
                    classNames(
                        { item: (level === 0) },
                        { subItem: (level === 1) },
                        { subItemL2: (level >= 2) },
                        { itemselected: active },
                        )}
              >
              {this.createLogo(Logo)}
              <span>{name}</span>
            </li>
          </Link>
        );

    }

}
