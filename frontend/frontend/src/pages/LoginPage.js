import React from 'react';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="container">
      <div className="form-container">
        <h1>Connexion</h1>
        <form>
          <input type="email" placeholder="Adresse e-mail" />
          <input type="password" placeholder="Mot de passe" />
          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;