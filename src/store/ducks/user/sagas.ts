/* eslint-disable import/no-cycle */
import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* userLoad() {
  try {
    const email = localStorage.getItem('@myrandom-UserEmail');
    const response = yield call(api.get, `/api/users/email/${email}`);

    yield put(loadSuccess(response.data.payload));
  } catch (err) {
    yield put(loadFailure());
  }
}
