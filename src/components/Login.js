import React from 'react';

let Login = (props) => {
    return (
<div className="row">
    <div className="col-sm-8 login-description" >
        <h1>Login / Sign Up </h1>
        <hr/>
        You can signup/ Login using your Google, Facebook or Github.
    </div>
    <div className="col-sm-4 login-form" >
        <div className="row">
            <div className="col-sm-8">
                <div className="btn btn-block btn-social btn-google" onClick={props.googleSignIn}>
                    <span className="fa fa-google"></span> Sign in with Google
                </div>
                <div className="btn btn-block btn-social btn-github" onClick={props.githubSignIn}>
                    <span className="fa fa-github"></span> Sign in with Github
                </div>
            </div>
        </div>

    </div>
</div>
    );
};

export default Login