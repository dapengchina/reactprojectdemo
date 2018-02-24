

import { put, takeEvery} from 'redux-saga/effects';
import {delay} from 'redux-saga/lib/internal/utils';

import incrementAsync from './userCounterSaga';
import delUserById from './userDelSaga';





export default function* rootSaga() {
  //监听INCREMENT_ASYNC action动作，当触发INCREMENT_ASYNC动作时，
  //立即执行incrementAsync generator函数
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
  //监听删除用户事件
  yield takeEvery('DELUSER', delUserById);
}
