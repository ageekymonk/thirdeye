import React from 'react';

import PageContent from 'PageContent';
import AppBarContainer from 'containers/AppBarContainer';

var App = () => {
    return (
        <div className='container-fluid app'>
            <div className='row'> <AppBarContainer/> </div>
            <div className='row'> <PageContent/> </div>
            <div className="row footer-container"/>
        </div>
    );
};

export default App;