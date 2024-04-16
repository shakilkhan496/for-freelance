import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AngleLeft from "../../assets/angle-left.svg"
import "../../styles/components/cart/livraison.css";

const Form = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [codePostal, setCodepostal] = useState("");
  const [ville, setVille] = useState("");
  const [numeroTel, setNumeroTel] = useState("");
  const [userId, setUserId] = useState("");
  const [cart, setCart] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const cart = localStorage.getItem("cart");
    setUserId(userId);
    setCart(cart);
  }, []);

  const validateForm = () => {
    if (!nom || !prenom || !adresse || !codePostal || !ville || !numeroTel) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const inputs = document.querySelectorAll('.input_from');
  
    // Parcourir chaque input et vérifier s'il est vide
    inputs.forEach((input) => {
      if (!input.value) {
        input.classList.add('invalid'); // Ajouter la classe invalid
      } else {
        input.classList.remove('invalid'); // Supprimer la classe invalid
      }
    });
  
    // Vérifier si le formulaire est valide
    if (!validateForm()) {
      return;
    }
  
    try {
      const response = await axios.post(import.meta.env.VITE_APILIVRAISON, {
        nom,
        prenom,
        adresse,
        codePostal,
        ville,
        numeroTel,
        cart,
        userId,
      });
      console.log(response.data);
  
      // Si l'envoi à l'API est réussi, redirige l'utilisateur vers la page de paiement
      if (response.status === 201) {
        window.location.replace('http://localhost:5173/checkout');
      }
    } catch (error) {
      console.error(error);
    }
  };
  

const handleInput = (event) => {
  event.target.classList.remove('invalid');
}

  return (
    <div>
      <Link to="/" className="header-back-home">
        <img src={AngleLeft} alt="icon back to home" className="back-home-icon" />
        <div className="back-home">
          <h3 className="back-home-h3">Retour à la boutique </h3>
          <div className="line-back-home"></div>
        </div>
      </Link>
      <div className="product-title">
        <h1>
          <span>|</span> Livraison
        </h1>
      </div>
      <form className="from_form">
        <div className="from_1">
            <input
            className="input_from"
            type="text"
            value={nom}
            name="nom"
            onChange={(event) => setNom(event.target.value)}
            onInput={handleInput}
            required
            />
            <span class="span_from_high"></span>
            <span class="span_from_bar"></span>
            <label className="label_from">Nom</label>
        </div>
        <div className="from_2">
            <input
            className="input_from"
            type="text"
            name="prenom"
            value={prenom}
            onChange={(event) => setPrenom(event.target.value)}
            onInput={handleInput}
            required
            />
            <span class="span_from_high"></span>
            <span class="span_from_bar"></span>
            <label className="label_from">Prenom</label>
        </div>
        <div className="from_3">
            <input
            className="input_from"
            type="text"
            name="adresse"
            value={adresse}
            onChange={(event) => setAdresse(event.target.value)}
            onInput={handleInput}
            required
            />
            <span class="span_from_high"></span>
            <span class="span_from_bar"></span>
            <label className="label_from">Adresse</label>
        </div>
        <div className="from_4">
            <input
            className="input_from"
            type="number"
            name="codePostal"
            value={codePostal}
            onChange={(event) => setCodepostal(event.target.value)}
            onInput={handleInput}
            required
            />
            <span class="span_from_high"></span>
            <span class="span_from_bar"></span>
            <label className="label_from">CodePostal</label>
        </div>
        <div className="from_5">
            <input
            className="input_from"
            type="text"
            name="ville"
            value={ville}
            onChange={(event) => setVille(event.target.value)}
            onInput={handleInput}
            required
            />
            <span class="span_from_high"></span>
            <span class="span_from_bar"></span>
            <label className="label_from">Ville</label>
        </div>
        <div className="from_6">
            <input
            className="input_from"
            type="tel"
            name="numeroTel"
            value={numeroTel}
            onChange={(event) => setNumeroTel(event.target.value)}
            onInput={handleInput}
            required
            />
            <span class="span_from_high"></span>
            <span class="span_from_bar"></span>
            <label className="label_from">Numéro de Téléphone</label>
        </div>
        <div className="from_7">
            <div className="input_from_7">
                <p>Récapitulatif</p>
            </div>
        </div>
        <div className="from_8">
          <input type="button" value="Passer à la caisse" className="input_from_8" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default Form;
