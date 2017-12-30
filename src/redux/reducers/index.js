import {combineReducers} from 'redux';
import auth from './AuthReducer';
import projects from './ProjectReducer';

const rootReducer = {
    auth,
    projects
};

export default rootReducer;