import React from 'react';
import {connect} from "react-redux";

import AppBar from 'components/AppBar';


class AppBarContainer extends React.Component {
    render() {
        return (
            <AppBar {...this.props}/>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(AppBarContainer);