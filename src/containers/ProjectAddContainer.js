import React from 'react';
import {connect} from "react-redux";

import * as ProjectActions from 'redux/actions/ProjectAction'

class ProjectAddContainer extends React.Component {

    state = {
        project: ""
    }

    constructor(props, context) {
        super(props, context)
        this.handleOnChange = this.handleOnChange.bind(this)
        this.cancelProject = this.cancelProject.bind(this)
        this.saveProject = this.saveProject.bind(this)
    }

    handleOnChange(event) {
        this.setState({project: event.target.value});
    }

    cancelProject() {

    }

    saveProject() {
        let p = {
            notify: 'email',
            project: this.state.project,
            type: 'github'
        };
        this.props.addProject(p);
    }

    render() {
        return (
            <div className='overlay'>
                <div className='addProjectForm'>
                    <div className='heading'>
                        GitHub Project Name
                    </div>
                    <form>
                        <input className='' placeholder='ghusername/reponame' onChange={this.handleOnChange} type='text'></input>
                        <div className='formActionContainer'>
                            <div className='button' onClick={this.cancelProject}>cancel</div>
                            <div className='button' onClick={this.saveProject}>Add</div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addProject: (project) => dispatch(ProjectActions.AddProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectAddContainer);