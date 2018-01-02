import _ from 'lodash';

import * as ActionTypes from "../../constants";

export default function ProjectReducer(state = [], action) {
    switch(action.type) {
        case ActionTypes.ADD_PROJECT_SUCCESS:
            console.log(state);
            return [...state, action.project];
        case ActionTypes.DELETE_PROJECT_SUCCESS:
            return _.filter(state, (elem) => elem != action.project)
        case ActionTypes.UPDATE_PROJECT:
            var filtered_project = state.filter((elem) => elem.id != action.project.id)
            return [...filtered_project, action.project];
        case ActionTypes.FETCH_PROJECT_SUCCESS:
            console.log(action.projects);
            return action.projects;
        case ActionTypes.FETCH_PROJECT_FAILURE:
            console.log(action.projects);
            return action.projects;
        default:
            return state;
    }
}