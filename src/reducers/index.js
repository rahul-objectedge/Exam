import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import productSearchReducer from './productSearchReducer';
import productDetailReducer from './productDetailReducer';

const rootReducer = combineReducers({loginReducer, productSearchReducer,productDetailReducer});

export default rootReducer;
