import { call, put, takeEvery, all, fork, race, take } from 'redux-saga/effects';
import { generateNewNumber } from '../services';
import { numberRequestCompletedAction } from '../actions'
import { actionIds } from '../common'

function* watchNewGeneratedNumberRequestStart() { // saga functions
  yield takeEvery(actionIds.GET_NUMBER_REQUEST_START, requestNewGeneratedNumber);
  // takeLatest: only receive lastest action
  // throttle: gọi 1 lần trong x miliseconds
  // debounce: gọi sau khi event kết thúc x time
}

function* requestNewGeneratedNumber() {
  const {generatedNumber, cancel} = yield race({
    generatedNumber: call(generateNewNumber),
    cancel: take(actionIds.CANCEL_ONGOING_NUMBER_REQUEST)
  })
  if(!cancel) {
    yield put(numberRequestCompletedAction(generatedNumber))    
  }
}

// Register all your watchers
export const rootSaga = function* root() {
  yield all([
    fork(watchNewGeneratedNumberRequestStart),
  ])
}