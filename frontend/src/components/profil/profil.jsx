import React, { useState, useEffect } from 'react';
import Pp from '../../assets/pp.jpg'
import FileEdit from '../../assets/file-edit.svg'
import '../../styles/components/profil/profil.css'
import { Link } from 'react-router-dom';

function profil() {

    // État des champs de saisie
    const [pseudo, setPseudo] = useState('');
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [pp, setPp] = useState('');
    const [mail, setMail] = useState('');
    const [showInput, setShowInput] = useState(false);
    const userId = localStorage.getItem('userId');

    const showInputHandler = () => {
      setShowInput(true);
    };

    // Effet pour la requête GET au chargement du composant
    useEffect(() => {
      // Fonction asynchrone pour effectuer la requête
      const fetchData = async () => {
        try {
          const response = await fetch(`https://backend-jokair.vercel.app/api/auth/${userId}`);
          const data = await response.json();
  
          // Mettre à jour les champs de saisie avec les données reçues
          setMail(data.email || '');
          // Ajoutez d'autres mises à jour d'état pour d'autres champs si nécessaire
        } catch (error) {
          console.error('Erreur lors de la récupération du profil :', error);
        }
      };
  
      // Appeler la fonction fetchData
      fetchData();
    }, []); // Les crochets vides signifient que cet effet s'exécute une seule fois au chargement du composant
  
    const envoyerEmail = async () => {
      try {
        const response = await fetch('https://backend-jokair.vercel.app/api/auth/modifier-email', {
        method: 'PATCH', // Ou 'PUT' en fonction de votre API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          mail,
          // Ajoutez d'autres champs à envoyer si nécessaire
        }),
      });

        if (response.ok) {
          console.log('Profil mis à jour avec succès !');
          // Vous pouvez ajouter des actions supplémentaires après la mise à jour du profil
        } else {
          console.error('Erreur lors de la mise à jour du profil.');
        }
      } catch (error) {
        console.error('Erreur lors de la mise à jour du profil :', error);
      }
    };

// Effet pour la requête GET du profil au chargement du composant
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`https://backend-jokair.vercel.app/api/profil/${userId}`);
      const data = await response.json();

      setPseudo(data.pseudo || '');
      setPrenom(data.prenom || '');
      setNom(data.nom || '');
      // Notez que pp doit être un lien vers l'image, pas le fichier lui-même
      setPp(data.pp || '');
    } catch (error) {
      console.error('Erreur lors de la récupération du profil :', error);
    }
  };

  fetchData();
}, []);

  // Fonction pour effectuer la requête POST lors du clic sur le bouton "envoyer"
  const envoyerProfil = async () => {
    try {
      const response = await fetch(`https://backend-jokair.vercel.app/api/profil/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pseudo,
          prenom,
          nom,
          pp,
          // Ajoutez d'autres champs à envoyer si nécessaire
        }),
      });

      if (response.ok) {
        console.log('Profil mis à jour avec succès !');
        // Vous pouvez ajouter des actions supplémentaires après la mise à jour du profil
      } else {
        console.error('Erreur lors de la mise à jour du profil.');
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil :', error);
    }
  };

  // Fonction pour effectuer la requête PUT lors du clic sur le bouton "modifier"
  const modifierProfil = async () => {
    try {
      const response = await fetch(`https://backend-jokair.vercel.app/api/profil/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pseudo,
          prenom,
          nom,
          pp,
        }),
      });

      if (response.ok) {
        console.log('Profil mis à jour avec succès !');
      } else {
        console.error('Erreur lors de la mise à jour du profil.');
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil :', error);
    }
  };

  const modifierMdp = () => {
    // Effectuez ici toute logique nécessaire avant la redirection, si nécessaire
    // ...
    // Redirection vers la page "/mdp"
    window.location.href = '/modifier/mdp';
  };

  return (
      <div className="profil">
        <div className="product-title">
          <h1>
            <span>|</span> Profil
          </h1>
        </div>
      <div className="container-profil">
        <div className="user-profil">
          <div className="container-pp-input-profil">
            <div className="pp-profil">
              {pp ? (
                  <img src={pp} alt="photo de profil" className='img-pp' />
                ) : (
                  // Afficher une image par défaut si pp est vide
                  <img src={Pp} alt="photo de profil" className='img-pp' />
                )}
              <button className='btn-show-input-pp' onClick={showInputHandler}>
                <img src={FileEdit} alt="" className='pp-edit' />
              </button>
            </div>
            <div className="pseudo-url-profil">
              <div className="form_input_profil">
                <input
                  className="input_profil"
                  type="text"
                  name="pseudo"
                  placeholder={pseudo ? pseudo : 'pseudo'}
                  value={pseudo}
                  onChange={(e) => setPseudo(e.target.value)}
                />
                <label className="label_profil">Pseudo</label>
              </div>
                {showInput && (
                  <div className='form_input_profil'>
                    <input 
                      className="input_profil"
                      type="text"
                      name="pp"
                      placeholder={pp ? pp : 'url de votre image'}
                      value={pp}
                      onChange={(e) => setPp(e.target.value)}
                    />
                    <label className="label_profil">Url de votre image</label>
                  </div>
                  )}
            </div>
          </div>
          <div className="container-prenom-nom">
            <div className="form_input_profil">
              <input
                className="input_profil"
                type="text"
                name="prenom"
                placeholder={prenom ? prenom : 'prenom'}
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
              <label className="label_profil">Prénom</label>
            </div>
            <div className="form_input_profil">
              <input
                className="input_profil"
                type="text"
                name="nom"
                placeholder={nom ? nom : 'nom'}
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
              <label className="label_profil">Nom</label>
            </div>
            <div className="form_13">
              <input 
                className='input_from_9'
                type="button" 
                value="sauvegarder" 
                onClick={modifierProfil} 
              />
            </div>
          </div>
        </div>

        <div className="container-compte-point">
          <div className="info-compte">
            <div className="form_input_profil">
              <input 
                className="input_profil"
                type="tel" 
                name="tel" 
                placeholder="numéro de téléphone"
              />
              <label className="label_profil">Numéro de téléphone</label>
            </div>
            <div className="form_input_profil">
              <input
                className="input_profil"
                type="text"
                name="mail"
                placeholder={mail ? mail : 'Email'}
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <label className='label_profil'>Email</label>
            </div>
            <div className="container-modifMdp-save">
              <input 
                type="button" 
                value="modifier le mot de passe" 
                className='input_from_9'
                onClick={modifierMdp} 
              />
              <input 
                type="button" 
                value="sauvegarder" 
                className='input_from_9'
                onClick={envoyerEmail} 
              />
            </div>
          </div>


          <br /><br /><br /><br /><br /><br /><br /><br />


          <div className="point-cumuler">
            <h2>Points cumulé</h2>
            <input type="button" value="convertir" />
            <p>187 points</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default profil