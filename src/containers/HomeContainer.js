import React, { Component } from 'react';

import Home from 'components/Home';

import 'styles/styles.css'
import PropTypes from "prop-types";

class HomeContainer extends Component {

    static childContextTypes = {
        appConfig: PropTypes.object
    }

    getChildContext = () => {
        return { appConfig: this.props.appConfig }
    }

    render() {
        return (
            <Home></Home>
        )
    }
}

export default HomeContainer;
