import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/components/footer/link.css'

function Lien() {
  return (
    <div className='link'>
        <footer className='footer-link'>
                <div className="propo">
                    <p>À PROPOS DE NOUS</p>
                    <ul>
                        <li><Link to="/A-propo-de-nous">Notre fondateur</Link></li>
                        <li><Link to="/A-propo-de-nous">Nous contacter</Link></li>
                        <li><Link to="/A-propo-de-nous">Condition générale de vente</Link></li>
                        <li><Link to="/A-propo-de-nous">Condition générale d'utilisation</Link></li>
                    </ul>
                </div>
                <div className="info">
                    <p>INFORMATIONS</p>
                    <ul>
                        <li><Link to="/information">Méthodes de paiement</Link></li>
                        <li><Link to="/information">Méthodes de livraison</Link></li>
                        <li><Link to="/information">Mentions légales</Link></li>
                        <li><Link to="/information">Retours produits</Link></li>
                        <li><Link to="/information">Plan du site</Link></li>
                        <li><Link to="/information">Mise à jour</Link></li>
                    </ul>
                </div>
                <div className="categories">
                    <p>CATÉGORIES</p>
                    <ul>
                        <li><Link to="/Répliques">Répliques</Link></li>
                        <li><Link to="/Accessoires">Accessoires</Link></li>
                        <li><Link to="/Consommables">Consommables</Link></li>
                        <li><Link to="/Equipements">Equipements</Link></li>
                        <li><Link to="/Nouveautés">Nouveautés</Link></li>
                        <li><Link to="/promo">Promo</Link></li>
                    </ul>
                </div>
                <div className="partenaires">
                    <p>PARTENAIRES</p>
                    <ul>
                        <li><Link to="">Nos partenaires</Link></li>
                        <li><Link to="">Comment devenir partenaire</Link></li>
                    </ul>
                </div>
        </footer>
    </div>
  )
}

export default Lien