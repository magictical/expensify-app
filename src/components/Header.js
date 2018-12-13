import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li><NavLink to="/" activeClassName="is-active" exact={true}>move to Home </NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active">move to create </NavLink></li>
            <li><NavLink to="/edit" activeClassName="is-active">move to edit </NavLink></li>
            <li><NavLink to="/help" activeClassName="is-active">move to help </NavLink></li>
        </ul>
    </header>
);

export default Header;