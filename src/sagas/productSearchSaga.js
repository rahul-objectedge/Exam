import {take, put, call} from 'redux-saga/effects'
import {fetchProductAction, fetchProductSuccess} from '../actions'
import {REQUESTED_SEARCH_PRODUCT} from '../actions/actionTypes'
import {API} from './API'

export function* fetchProduct(productId){  
    yield put(fetchProductAction());
    //API call
    try{
        const productData = yield call(API.fetchProductData, productId.productId);     
        //console.log("productData: "+JSON.stringify(productData.response.records));
        yield put(fetchProductSuccess(productData.response.records));
    }
    catch(error){
        let errorMsg = "something went wrong please try again"
        //yield put(loginFailure(errorMsg));
    }
}


export default function* searchWatcher(){  
    console.log("in searchWatcher");  
    const { productId } = yield take(REQUESTED_SEARCH_PRODUCT);

    yield call(fetchProduct, productId)
}