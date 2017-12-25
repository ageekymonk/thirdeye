import { all } from 'redux-saga/effects';

import * as ProjectSaga from 'sagas/ProjectSaga';

export default function* rootSaga() {
    yield all([
        ProjectSaga.fetchProjectSaga(),
        ProjectSaga.addProjectSaga()
    ])
}