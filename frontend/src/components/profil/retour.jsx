import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Rating from '../avis'
import '../../styles/components/profil/retour.css'

function retour() {

  const [avisList, setAvisList] = useState([]);
  const userId = localStorage.getItem('userId');

// Effet pour la requête GET des avis au chargement du composant
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`https://backend-jokair.vercel.app//api/avis/${userId}`);
      const data = await response.json();

      if (Array.isArray(data)) {
        setAvisList(data || []);
      } else {
        // Convertissez l'objet unique en tableau
        setAvisList(data ? [data] : []);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des avis :', error);
    }
  };

  fetchData();
}, [userId]);
  

  return (
    <div className='avis-profil'>
      <div className="product-title">
        <h1>
          <span>|</span> Vos Avis
        </h1>
      </div>
      <Rating />
      <p>get de tou les post rating qu'il a fait grace a sont userId</p>
      {avisList.map((avis) => (
        <div key={avis._id}>
          <p>{avis.commentaire}</p>
          <p>{avis.rating}</p>
        </div>
      ))}


      <div className="product-title">
        <h1>
          <span>|</span> Votre Arsenale
        </h1>
      </div>



      <p>faire un retour</p>
      <p>get tout les achats de se compte</p>
      <div className="vos-avis-retour"></div>
      <Link to="/">Nous contacter</Link>
    </div>
  )
}

export default retour