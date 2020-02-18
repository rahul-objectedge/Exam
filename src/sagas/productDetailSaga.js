import {take, put, call} from 'redux-saga/effects'
import {getProductAction, getProductSuccess} from '../actions'
import {REQUESTED_GET_PRODUCT} from '../actions/actionTypes'
import {API} from './API'

export function* getProduct(productId){  
    yield put(getProductAction());
    //API call
    try{
        const productData = yield call(API.getProductData, productId);    
        //console.log("productData: "+JSON.stringify(productData.productList[0]));
        yield put(getProductSuccess(productData.productList[0]));
    }
    catch(error){
        let errorMsg = "something went wrong please try again"
        //yield put(loginFailure(errorMsg));
    }
}


export default function* productWatcher(){  
    console.log("in productWatcher");  
    const { productId } = yield take(REQUESTED_GET_PRODUCT);

    console.log("received "+productId);

    yield call(getProduct, productId)
}