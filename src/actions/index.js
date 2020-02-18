import {LOGIN_REQUESTED, LOGIN_SUCCESS, LOGIN_FAILURE, REQUESTED_SEARCH_PRODUCT, PRODUCT_REQUESTED, PRODUCT_FETCH_SUCCESS,REQUESTED_GET_PRODUCT, PRODUCT_GET_REQUESTED, PRODUCT_DETAILS_SUCCESS} from './actionTypes'

import {REQUESTED_LOGIN} from './actionTypes'

// Login
export const loginAction = () => {
    console.log("LOGIN_REQUESTED");
    return {type: LOGIN_REQUESTED}
}

export const loginSuccess = (accessToken) => {
    console.log("loginSuccess");
    return {type: LOGIN_SUCCESS, accessToken: accessToken}
}

export const loginFailure = (errorMsg) => {
    return {type: LOGIN_FAILURE, error: errorMsg}
}

// Search
export const fetchProductAction = () => {
    console.log("PRODUCT_REQUESTED");
    return {type: PRODUCT_REQUESTED}
}

export const fetchProductSuccess = (products) => {
    console.log("PRODUCT_FETCH_SUCCESS");
    return {type: PRODUCT_FETCH_SUCCESS, products}
}
// Product

export const getProductAction = () => {
    console.log("PRODUCT_GET_REQUESTED");
    return {type: PRODUCT_GET_REQUESTED}
}

export const getProductSuccess = (product) => {
    console.log("PRODUCT_DETAILS_SUCCESS");
    return {type: PRODUCT_DETAILS_SUCCESS, product}
}




// saga methods
// Login
export const loginRequest = (loginData) => {
    console.log("payload: "+loginData);
    return {type: REQUESTED_LOGIN, loginData}
}

export const searchProduct = (productId) => {
    console.log("productId: "+productId);
    return {type: REQUESTED_SEARCH_PRODUCT, productId}
}

export const getProduct = (productId) => {
    console.log("productId****************: "+productId);
    return {type: REQUESTED_GET_PRODUCT, productId}
}

// saga


