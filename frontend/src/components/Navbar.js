// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/login">Connexion</Link>
      <Link to="/register">Inscription</Link>
      <Link to="/dashboard">Tableau de bord</Link>
    </nav>
  );
}

export default Navbar;