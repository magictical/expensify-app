import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <ul>
      <li>
        <NavLink to="/" activeClassName="is-active" exact={true}>
          DashBoard{' '}
        </NavLink>
      </li>
      <li>
        <NavLink to="/create" activeClassName="is-active">
          Create{' '}
        </NavLink>
      </li>
      <li>
        <NavLink to="/edit" activeClassName="is-active">
          EditExpense{' '}
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
