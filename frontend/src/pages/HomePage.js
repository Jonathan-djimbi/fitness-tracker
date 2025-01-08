import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <h1>Bienvenue sur FitTrack</h1>
      <p>Votre partenaire pour suivre et améliorer votre condition physique au quotidien.</p>
      <div className="features">
        <div className="feature">
          <h3>Suivez vos progrès</h3>
          <p>Visualisez vos performances avec des graphiques clairs et détaillés.</p>
        </div>
        <div className="feature">
          <h3>Atteignez vos objectifs</h3>
          <p>Fixez des objectifs et obtenez des rappels pour rester motivé.</p>
        </div>
        <div className="feature">
          <h3>Analyse intelligente</h3>
          <p>Bénéficiez d'analyses personnalisées basées sur vos données.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;