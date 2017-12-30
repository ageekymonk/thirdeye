import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as firebase from 'firebase';

import * as AuthActions from 'redux/actions/AuthAction';
import Login from 'components/Login';

class LoginContainer extends React.Component {

    state = {
        user: this.props.auth ? this.props.auth.user : null
    };

    static contextTypes = {
        appConfig: PropTypes.object
    };

    constructor(props, context) {
        super(props, context);

        // Sign in Firebase using popup auth and Google as the identity provider.
        this.context.appConfig.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
        this.googleSignIn = this.googleSignIn.bind(this);
        this.facebookSignIn = this.facebookSignIn.bind(this);
        this.githubSignIn = this.githubSignIn.bind(this);
        // this.signOut = this.signOut.bind(this)
    }

    googleSignIn() {
        var provider = new firebase.auth.GoogleAuthProvider();
        this.context.appConfig.auth.signInWithPopup(provider);
    }

    facebookSignIn() {
        var provider = new firebase.auth.FacebookAuthProvider();
        this.context.appConfig.auth.signInWithPopup(provider);
    }

    githubSignIn() {
        var provider = new firebase.auth.GithubAuthProvider();
        this.context.appConfig.auth.signInWithPopup(provider);
    }

    signOut() {
        // Sign out of Firebase.
        this.context.appConfig.auth.signOut();
    }

    onAuthStateChanged(user) {
        this.setState({user})
        if (user) {
            this.props.dispatch(AuthActions.AuthSuccess(user))
            this.props.history.push("/app");
        }
    }

    render() {
        return (
            <Login {...this.props}
                   googleSignIn={this.googleSignIn}
                   facebookSignIn={this.facebookSignIn}
                   githubSignIn={this.githubSignIn}/>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(LoginContainer);