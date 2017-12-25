import {takeEvery, call, put} from 'redux-saga/effects';

import * as ActionTypes from '../constants';
import * as Actions from '../redux/actions/ProjectAction';
import AppConfig from 'firebase/Fire';

function fetchProjectsFromFirebase() {
    let user = AppConfig.auth.currentUser;
    return AppConfig.database.ref('users/'+user.uid).once('value').then((data) => data.val())
}

function* fetchProjects() {
    try {
        var projects = yield fetchProjectsFromFirebase();
        yield put(Actions.FetchProjectSuccess(projects));
    } catch (e) {
        yield put(Actions.FetchProjectFailure(e.message));
    }
}

function* addProject({project}) {
    try {
        console.log(project);
        let user = AppConfig.auth.currentUser;
        let newProjectRef = AppConfig.database.ref('users/'+user.uid).push();
        newProjectRef.set(project);
        yield put(Actions.AddProjectSuccess(project))

    } catch (e) {
        yield put(Actions.AddProjectFailure(e.message))
    }
}

export function* fetchProjectSaga() {
    yield takeEvery(ActionTypes.FETCH_PROJECT, fetchProjects)
}

export function* addProjectSaga() {
    yield takeEvery(ActionTypes.ADD_PROJECT, addProject)
}

export default [
    fetchProjectSaga,
    addProjectSaga,
];