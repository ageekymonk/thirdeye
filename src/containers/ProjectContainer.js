import React from 'react';
import {connect} from 'react-redux';

import * as ProjectActions from 'redux/actions/ProjectAction';
import Project from 'components/Project';

import 'font-awesome/css/font-awesome.css';

class ProjectContainer extends React.Component {

    state = {
        user: this.props.auth.user ? this.props.auth.user : {},
        projects: this.props.projects,
        curProject: {}
    };

    constructor(props, context) {
        super(props, context)
        this.addProject = this.addProject.bind(this);
        this.handleDeleteProject = this.handleDeleteProject.bind(this);
        this.handleAddProjectNameChange = this.handleAddProjectNameChange.bind(this);
        this.handleAddProjectTypeChange = this.handleAddProjectTypeChange.bind(this);
        this.handleAddProjectNotificationChange = this.handleAddProjectNotificationChange.bind(this);
        this.handleOnAdd = this.handleOnAdd.bind(this);
        this.handleOnEdit = this.handleOnEdit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
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
            {curProject: Object.assign({}, this.state.curProject, {projectName: e.target.value})}))
    }

    handleAddProjectTypeChange(e) {
        this.setState(Object.assign({}, this.state,
            {curProject: Object.assign({}, this.state.curProject, {projectType: e.target.value})}))
    }

    handleAddProjectNotificationChange(e) {
        this.setState(Object.assign({}, this.state,
            {curProject: Object.assign({}, this.state.curProject, {notificationType: e.target.value})}))
    }

    handleOnAdd(e) {
        e.preventDefault();

        let p = {
            notify: this.state.curProject.notificationType,
            project: this.state.curProject.projectName,
            type: this.state.curProject.projectType
        };
        this.props.addProject(p);
        this.props.history.push("/app/projects");
    }

    handleOnEdit(e) {
        e.preventDefault();
        if (this.state.curProject.notificationType || this.state.curProject.projectName || this.state.curProject.projectType) {
            let p = Object.assign({}, this.state.projects[e.target.id])
            p.notify = this.state.curProject.notificationType ? this.state.curProject.notificationType : p.notify;
            p.project = this.state.curProject.projectName ? this.state.curProject.projectName : p.project;
            p.type = this.state.curProject.projectType ? this.state.curProject.projectType : p.type;
            this.props.updateProject(e.target.id, p);
        }
        this.props.history.push("/app/projects");
    }

    handleCancel(e) {
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
                        handleOnEdit={this.handleOnEdit}
                        handleCancel={this.handleCancel}
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
        updateProject: (projectId, project) => dispatch(ProjectActions.UpdateProject(projectId, project)),
        fetchProject: (user) => dispatch(ProjectActions.FetchProject(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);