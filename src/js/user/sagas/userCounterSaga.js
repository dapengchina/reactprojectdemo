import { put, takeEvery} from 'redux-saga/effects';
import {delay} from 'redux-saga/lib/internal/utils';

export function* incrementAsync() {
  //循环执行
  while(true){
      //延迟一秒
      yield delay(1000);
      //触发INCREMENT action
      yield put({type: 'INCREMENT'});
  }
  
}