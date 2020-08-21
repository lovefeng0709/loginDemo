import * as actionTypes  from './constants/constant.js';
import {call, put, takeEvery} from 'redux-saga/effects';     // 引入相关函数
import * as signUpApi from './api/api'
function* signUp(action){    // 参数是action创建函数返回的action
    try {
         // const user = yield call(axios.post('http://localhost:3001/user/signUp',{key:1}));
          const user = yield call(signUpApi.getSignUpData,action.payload);
          yield put({type: actionTypes.SIGN_UP_SUCCESS, payload: user});
      } catch (e) {
          yield put({type: actionTypes.SIGN_UP_ERROR, message: e.message});
      }
}

function* rootSaga() {     // 在store.js中，执行了 sagaMiddleware.run(rootSaga)
    yield takeEvery(actionTypes.SIGN_UP, signUp)   // 如果有对应type的action触发，就执行goAge()函数
}

export default rootSaga;      // 导出rootSaga，被store.js文件import