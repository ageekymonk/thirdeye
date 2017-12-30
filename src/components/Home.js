import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import LoginContainer from "../containers/LoginContainer";
import HomeContainer from "../containers/HomeContainer";


var Home = () => {
    return (
        <div className="container-fluid">
            <div className="row header-container">
                <div className='menu col-sm-12'>
                    <div>
                        <NavLink to="/">Home</NavLink>
                    </div>
                    <div>
                        <NavLink to="/login" component={LoginContainer}>Login/Signup</NavLink>
                    </div>
                </div>
            </div>
            <div className="row body-container">
                <switch>
                    <Route path="/login" component={LoginContainer} />
                </switch>
            </div>
            <div className="row footer-container">

            </div>
        </div>

    );
};

export default Home;