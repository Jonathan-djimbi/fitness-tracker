import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './RegisterPage.css';

function RegisterPage() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Le nom d'utilisateur est requis.";
    }
    if (!formData.email.includes('@')) {
      newErrors.email = "L'adresse e-mail est invalide.";
    }
    if (formData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        toast.success('Inscription réussie !', {
          position: toast.POSITION.TOP_CENTER,
        });
      }, 2000);
    }
  };

  return (
    <div className="register-page center">
      <ToastContainer />
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>Inscription</h1>
        <input
          type="text"
          name="username"
          placeholder="Nom d'utilisateur"
          value={formData.username}
          onChange={handleInputChange}
        />
        {errors.username && <p className="error-message">{errors.username}</p>}

        <input
          type="email"
          name="email"
          placeholder="Adresse e-mail"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Chargement...' : 'Créer un compte'}
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;