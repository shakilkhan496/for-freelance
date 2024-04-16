import React, { useState } from "react";
import Rating from './rating'
import '../../styles/components/avis/index.css'

const Avis = () => {

    const [score, setScore] = useState(0);
    const [retour, setRetour] = useState("");
    const [showNoteInputRetour, setShowNoteInputRetour] = useState(false);
    const [showNoteInputRating, setShowNoteInputRating] = useState(false);
    const [isNotedRetour, setIsNotedRetour] = useState(false);
    const [isNotedRating, setIsNotedRating] = useState(false);
    const userId = localStorage.getItem('userId');

    const handleValueChange = () => {
      if (!isNotedRetour) {
        setShowNoteInputRetour(true);
      }
    };

    const handleScoreChange = (newScore) => {
      if (!isNotedRating) {
        setScore(newScore);
        setShowNoteInputRating(true);
      }
    };
    
    const handleAvisClick = () => {
      const userId = localStorage.getItem("userId");
      // Appeler votre API pour envoyer la note
      fetch(`${import.meta.env.VITE_APIAVIS}/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userId, commentaire: retour }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Commentaire envoyée avec succès :", data);
          setIsNotedRetour(true);
        })
        .catch((error) => {
          console.error("Erreur lors de l'envoi de la note :", error);
        });
    };

    const handleNoteClick = () => {
      const userId = localStorage.getItem("userId");
      // Appeler votre API pour envoyer la note
      fetch(import.meta.env.VITE_APIAVIS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userId, rating: score }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Note envoyée avec succès :", data);
          setIsNotedRating(true);
        })
        .catch((error) => {
          console.error("Erreur lors de l'envoi de la note :", error);
        });
    };

    return(
        <div className="avis">
            <div className="content-avis">
                <div className="h3-avis">
                    <h3>un retour, un avis, un bug sur le site ?</h3>
                </div>
                <div className="input-avis">
                  <div className="input-avis-text">
                    <input 
                    type="text"
                    onChange={(event) => setRetour(event.target.value)}
                    onClick={handleValueChange}
                    disabled={isNotedRetour}
                    />
                    <span class="span_from_high"></span>
                    <span class="span_from_bar"></span>
                    <label className="label_from">Dite nous le :</label>
                  </div>
                  {showNoteInputRetour && (
                    <div className="input-avis-retour-noter">
                      <input 
                      type="button" 
                      value={isNotedRetour ? "Merci !" : "Noter"} 
                      onClick={handleAvisClick} 
                      disabled={isNotedRetour} 
                      />
                    </div>
                  )}
                </div>
            </div>
            <div className="content-trust">
            <div className="h3-avis">
                    <h3>Notez notre site</h3>
                </div>
                <div className="input-avis-rating">
                    <div className="content-input-avis">
                        <p>Votre note : {score}/5</p>
                        <Rating score={score} onScoreChange={handleScoreChange} disabled={isNotedRating} />
                    </div>
                    {showNoteInputRating && (
                    <div className="input-avis-rating-noter">
                        <input 
                        type="button" 
                        value={isNotedRating ? "Merci !" : "Noter"} 
                        onClick={handleNoteClick} 
                        disabled={isNotedRating} 
                        />
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Avis
