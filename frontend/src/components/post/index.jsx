import React from 'react'
import Nouveaute from './nouveaute'
import Promo from './promo'
import Replique from './replique'
import Collection from './collection'
import Autre from './autre'
import Produits from './produits'
import Livraison from './livraison'
import '../../styles/components/post/post.css'

const index = () => {

  const userId = localStorage.getItem('userId');

    return(
        <div className='post'>
          <div className='link-post'>
            <a href="/">HOME</a>
          </div>
          <div className='replique-post'>
            <Produits />
            <ul>
              <h3>Catégories</h3>
              <li>nouveauté = 1</li>
              <li>Promo = 2</li>
              <li>Réplique = 3</li>
              <li>Équipements = 4</li>
              <li>Consomable = 5</li>
              <li>Accessoirs = 6</li>
              <li>Amélioration = 7</li>
              <li>autre = 8</li>
            </ul>
            <ul>
              <h3>string</h3>
              <li></li>
              <li></li>
            </ul>
            <ul>
              <h3>number</h3>
              <li>Promo = prix final</li>
              <li>Réplique = "1 = longue", "2 = courte", "3 = poings", "4 = autre"</li>
              <li>Collection = "1 = Équipements", "2 = Asséssoire", "3 = Consomable"</li>
            </ul>
          </div>
          <div className="livraison-post">
            <Livraison />
          </div>
        </div>
    )
}

export default index

