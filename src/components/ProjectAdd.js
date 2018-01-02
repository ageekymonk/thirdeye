import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

let ProjectAdd = (props) => {
    return (
        <div className='overlay'>
            <div className='add-project-form'>
                <div className='heading'>
                    Add Project
                </div>
                <Form>
                    <FormGroup>
                        <Label for="RepoName">Project</Label>
                        <Input type="text" onChange={props.handleAddProjectNameChange} name="repo" id="addProjectName" placeholder="Project Name" />
                        <Label for="projectType">Hosted by</Label>
                        <Input type="select" onChange={props.handleAddProjectTypeChange} name="projectType" id="selectHosting">
                            <option selected>Choose...</option>
                            <option>github</option>
                            <option>gitlab</option>
                        </Input>
                        <Label for="projectType">Notify by</Label>
                        <Input type="select" onChange={props.handleAddProjectNotificationChange} name="projectType" id="selectNotification">
                            <option selected>Choose...</option>
                            <option>Email</option>
                            <option>Slack</option>
                        </Input>
                        <Button className="btn-secondary" onClick={props.handleCancel}>Cancel</Button>
                        <Button className="btn-success" onClick={props.handleOnAdd}>Add</Button>
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
}

export default ProjectAdd;