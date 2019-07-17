import { combineReducers } from 'redux';

import repositories from './repositories';

import sidemenu from './sidemenu';

export default combineReducers({
  repositories,
  sidemenu,
});
