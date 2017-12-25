import React from 'react';
import {connect} from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
                        Add Project
                    </div>
                    <Form>
                        <FormGroup>
                            <Label for="RepoName">Project Name</Label>
                            <Input type="text" onChange={this.handleOnChange} name="repo" id="RepoName" placeholder="Project Name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="projectType">Hosted by</Label>
                            <Input type="select" name="projectType" id="exampleSelectMulti">
                                <option>github</option>
                                <option>gitlab</option>
                            </Input>
                        </FormGroup>
                        <Button onClick={this.cancelProject}>Cancel</Button>
                        <Button onClick={this.saveProject}>Add</Button>
                    </Form>
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