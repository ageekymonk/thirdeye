import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';

import PropTypes from 'prop-types';

class AuthorizedRoute extends Component {
    componentWillMount() {
        console.log("Authorized Route")

    }

    render() {
        const { component: Component, appConfig, auth, ...rest } = this.props
        return (
            <Route {...rest} render={props => {
                return _.isEmpty(auth.user) ? <Redirect to="/login" /> :<Component appConfig={appConfig} />
            }} />
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(AuthorizedRoute)