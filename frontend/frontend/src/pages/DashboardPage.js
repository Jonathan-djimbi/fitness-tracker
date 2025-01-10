import React from 'react';
import ProgressChart from '../components/ProgressChart';
import './DashboardPage.css';

function DashboardPage() {
  const mockData = [
    { day: 'Lundi', progress: 60 },
    { day: 'Mardi', progress: 75 },
    { day: 'Mercredi', progress: 80 },
    { day: 'Jeudi', progress: 90 },
    { day: 'Vendredi', progress: 100 },
  ];

  return (
    <div className="dashboard-container">
      <h1>Tableau de Bord</h1>
      <p>Suivez vos progrès de la semaine.</p>
      <ProgressChart data={mockData} />
    </div>
  );
}

export default DashboardPage;