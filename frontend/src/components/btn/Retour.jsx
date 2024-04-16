import React from 'react'
import AngleLeft from '../../assets/angle-left.svg'
import "./Retour.css"

function Retour() {
  return (
    <div onClick={() => history.go(-1)} className='retour-component'>
        <img src={AngleLeft} alt="icon back" className="back-home-icon" />
        <div className='container-back-line-retour'>
          <h3 className="back-home-h3">Retour</h3>
          <div className="line-retour"></div>
        </div>
    </div>
  )
}

export default Retour