import React, { Component } from 'react';
import PropTypes from 'prop-types';

import App from 'components/App';

import 'styles/styles.css'

class AppContainer extends Component {

    static childContextTypes = {
        appConfig: PropTypes.object
    }

    getChildContext = () => {
        return { appConfig: this.props.appConfig }
    }

    render() {
        return (
            <App></App>
        )
    }
}

export default AppContainer;
