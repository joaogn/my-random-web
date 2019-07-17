import { combineReducers } from 'redux';

import repositories from './repositories';

import sidemenu from './sidemenu';

import linkitem from './linkitem';

export default combineReducers({
  repositories,
  sidemenu,
  linkitem,
});
