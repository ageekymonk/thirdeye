import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as firebase from 'firebase';

import * as AuthActions from 'redux/actions/AuthAction';
import Login from 'components/Login';

class LoginContainer extends React.Component {

    state = {
        user: this.props.auth.user
    }

    static contextTypes = {
        appConfig: PropTypes.object
    };

    constructor(props, context) {
        super(props, context);

        // Sign in Firebase using popup auth and Google as the identity provider.
        this.context.appConfig.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
        this.signIn = this.signIn.bind(this)
        this.signOut = this.signOut.bind(this)
    }

    signIn() {
        var provider = new firebase.auth.GoogleAuthProvider();
        this.context.appConfig.auth.signInWithPopup(provider);
    }

    signOut() {
        // Sign out of Firebase.
        console.log("Logout")
        this.context.appConfig.auth.signOut();
    }

    onAuthStateChanged(user) {
        this.setState({user})
        this.props.dispatch(AuthActions.AuthSuccess(user))
    }

    render() {
        return (
            <Login {...this.props} signIn={this.signIn} signOut={this.signOut}></Login>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(LoginContainer);