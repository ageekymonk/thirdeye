import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Dashboard from 'components/Dashboard';
import ProjectContainer from "./containers/ProjectContainer";

class PageContent extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Dashboard}/>
                <Route exact path='/projects' component={ProjectContainer}/>
                <Route exact path='/projects/add' component={ProjectContainer}/>
                <Route exact path='/releases' component={ProjectContainer}/>
            </Switch>
        )
    }
}

export default PageContent;