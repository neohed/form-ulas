import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/layout-form-grid.css'

const LayoutGrid = ({children}) => (
    <div>
        {children}
    </div>
);

LayoutGrid.propTypes = {
    children: PropTypes.node.isRequired
};

export default LayoutGrid;
