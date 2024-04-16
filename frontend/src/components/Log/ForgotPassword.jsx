import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://backend-jokair.vercel.app/api/auth/forgot-password', { email });
      setMessage('Un email a été envoyé pour réinitialiser votre mot de passe.');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
            />
            <button type="submit">Envoyer un email de réinitialisation</button>
        </form>
        {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
