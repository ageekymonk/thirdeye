import {combineReducers} from 'redux';
import auth from './AuthReducer';
import projects from './ProjectReducer';

const rootReducer = combineReducers({
    auth,
    projects
});

export default rootReducer;