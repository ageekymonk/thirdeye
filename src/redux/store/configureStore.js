import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/index';
import rootSaga from '../../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(initialState) {
    return createStore(rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );
}

export var store = configureStore();

sagaMiddleware.run(rootSaga);
