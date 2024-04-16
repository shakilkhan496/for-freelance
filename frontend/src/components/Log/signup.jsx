import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../styles/components/log/signup.css";
import { toast } from "sonner";
import Eye from "../../assets/eye.svg"
import EyeCrossed from "../../assets/eye-crossed.svg"

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [strength, setStrength] = useState("");
  const [showPassword, setShowPassword] = useState(false); // État pour gérer la visibilité du mot de passe

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const response = await axios.post(import.meta.env.VITE_APISINGNUP, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      toast.success("Inscription réussie ! Vous êtes connecté.");
      window.location.href = "/";
    } catch (error) {
      toast.error("Cette adresse email est déjà enregistrée.");
    }
  };

  const getStrength = (password) => {
    console.log(password);
  
    let strengthIndicator = -1;
  
    let upper = false,
      lower = false,
      numbers = false;
  
    for (let index = 0; index < password.length; index++) {
      let char = password.charCodeAt(index);
      if (!upper && char >= 65 && char <= 90) {
        upper = true;
        strengthIndicator++;
      }
  
      if (!numbers && char >= 48 && char <= 57) {
        numbers = true;
        strengthIndicator++;
      }
  
      if (!lower && char >= 97 && char <= 122) {
        lower = true;
        strengthIndicator++;
      }
    }
  
    setStrength(strengthLabels[strengthIndicator] ?? "");
  };

  const handleChangePassword = (event) => {
    const inputValue = event.target.value;
    setPassword(inputValue);
    getStrength(inputValue);
  };

  const handleChangeConfirmPassword = (event) => {
    const inputValue = event.target.value;
    setConfirmPassword(inputValue);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Inverse la visibilité du mot de passe
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <div className="group">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="input_mail"
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Email</label>
        </div>
        <div className="group">
          <input
            type={showPassword ? "text" : "password"} // Affiche le mot de passe en texte clair si showPassword est vrai
            spellCheck="false"
            value={password}
            onChange={handleChangePassword}
            required
            className="input_password"
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Mots de passe</label>
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            {showPassword ? 
            <div>
                <img src={EyeCrossed} alt="Eye Crossed" className="img-eye-mdp" />
            </div> 
            : 
            <div>
                <img src={Eye} alt="Eye" className="img-eye-mdp" />
            </div>
            }
          </span>
        </div>
        <div className="group">
          <input
            type="password"
            name="confirmPassword"
            spellCheck="false"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            required
            className="input_password"
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Confirmer le Mots de passe</label>
        </div>

        <div className={`bars ${strength}`}>
          <div></div>
        </div>
        <div className="strength">{strength && <>Mots de passe {strength}</>}</div>

        <div className="group-condi">
            <input type="checkbox" id="terms" className="group-condi-input" />
            <span className="group-condi-span">
                J'accepte les
                <Link to="/A-propo-de-nous" className="group-condi-span-link"> conditions générales</Link>
            </span>
        </div>
        <button type="submit" className="input_submit-signup">Créer mon compte</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Signup;
