import React from 'react'
import Personne from './personne'
import Contact from './contact'
import Mdp from './mdp'

function profil() {
  return (
    <div>
      <div className="personne">
        <Personne />
      </div>
      <div className="contact">
        <Contact />
      </div>
      <div className="mdp-oublie">
        <Mdp />
      </div>
    </div>
  )
}

export default profil