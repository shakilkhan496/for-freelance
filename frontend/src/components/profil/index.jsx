import React, { useState } from "react";
import { Link } from "react-router-dom";
import Jokair from "../../assets/jokair-blanc.svg";
import Profil from "./profil";
import Adresses from "./adresses";
import Commande from "./commande";
import Like from "./like";
import Retour from "./retour";
import Deconnexion from "./deconnexion";
import "../../styles/components/profil/index.css";

const Compte = () => {
  const [profilModal, setProfilModal] = useState("");
  const [adressesModal, setAdressesModal] = useState("");
  const [commandeModal, setCommandeModal] = useState("");
  const [likeModal, setLikeModal] = useState("");
  const [retourModal, setRetourModal] = useState("");
  const [deconnexionModal, setDeconnexionModal] = useState("");

  const handleModals = (e) => {
    if (e.target.id === "profil") {
      setProfilModal(true);
      setAdressesModal(false);
      setCommandeModal(false);
      setLikeModal(false);
      setRetourModal(false);
      setDeconnexionModal(false);
    } else if (e.target.id === "adresses") {
      setProfilModal(false);
      setAdressesModal(true);
      setCommandeModal(false);
      setLikeModal(false);
      setRetourModal(false);
      setDeconnexionModal(false);
    } else if (e.target.id === "commande") {
      setProfilModal(false);
      setAdressesModal(false);
      setCommandeModal(true);
      setLikeModal(false);
      setRetourModal(false);
      setDeconnexionModal(false);
    } else if (e.target.id === "like") {
      setProfilModal(false);
      setAdressesModal(false);
      setCommandeModal(false);
      setLikeModal(true);
      setRetourModal(false);
      setDeconnexionModal(false);
    } else if (e.target.id === "retour") {
      setProfilModal(false);
      setAdressesModal(false);
      setCommandeModal(false);
      setLikeModal(false);
      setRetourModal(true);
      setDeconnexionModal(false);
    } else if (e.target.id === "deconnexion") {
      setProfilModal(false);
      setAdressesModal(false);
      setCommandeModal(false);
      setLikeModal(false);
      setRetourModal(false);
      setDeconnexionModal(true);
    }
  };

  return (
    <div className="compte">
      <div className="content-link">
        <div>
          <ul>
            <li className="li-img">
              <Link to="/">
                <img src={Jokair} alt="logo Jokair" className="logo-compte" />
              </Link>
            </li>
            <li
              onClick={handleModals}
              id="profil"
              className={profilModal ? "active-btn" : "btn"}
            >
              Profil
            </li>
            <li
              onClick={handleModals}
              id="adresses"
              className={adressesModal ? "active-btn" : "btn"}
            >
              Adresses
            </li>
            <li
              onClick={handleModals}
              id="commande"
              className={commandeModal ? "active-btn" : "btn"}
            >
              Commandes
            </li>
            <li
              onClick={handleModals}
              id="like"
              className={likeModal ? "active-btn" : "btn"}
            >
              Favorie
            </li>
            <li
              onClick={handleModals}
              id="retour"
              className={retourModal ? "active-btn" : "btn"}
            >
              Retour
            </li>
            <li
              onClick={handleModals}
              id="deconnexion"
              className={deconnexionModal ? "active-btn" : "btn"}
            >
              Déconnexion
            </li>
          </ul>
        </div>
      </div>
      <div className="content-page">
        <div>
          {profilModal && <Profil />}
          {adressesModal && <Adresses />}
          {commandeModal && <Commande />}
          {likeModal && <Like />}
          {retourModal && <Retour />}
          {deconnexionModal && <Deconnexion />}
          {!profilModal &&
            !adressesModal &&
            !commandeModal &&
            !likeModal &&
            !retourModal &&
            !deconnexionModal && <p>bienvenue dans votre profil ici vous pourez revenir a l'aceuil, gérer votre profil, vaut adresse enregistré, vaut commant en cour ou déja éfectué, vaut favorie, vaut retoure et enfin vous d'éconecter.</p>}
        </div>
      </div>
    </div>
  );
};

export default Compte;
