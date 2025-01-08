import React from 'react';
import './RegisterPage.css';

function RegisterPage() {
  return (
    <div className="container">
      <div className="form-container">
        <h1>Inscription</h1>
        <form>
          <input type="text" placeholder="Nom d'utilisateur" />
          <input type="email" placeholder="Adresse e-mail" />
          <input type="password" placeholder="Mot de passe" />
          <button type="submit">Créer un compte</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;