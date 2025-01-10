import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 FitTrack. Tous droits réservés.</p>
      <ul>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/terms">Mentions légales</a></li>
        <li><a href="/privacy">Politique de confidentialité</a></li>
      </ul>
    </footer>
  );
}

export default Footer;