import {all, fork} from 'redux-saga/effects'
import loginWatcher from './loginSaga'
import searchWatcher from './productSearchSaga'
import productWatcher from './productDetailSaga'

export default function* rootSaga(){   
    yield all([
        fork(loginWatcher),
        fork(searchWatcher),
        fork(productWatcher),
    ])
}

