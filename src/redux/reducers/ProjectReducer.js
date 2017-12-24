export default function ProjectReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_PROJECT':
            return [...state,  action.project];
        case 'DELETE_PROJECT':
            return state.filter((elem) => elem != action.project)
        case 'UPDATE_PROJECT':
            var filtered_project = state.filter((elem) => elem.id != action.project.id)
            return [...state, action.project];
        case 'FETCH_PROJECT_SUCCESS':
            return action.projects;
        default:
            return state;
    }
}