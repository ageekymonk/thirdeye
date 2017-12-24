export default function AuthReducer(state = {}, action) {
    switch(action.type) {
        case 'AUTH_SUCCESS':
            return Object.assign({}, state, {user: action.user});
        default:
            return state;
    }
}