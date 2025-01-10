import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
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
      setSuccess(true);
    }
  };

  return (
    <div className="login-page center">
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>Connexion</h1>
        {success && <p className="success-message">Connexion réussie !</p>}
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

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default LoginPage;