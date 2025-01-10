import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-link" activeClassName="active">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="nav-link" activeClassName="active">
            Connexion
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className="nav-link" activeClassName="active">
            Inscription
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className="nav-link" activeClassName="active">
            Tableau de bord
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;