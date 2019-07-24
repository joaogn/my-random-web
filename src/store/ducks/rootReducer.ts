import { combineReducers } from 'redux';

import repositories from './repositories';

import sidemenu from './sidemenu';

import linkitem from './linkitem';

import user from './user';

import auth from './auth';

export default combineReducers({
  repositories,
  sidemenu,
  linkitem,
  user,
  auth,
});
