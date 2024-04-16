import React from 'react'
import Reso from './Reso'
import Link from './Link'
import Copirite from './copirite'
import '../../styles/components/footer/footer.css'

function Footer() {
  return (
    <div className='Footer'>
      <footer>
        <Reso />
      </footer>
      <footer>
        <Link />
      </footer>
      <footer>
        <Copirite />
      </footer>
    </div>
  )
}

export default Footer
