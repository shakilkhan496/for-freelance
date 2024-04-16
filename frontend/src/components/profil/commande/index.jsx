import React from 'react'

function Commande() {
  return (
    <div>
      <div className="en-cour">
        <h3>Commande</h3>
        <p>votre commande est en cour d'acheminement.</p>
      </div>
      <div className="historique">
        <h3>historique de commande</h3>
        <ul>
          <li>réplique de point</li>
          <li>réplique de longue</li>
          <li>réplique de point</li>
        </ul>
      </div>
    </div>
  )
}

export default Commande