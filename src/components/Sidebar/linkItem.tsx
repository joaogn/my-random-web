/* eslint-disable import/no-named-default */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { default as classNames } from 'classnames';
import { LinkItem } from '../../store/ducks/linkitem/types';
import { ApplicationState } from '../../store';

import * as LinkitemActions from '../../store/ducks/linkitem/actions';

import './style.css';


interface StateProps {
  Logo?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  name: string,
  path?: string,
  level: number;
  linkitens: LinkItem[];
}

interface DispatchProps {
  changeLink(linkitem:LinkItem): void
  addItem(linkitem:LinkItem): void
}

interface State {
    active: boolean
}

type Props = StateProps & DispatchProps


class LinkItens extends Component<Props, State> {
    state:State = { active: false }

    constructor(props:Props) {
      super(props);
      const { addItem, name } = this.props;
      const linkitem = { name, active: false };
      addItem(linkitem);
    }


    componentDidMount() {}

    shouldComponentUpdate() {
      const { name, linkitens } = this.props;
      linkitens.map((linkitem) => {
          if (linkitem.name === name) {
              this.state.active = linkitem.active;
          }
          return linkitem;
      });
      return true;
  }

  handleActivate = async () => {
    const { changeLink, name, linkitens } = this.props;
    linkitens.map((linkitem) => {
        if (linkitem.name === name) {
            linkitem.active = true;
            changeLink(linkitem);
        }
        return linkitem;
    });
}

    createLogo = (Logo:React.FunctionComponent<React.SVGProps<SVGSVGElement>> | undefined) => {
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
              onClick={() => this.handleActivate()}
            >
              {this.createLogo(Logo)}
              <span>{name}</span>
            </li>
          </Link>
        );
    }
}


const mapStateToProps = (state: ApplicationState) => ({
  linkitens: state.linkitem.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  LinkitemActions, dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(LinkItens);
