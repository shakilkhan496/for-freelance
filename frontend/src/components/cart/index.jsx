import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './cartWiget'
import Livraison from './Livraison'
import Header from '../header'
import '../../styles/components/cart/index.css'


export default function cart() {
  return (
    <div>
      <Header />
      <div className="panier">
          <h3>votre panier</h3>
          <Cart />
      </div>
      <div className="livraison">
          <Link to='/livraison'>
            <div>
              <h3>Livraison</h3>
            </div>
          </Link>
      </div>
    </div>
  )
}
