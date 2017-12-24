import * as ActionTypes from '../constants';
import * as Actions from '../redux/actions/ProjectAction';

import {takeLatest, call, put} from 'redux-saga/effects';


function fetchProjectsFromFirebase() {
    return ["project1", "project2"]
}

function* fetchProjects() {
    try {
        var projects = yield call(fetchProjectsFromFirebase);
        yield put(Actions.FetchProjectSuccess(projects));
    } catch (e) {
        yield put(Actions.FetchProjectFailure(e.message));
    }
}

export function* fetchProjectSaga() {
    yield takeLatest(ActionTypes.FETCH_PROJECT, fetchProjects)
}

export default [
    fetchProjectSaga,
];