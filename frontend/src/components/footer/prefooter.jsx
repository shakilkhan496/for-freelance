import React from 'react'
import { Link } from 'react-router-dom'
import Expedition24h from "../../assets/logo-prefooter/expedition24h.svg"
import Livraison from "../../assets/logo-prefooter/livraison.svg"
import Entrepot from "../../assets/logo-prefooter/entrepot.svg"
import Secure from "../../assets/logo-prefooter/paypal.svg"
import '../../styles/components/footer/prefooter.css'

function Prefooter() {
  return (
    <div className='prefooter'>
      <div className="content-prefooter">
        <div className='logo-texte-prefooter'>
            <Link>
                <img src={Expedition24h} alt="Expedition24h" />
                <h3>Expedition</h3>
                <p>en 24h</p>
            </Link>
        </div>
        <div className='logo-texte-prefooter'>
            <Link>
                <img src={Livraison} alt="Livraison" />
                <h3>Livraison OFFERTE</h3>
                <p>dès 150€ d'achats</p>
            </Link>
        </div>
        <div className='logo-texte-prefooter'>
            <Link>
                <img src={Entrepot} alt="Entrepot" />
                <h3>Entrepot</h3>
                <p>en france</p>
            </Link>
        </div>
        <div className='logo-texte-prefooter'>
            <Link>
                <img src={Secure} alt="Secure icon" />
                <h3>Payement Securisé</h3>
                <p>par Paypal</p>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Prefooter