import { all, takeLatest } from 'redux-saga/effects';

import { RepositoriesTypes } from './repositories/types';
import { load } from './repositories/sagas';

import { UserTypes } from './user/types';
import { userLoad } from './user/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
    takeLatest(UserTypes.LOAD_REQUEST, userLoad),
  ]);
}
