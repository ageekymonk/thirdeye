import * as ActionTypes from '../../constants';

export function AddProject(project) {
    return { type: ActionTypes.ADD_PROJECT, project }
}

export function AddProjectSuccess(project) {
    return { type: ActionTypes.ADD_PROJECT_SUCCESS, project }
}

export function AddProjectFailure(message) {
    return { type: ActionTypes.ADD_PROJECT_FAILURE, message }
}

export function DeleteProject(project) {
    return { type: ActionTypes.DELETE_PROJECT, project }
}

export function UpdateProject(project) {
    return { type: ActionTypes.UPDATE_PROJECT, project }
}

export function FetchProject(user) {
    return { type: ActionTypes.FETCH_PROJECT, user}
}

export function FetchProjectSuccess(projects) {
    return { type: ActionTypes.FETCH_PROJECT_SUCCESS, projects }
}

export function FetchProjectFailure(message) {
    return { type: ActionTypes.FETCH_PROJECT_FAILURE, message}
}