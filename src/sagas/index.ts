import { call, put, throttle, all, fork } from 'redux-saga/effects';
import { generateNewNumber } from '../services';
import { numberRequestCompletedAction } from '../actions'
import { actionIds } from '../common'

function* watchNewGeneratedNumberRequestStart() { // saga functions
  yield throttle(5000, actionIds.GET_NUMBER_REQUEST_START, requestNewGeneratedNumber);
  // takeLatest: only receive lastest action
  // throtle: gọi 1 lần trong x miliseconds
}

function* requestNewGeneratedNumber() {
  const generatedNumber = yield call(generateNewNumber); // call async
  yield put(numberRequestCompletedAction(generatedNumber)) // dispatch to store
}

// Register all your watchers
export const rootSaga = function* root() {
  yield all([
    fork(watchNewGeneratedNumberRequestStart),
  ])
}