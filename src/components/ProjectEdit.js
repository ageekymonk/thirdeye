import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

let ProjectEdit = (props) => {
    return (
        <div className='overlay'>
            <div className='add-project-form'>
                <div className='heading'>
                    Edit Project
                </div>
                <Form onSubmit={props.handleOnEdit} id={props.projectId}>
                    <FormGroup>
                        <Label for="RepoName">Project</Label>
                        <Input type="text" onChange={props.handleAddProjectNameChange} name="repo" id="editProjectName" defaultValue={props.project.project} />
                        <Label for="projectType">Hosted by</Label>
                        <Input type="select" onChange={props.handleAddProjectTypeChange} name="projectType" id="selectHosting">
                            <option>github</option>
                            <option>gitlab</option>
                        </Input>
                        <Label for="projectType">Notify by</Label>
                        <Input type="select" onChange={props.handleAddProjectNotificationChange} name="projectType" id="selectNotification">
                            <option>Email</option>
                            <option>Slack</option>
                        </Input>
                        <Button className="btn-secondary" onClick={props.handleCancel}>Cancel</Button>
                        <Button className="btn-success" type="submit">Edit</Button>
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
}

export default ProjectEdit;