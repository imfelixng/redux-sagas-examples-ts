import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { generateNewNumber } from '../services';
import { numberRequestCompletedAction } from '../actions'
import { actionIds } from '../common'

function* watchNewGeneratedNumberRequestStart() { // saga functions
  yield takeLatest(actionIds.GET_NUMBER_REQUEST_START, requestNewGeneratedNumber); // only receive lastest action
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