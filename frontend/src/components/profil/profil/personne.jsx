
import React from "react";

const  Personne = () => {
    return(
        <div>
            <div className="avatar">
                <input type="file" src="" alt="" />
            </div>
            <div className="identite">
                <div className="nom">
                    <p>Nom : <input type="text" name="nom" id="" /></p>
                </div>
                <div className="prenom">
                    <p>Prenom : <input type="text" name="prenom" id="" /></p>
                </div>
                <div className="speudo">
                    <p>Speudo : <input type="text" name="speudo" id="" /></p>
                </div>
            </div>
        </div>
    )
}

export default Personne