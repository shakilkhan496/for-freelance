
import { Link } from "react-router-dom";
import AngleLeft from "../assets/angle-left.svg";
import "../styles/components/erreur.css"

const Erreur = () => {
    return (
        <div className="erreur">
            <Link to="/" className="header-back-home">
                <img src={AngleLeft} alt="icon back to home" className="back-home-icon" />
                <div className="back-home">
                <h3 className="back-home-h3">Retour à la boutique </h3>
                <div className="line-back-home"></div>
                </div>
            </Link>
            <div className="container-all-erreur">
                <div className="container-erreur">
                404
                <br />
                <br />
                    <div className="end-erreur">
                        <span className="span-0-erreur">Page non trouvée</span>
                        <span className="span-1-erreur">Page non trouvée</span>
                        <span className="span-2-erreur">Page non trouvée</span>
                    </div>
                    <br />
                    <span class="right-erreur">Erreur</span>
                </div>
            </div>
        </div>
    )
}

export default Erreur