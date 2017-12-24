import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Route} from 'react-router-dom'

import ProjectAddContainer from 'containers/ProjectAddContainer'

import 'font-awesome/css/font-awesome.css';


var Projects = (props) => {
    console.log(props)
        return (<div>
            Project List for {props.auth.user ? props.auth.user.displayName : 'Guest'}

            <a href='/projects/add' className='addButton'>
                <FontAwesome name='plus'/>
            </a>

            <ul>
                {props.projects.map((elem) => <li key={elem}>{elem}</li>)}
            </ul>

            <Route exact path='/projects/add' component={ProjectAddContainer}/>


        </div>)
}

export default Projects;