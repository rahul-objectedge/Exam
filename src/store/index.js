
import rootReducer from '../reducers'

import rootSaga from '../sagas'

import { createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'


const confugureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));    
    sagaMiddleware.run(rootSaga);  
   
    return store;
}

export default confugureStore;

