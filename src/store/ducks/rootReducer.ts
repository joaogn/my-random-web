import { combineReducers } from 'redux';

import repositories from './repositories';

import sidemenu from './sidemenu';

import linkitem from './linkitem';

import user from './user';


export default combineReducers({
  repositories,
  sidemenu,
  linkitem,
  user,
});
