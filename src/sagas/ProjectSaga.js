import {takeEvery, call, put} from 'redux-saga/effects';
import _ from 'lodash';

import * as ActionTypes from '../constants';
import * as Actions from '../redux/actions/ProjectAction';
import AppConfig from 'firebase/Fire';

function fetchProjectsFromFirebase() {
    let user = AppConfig.auth.currentUser;
    return AppConfig.database.ref('users/'+user.uid+"/projects").once('value').then((data) => data.val())
}

function* fetchProjects() {
    try {
        let projects = yield fetchProjectsFromFirebase();
        yield put(Actions.FetchProjectSuccess(projects));
    } catch (e) {
        yield put(Actions.FetchProjectFailure(e.message));
    }
}

function* addProject({project}) {
    try {
        let user = AppConfig.auth.currentUser;
        let newProjectRef = AppConfig.database.ref('users/'+user.uid+"/projects").push();
        newProjectRef.set(project);
        yield put(Actions.AddProjectSuccess(project))
        yield put(Actions.FetchProject(user))
    } catch (e) {
        yield put(Actions.AddProjectFailure(e.message))
    }
}

function* deleteProject({projectId}) {
    try {
        let user = AppConfig.auth.currentUser;
        let projectRef = AppConfig.database.ref('users/'+user.uid+'/projects/'+projectId);
        projectRef.remove();
        yield put(Actions.DeleteProjectSuccess(projectId));
        yield put(Actions.FetchProject(user))
    } catch(e) {
        yield put(Actions.DeleteProjectFailure(e.message))
    }
}

export function* fetchProjectSaga() {
    yield takeEvery(ActionTypes.FETCH_PROJECT, fetchProjects)
}

export function* addProjectSaga() {
    yield takeEvery(ActionTypes.ADD_PROJECT, addProject)
}

export function* deleteProjectSaga() {
    yield takeEvery(ActionTypes.DELETE_PROJECT, deleteProject)
}

export default [
    fetchProjectSaga,
    addProjectSaga,
    deleteProjectSaga,
];