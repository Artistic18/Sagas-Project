import { delay } from 'redux-saga/effects';
import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import { CountUpNew } from '../actions/actions';

function* countUpNew() {
  yield delay(100);
  yield put(CountUpNew());
}

export function* watchCountUP() {
  yield takeLatest('COUNT_UP', countUpNew);
}
