/* eslint-disable no-constant-condition */

import { put, takeEvery, delay } from 'effects';

export function* incrementAsync() {
  //延迟一秒
  yield delay(1000);
  //触发INCREMENT action
  yield put({type: 'INCREMENT'});
}

export default function* rootSaga() {
  //监听INCREMENT_ASYNC action动作，当触发INCREMENT_ASYNC动作时，
  //立即执行incrementAsync generator函数
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}
