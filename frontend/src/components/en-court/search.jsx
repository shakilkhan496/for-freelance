import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../header'

function Search() {
  return (
    <div>
      <Header />
        <h3>la Search bar est actuellemnt en cours de d'évelopement pour en savoir plus <Link to="/mise-à-jour">mise à jour</Link></h3>
    </div>
  )
}

export default Search