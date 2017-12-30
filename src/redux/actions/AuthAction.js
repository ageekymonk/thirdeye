import * as ActionTypes from '../../constants';

export function AuthSuccess(user) {
    return { type: ActionTypes.AUTH_SUCCESS, user }
}

export function AuthSessionEnd() {
    return { type: ActionTypes.AUTH_SESSION_END, user: {}}
}