import { call, put } from 'redux-saga/effects';
import api from '../../../services/githubapi';

import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, 'users/joaogn/repos');
  //  console.log(localStorage.getItem('@myrandom-UserId'));
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
