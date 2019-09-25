import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => <nav id="menu">
    <ul>
        <li><Link to="/grid-complex">Grid Complex</Link></li>
        <li><Link to="/compound-interest">Compound Interest</Link></li>
    </ul>
</nav>;

export default Menu;
