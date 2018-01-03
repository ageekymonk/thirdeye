import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Route, NavLink, Switch} from 'react-router-dom';
import _ from 'lodash';

import ProjectAdd from 'components/ProjectAdd';
import ProjectEdit from 'components/ProjectEdit'

import 'font-awesome/css/font-awesome.css';
import {AddProject} from "../redux/actions/ProjectAction";


let Project = (props) => {
        return (<div>
            Project List for {props.auth.user ? props.auth.user.displayName : 'Guest'}

            <div className='addButton' onClick={props.addProject}>
                <FontAwesome name='plus'/>
            </div>

            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">Proiect</th>
                    <th scope="col">Notification</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                    { _.map(props.projects, (elem, key) => <tr key={key}>
                        <td scope="col">{elem.project} <FontAwesome name='github'/></td>
                        <td scope="col"> {elem.notify == 'Email' ? <FontAwesome name='envelope'/> : <FontAwesome name='slack'/>} </td>
                        <td scope="col">
                            <div className='project-actions'><NavLink to={"/app/projects/delete/" + (key)}> <FontAwesome name='minus-circle'/></NavLink></div>
                            <div className='project-actions'><NavLink to={"/app/projects/pause/" + (key)}><FontAwesome name='pause-circle'/></NavLink></div>
                            <div className='project-actions'><NavLink to={"/app/projects/edit/" + (key)}> <FontAwesome name='pencil-square-o'/></NavLink></div>
                        </td>
                    </tr>)}
                </tbody>
            </table>

            <ul>

            </ul>

            <Switch>
                <Route exact path='/app/projects/add' render={() => <ProjectAdd handleAddProjectNameChange={props.handleAddProjectNameChange}
                                                                                     handleAddProjectTypeChange={props.handleAddProjectTypeChange}
                                                                                     handleAddProjectNotificationChange={props.handleAddProjectNotificationChange}
                                                                                     handleOnAdd={props.handleOnAdd}
                                                                                     handleCancel={props.handleCancel}/>
                }/>
                <Route path={`/app/projects/delete/:projectId`} render={(p) => {props.handleDeleteProject(p.match.params.projectId);
                return <div></div>}}/>
                <Route path={`/app/projects/pause/:projectId`} render={(p) => <div>pause</div>}/>
                <Route path={`/app/projects/edit/:projectId`} render={(p) => <ProjectEdit handleAddProjectNameChange={props.handleAddProjectNameChange}
                                                                                          handleAddProjectTypeChange={props.handleAddProjectTypeChange}
                                                                                          handleAddProjectNotificationChange={props.handleAddProjectNotificationChange}
                                                                                          handleCancel={props.handleCancel}
                                                                                          handleOnEdit={props.handleOnEdit}
                                                                                          projectId={p.match.params.projectId}
                                                                                          project={props.projects[p.match.params.projectId]}/>}/>
            </Switch>
        </div>)
}

export default Project;