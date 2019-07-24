import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* userLoad() {
  try {
    const userId = localStorage.getItem('@myrandom-UserId');
    const response = yield call(api.get, `/api/users/${userId}`);

    yield put(loadSuccess(response.data.payload));
  } catch (err) {
    yield put(loadFailure());
  }
}
