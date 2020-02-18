import {PRODUCT_REQUESTED, PRODUCT_FETCH_SUCCESS} from '../actions/actionTypes'

const initialState = {
    loading: false,   
    products: [],
    error: ''
}

const productSearchReducer = (state = initialState, action) => {
    switch(action.type){
        case PRODUCT_REQUESTED:
            return {
                ...state,
                loading: true,
                products: [],
                error: '',              
            }
        case PRODUCT_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error:'',
                products: action.products           
            }       
        default : return state
    }
}

export default productSearchReducer;