import React from 'react'
import Paiement from './paiement'
import Livraison from './livraison'
import Legale from './legale'
import Retour from './retour'
import Plan from './plan'
import Maj from './maj'

function index() {
  return (
    <div>
      <Paiement/>
      <Livraison/>
      <Legale/>
      <Retour/>
      <Plan/>
      <Maj/>
    </div>
  )
}

export default index