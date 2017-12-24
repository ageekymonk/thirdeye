import React from 'react';
import {connect} from 'react-redux';

import * as ProjectActions from 'redux/actions/ProjectAction';
import Projects from 'components/Projects';

import 'font-awesome/css/font-awesome.css';

class ProjectContainer extends React.Component {

    state = {
        user: this.props.auth.user ? this.props.auth.user : {},
        projects: this.props.projects
    };

    componentWillMount() {
        this.props.fetchProject(this.state.user);
    }

    componentWillReceiveProps(nextProps) {
        if ((this.state.projects != nextProps.projects) || (this.state.user != nextProps.auth.user)){
            this.setState({user: nextProps.auth.user, projects: nextProps.projects})
        }
    }

    render() {
        return <Projects {...this.props} />
    }
}

function mapStateToProps(state, ownProps) {
    return {
        auth: state.auth,
        projects: state.projects
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addProject: (project) => dispatch(ProjectActions.AddProject(project)),
        deleteProject: (project) => dispatch(ProjectActions.DeleteProject(project)),
        updateProject: (project) => dispatch(ProjectActions.UpdateProject(project)),
        fetchProject: (user) => dispatch(ProjectActions.FetchProject(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);