import React, { useState, useEffect } from 'react'
import '../../styles/components/profil/adresse.css'

function adresses() {

  const [adresse, setAdresse] = useState('');
  const [codepostal, setCodepostal] = useState('');
  const [ville, setVille] = useState('');
  const userId = localStorage.getItem('userId');

  // Effet pour la requête GET du adresse au chargement du composant
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://backend-jokair.vercel.app/api/adresse/${userId}`);
        const data = await response.json();

        setAdresse(data.adresse || '');
        setCodepostal(data.codepostal || '');
        setVille(data.ville || '');
      } catch (error) {
        console.error('Erreur lors de la récupération du adresse :', error);
      }
    };

    fetchData();
  }, []);

    // Fonction pour effectuer la requête PUT lors du clic sur le bouton "modifier"
    const modifierAdresse = async () => {
      try {
        const response = await fetch(`https://backend-jokair.vercel.app/api/adresse/${userId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            adresse,
            codepostal,
            ville,
          }),
        });
  
        if (response.ok) {
          console.log('Adresse mis à jour avec succès !');
        } else {
          console.error('Erreur lors de la mise à jour du adresse.');
        }
      } catch (error) {
        console.error('Erreur lors de la mise à jour du adresse :', error);
      }
    };

    const addNewAdresse = () => {
      // Effectuez ici toute logique nécessaire avant la redirection, si nécessaire
      // ...
      // Redirection vers la page "/mdp"
      window.location.href = '/modifier/adresse';
    };

  return (
    <div className='adresse-profil'>
        <div className="product-title">
          <h1>
            <span>|</span> Adresse
          </h1>
        </div>
      <div className="container-adresse-adresse">
        <div className="form_input_adresse">
          <input 
            className="input_adresse"
            type="text"
            name="adresse"
            placeholder={adresse ? adresse : 'Adresse'}
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
          />
          <label className="label_adresse">Adresse</label>
        </div>
        <div className="container-codepostal-ville">
          <div className="form_input_adresse">
            <input 
              className="input_adresse"
              type="text"
              name="codepostal"
              placeholder={codepostal ? codepostal : 'Code postal'}
              value={codepostal}
              onChange={(e) => setCodepostal(e.target.value)}
            />
            <label className="label_adresse">Code postal</label>
          </div>
          <div className="form_input_adresse">
            <input 
              className="input_adresse"
              type="text"
              name="ville"
              placeholder={ville ? ville : 'Ville'}
              value={ville}
              onChange={(e) => setVille(e.target.value)}
            />
            <label className="label_adresse">Ville</label>
          </div>
        </div>

        <div className="checkbox-facadresse">
          <input type="checkbox" name="" id="" />  Utiliser l'adresse d'expédition comme adresse de facturation
        </div>

        <div className="container-adresseSave-addAdresse">
          <input 
              className='input_from_adresseSave'
              type="button" 
              value="sauvgarder" 
              onClick={modifierAdresse} 
            />
        
            <input 
              className='input_from_addAdresse'
              type="button" 
              value="Ajouter une nouvel adresse"
              onClick={addNewAdresse}
            />
        </div>
      </div>
    </div>
  )
}

export default adresses