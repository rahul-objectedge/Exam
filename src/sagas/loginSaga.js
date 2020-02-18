import {take, put, call} from 'redux-saga/effects'
import {loginAction, loginSuccess, loginFailure} from '../actions'
import {REQUESTED_LOGIN} from '../actions/actionTypes'
import {API} from './API'

export function* loginUser(userData){       
    yield put(loginAction());
    //API call
    try{
        const loginAccessToken = yield call(API.loginUser, userData);        
        yield put(loginSuccess(loginAccessToken));
    }
    catch(error){
        let errorMsg = "something went wrong please try again"
        yield put(loginFailure(errorMsg));
    }
}

export default function* loginWatcher(){  
    const { loginData } = yield take(REQUESTED_LOGIN)
    yield call(loginUser, loginData)
}