import {LOGIN_REQUESTED, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/actionTypes'


const initialState = {
    loading: false,
    accessToken: '',
    isLoggedin: false,
    error: ''
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_REQUESTED:
            return {
                ...state,
                loading: true,
                accessToken: '', // isLoggedin: false if needed
                error: '',
                isLoggedin: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                accessToken: action.accessToken,
                loading: false,
                error:'',
                isLoggedin: true            
            }
        case LOGIN_FAILURE:
                return {
                    ...state,
                    accessToken: '',
                    loading: false,
                    error: action.error.errorMsg,
                    isLoggedin: false            
                }
        
        default : return state
    }
}

export default loginReducer;