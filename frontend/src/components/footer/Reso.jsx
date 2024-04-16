import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/jokair-blanc.svg'
import Youtube from '../../assets/youtube.svg'
import Twitter from '../../assets/twitter.svg'
import Insta from '../../assets/instagram.svg'
import '../../styles/components/footer/reso.css'

function Reso() {
  return (
    <div className="reso">
      <div className="footer-logo">
        <img src={Logo} alt="logo jokair" />
      </div>
      <ul className='ul-reso'>
        <li>
          <Link to="" target="_blank">
            <img src={Youtube} alt="logo youtube" />
          </Link>
        </li>
        <li>
          <Link to="https://twitter.com/Jokair_fr" target="_blank">
            <img src={Twitter} alt="logo twitter" />
          </Link>
        </li>
        <li>
          <Link to="https://www.instagram.com/jokair_fr/" target="_blank">
            <img src={Insta} alt="logo insta" />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Reso