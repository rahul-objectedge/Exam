import {PRODUCT_GET_REQUESTED, PRODUCT_DETAILS_SUCCESS} from '../actions/actionTypes'

const initialState = {
    loading: false,   
    product: {},
    error: ''
}

const productDetailReducer = (state = initialState, action) => {
    switch(action.type){
        case PRODUCT_GET_REQUESTED:
            return {
                ...state,
                loading: true,            
                error: '',              
            }
        case PRODUCT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                error:'',
                product: action.product         
            }       
        default : return state
    }
}

export default productDetailReducer;