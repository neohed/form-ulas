import React from 'react';
import PropTypes from 'prop-types'
import '../styles/app.css'

const App = props => <div id="app">
        {props.children}
</div>;

App.propTypes = {
    children: PropTypes.element.isRequired
};

export default App;
