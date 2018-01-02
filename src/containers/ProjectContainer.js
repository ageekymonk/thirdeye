import React from 'react';
import {connect} from 'react-redux';

import * as ProjectActions from 'redux/actions/ProjectAction';
import Project from 'components/Project';

import 'font-awesome/css/font-awesome.css';

class ProjectContainer extends React.Component {

    state = {
        user: this.props.auth.user ? this.props.auth.user : {},
        projects: this.props.projects,
        newProject: {}
    };

    constructor(props, context) {
        super(props, context)
        this.addProject = this.addProject.bind(this);
        this.handleDeleteProject = this.handleDeleteProject.bind(this);
        this.handleAddProjectNameChange = this.handleAddProjectNameChange.bind(this);
        this.handleAddProjectTypeChange = this.handleAddProjectTypeChange.bind(this);
        this.handleAddProjectNotificationChange = this.handleAddProjectNotificationChange.bind(this);
        this.handleOnAdd = this.handleOnAdd.bind(this);
    }

    componentWillMount() {
        if (this.state.user)
        {
            this.props.fetchProject(this.state.user);
        }
    }

    componentWillReceiveProps(nextProps) {
        if ((this.state.projects != nextProps.projects) || (this.state.user != nextProps.auth.user)){
            this.setState({user: nextProps.auth.user, projects: nextProps.projects})
        }

        if ((this.state.user != nextProps.auth.user)){
            this.props.fetchProject(nextProps.auth.user)
        }
    }

    addProject() {
        this.props.history.push("/app/projects/add");
    }

    handleDeleteProject(projectId) {
        this.props.deleteProject(projectId);
        this.props.history.push("/app/projects");
    }

    handleAddProjectNameChange(e) {
        this.setState(Object.assign({}, this.state,
            {newProject: Object.assign({}, this.state.newProject, {projectName: e.target.value})}))
    }

    handleAddProjectTypeChange(e) {
        this.setState(Object.assign({}, this.state,
            {newProject: Object.assign({}, this.state.newProject, {projectType: e.target.value})}))
    }

    handleAddProjectNotificationChange(e) {
        this.setState(Object.assign({}, this.state,
            {newProject: Object.assign({}, this.state.newProject, {notificationType: e.target.value})}))
    }

    handleOnAdd(e) {
        e.preventDefault();
        let p = {
            notify: this.state.newProject.notificationType,
            project: this.state.newProject.projectName,
            type: this.state.newProject.projectType
        };
        this.props.addProject(p);
        this.props.history.push("/app/projects");
    }

    render() {
        return <Project {...this.props}
                        addProject={this.addProject}
                        handleDeleteProject={this.handleDeleteProject}
                        handleAddProjectNameChange={this.handleAddProjectNameChange}
                        handleAddProjectTypeChange={this.handleAddProjectTypeChange}
                        handleAddProjectNotificationChange={this.handleAddProjectNotificationChange}
                        handleOnAdd={this.handleOnAdd}
        />
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