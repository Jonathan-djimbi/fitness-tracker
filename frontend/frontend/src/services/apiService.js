import axios from 'axios';

// Configuration de base de l'API
const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Remplacer par l'URL de ton backend
});

// Ajouter un token pour les requêtes authentifiées
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Exporter les requêtes
export const registerUser = (data) => API.post('/auth/register', data);
export const loginUser = (data) => API.post('/auth/login', data);
export const fetchProgress = () => API.get('/progress');
export const updateProgress = (data) => API.post('/progress', data);