import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistCombineReducers, persistStore} from 'redux-persist';
import storage from 'redux-persist/es/storage';

import rootReducer from '../reducers/index';
import rootSaga from '../../sagas/rootSaga';

const config = {
    key: 'root',
    storage,
};

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = persistCombineReducers(config, rootReducer)


function configureStore(initialState) {
    let store = createStore(reducer,
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );
    let persistor = persistStore(store)
    return { persistor, store }

}

export var {persistor, store} = configureStore();

sagaMiddleware.run(rootSaga);
