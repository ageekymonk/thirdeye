import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import AppBarContainer from 'containers/AppBarContainer';


var App = () => {
    return (
        <div className="container-fluid">
            <div className="row header-container">
                <AppBarContainer/>
            </div>
            <div className="row body-container">

            </div>
            <div className="row footer-container">

            </div>
        </div>

    );
};

export default App;