import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import FontAwesome from 'react-fontawesome';

import LoginContainer from 'containers/LoginContainer';

import '../styles/styles.css'

import 'font-awesome/css/font-awesome.css';

const AppBar = (props) => {
    return (
        <div className='row app-bar'>
            <div className='col-sm-1'> <FontAwesome name="bars"/></div>
            <div className='menu col-sm-11'>
                <div>
                    <NavLink to="/">Home</NavLink>
                </div>

                <div >
                    <button type="button" className="btn btn-outline-primary" onClick={props.signOut}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default AppBar;