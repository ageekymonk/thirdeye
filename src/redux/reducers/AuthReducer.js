import * as ActionTypes from '../../constants';

export default function AuthReducer(state = {}, action) {
    switch(action.type) {
        case ActionTypes.AUTH_SUCCESS:
            return Object.assign({}, state, {user: action.user});
        case ActionTypes.AUTH_SESSION_END:
            return Object.assign({}, state, {user: {}});
        default:
            return state;
    }
}