
import React from "react";

const Mdp = () => {
    return(
        <div>
            <h3>Modifier votre mot de passe</h3>
            <div className="new-mdp">
                <input type="password" name="" id="" placeholder="Nouveau mot de passe" />
            </div>
            <div className="confirmation">
                <input type="password" name="" id="" placeholder="Confirmer le nouveau mot de passe" />
            </div>
        </div>
    )
}

export default Mdp