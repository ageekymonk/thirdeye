import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import AppBarContainer from 'containers/AppBarContainer';
import ProjectContainer from 'containers/ProjectContainer';
import AppConfig from "../firebase/Fire";


var App = () => {
    return (
        <div className="container-fluid">
            <div className="row header-container">
                <AppBarContainer/>
            </div>
            <div className="row body-container">
                <Switch>
                    <Route path="/app/projects" component={ProjectContainer} />
                </Switch>
            </div>
            <div className="row footer-container">

            </div>
        </div>

    );
};

export default App;