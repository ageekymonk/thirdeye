import React from 'react';
import {Link, NavLink} from 'react-router-dom'

let Login = (props) => {
    return (
        <div>
            {
                props.auth.user ? <NavLink to="/" onClick={props.signOut}> Logout </NavLink>
                    : <NavLink to="/" onClick={props.signIn}> Login </NavLink>
            }

        </div>
    );
}

export default Login