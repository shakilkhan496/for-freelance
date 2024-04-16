import React from 'react'
import AngleLeft from '../../assets/angle-left.svg'
import { Link } from 'react-router-dom'

function Mdp() {
  return (
    <div>
      <Link to="/" className="header-back-home">
        <img src={AngleLeft} alt="icon back to home" className="back-home-icon" />
        <div className="back-home">
          <h3 className="back-home-h3">Retour à la boutique </h3>
          <div className="line-back-home"></div>
        </div>
      </Link>
      <p>page de modification du mot de passe</p>
    </div>
  )
}

export default Mdp