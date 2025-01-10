import React from 'react';
import ProgressChart from '../components/ProgressChart'; // Import du graphique
import './DashboardPage.css'; // Import du fichier CSS

function DashboardPage() {
  // Données du graphique
  const data = [
    { day: 'Lun', progress: 50 },
    { day: 'Mar', progress: 70 },
    { day: 'Mer', progress: 75 },
    { day: 'Jeu', progress: 85 },
    { day: 'Ven', progress: 95 },
    { day: 'Sam', progress: 100 },
  ];

  return (
    <div className="dashboard-container">
      {/* Titre */}
      <h1>Tableau de Bord</h1>
      <p>Suivez vos progrès de la semaine.</p>

      {/* Graphique centré */}
      <div className="chart-container">
        <ProgressChart data={data} />
      </div>
    </div>
  );
}

export default DashboardPage;