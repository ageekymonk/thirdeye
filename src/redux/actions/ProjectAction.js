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

export function DeleteProject(projectId) {
    return { type: ActionTypes.DELETE_PROJECT, projectId }
}

export function DeleteProjectSuccess(project) {
    return { type: ActionTypes.DELETE_PROJECT_SUCCESS, project }
}

export function DeleteProjectFailure(message) {
    return { type: ActionTypes.DELETE_PROJECT_FAILURE, message }
}

export function UpdateProject(projectId, project) {
    return { type: ActionTypes.UPDATE_PROJECT, projectId, project }
}

export function UpdateProjectSuccess(projectId, project) {
    return { type: ActionTypes.UPDATE_PROJECT_SUCCESS, projectId, project }
}

export function UpdateProjectFailure(message) {
    return { type: ActionTypes.UPDATE_PROJECT_FAILURE, message }
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