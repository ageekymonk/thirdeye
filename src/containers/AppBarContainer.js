import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";

import AppBar from 'components/AppBar';
import * as ActionTypes from 'redux/actions/AuthAction';



class AppBarContainer extends React.Component {
    static contextTypes = {
        appConfig: PropTypes.object
    };

    constructor(props, context) {
        super(props, context);
        this.signOut = this.signOut.bind(this)
    }

    signOut() {
        // Sign out of Firebase.
        console.log("Signing Out")
        this.context.appConfig.auth.signOut();
        this.props.dispatch(ActionTypes.AuthSessionEnd())
    }

    render() {
        return (
            <AppBar {...this.props} signOut={this.signOut}/>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(AppBarContainer);