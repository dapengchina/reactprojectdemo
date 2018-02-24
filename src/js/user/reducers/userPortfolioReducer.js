import { combineReducers } from 'redux';

import userReducer from '../reducers/userReducer';
import userDelReducer from '../reducers/userDeleteReducer';

//合并reducer
export default combineReducers({
    userReducer,
    userDelReducer
})