import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../header'

function Like() {
  return (
    <div>
      <Header />
        <h3>les likes sont actuellemnt en cours de d'évelopement pour en savoir plus <Link to="/mise-à-jour">mise à jour</Link></h3>
    </div>
  )
}

export default Like