import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/styles.css';
import PageContent from './PageContent';
import AppBar from './components/AppBar';

class App extends Component {

    static childContextTypes = {
        appConfig: PropTypes.object
    }

    getChildContext = () => {
      return { appConfig: this.props.appConfig };
    }

    render() {
        return (
        <div className='container-fluid App'>

            <AppBar/>

            <div className='row'>

                <div className="col-sm-12">
                    <PageContent/>
                </div>

            </div>
            <div className="row footer-container"/>

        </div>
        );
    }
}

export default App;
