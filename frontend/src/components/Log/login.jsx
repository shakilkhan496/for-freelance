import React, { useState } from "react";
import axios from "axios";
import "../../styles/components/log/login.css";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        import.meta.env.VITE_APILOGIN,
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      window.location.replace("/");
    } catch (error) {
      toast.error("Ce compte n'existe pas");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="group">
          <input
            type="text"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="input_mail"
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Email</label>
        </div>
        <div className="group">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="input_password"
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Mots de passe</label>
        </div>
        <button type="submit" className="input_submit-login">
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;
