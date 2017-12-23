import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import * as ProjectSaga from '../sagas/ProjectSaga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(initialState) {
    return createStore(rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );
}

export var store = configureStore();

sagaMiddleware.run(ProjectSaga.fetchProjectSaga);
