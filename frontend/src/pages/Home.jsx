import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/header'
import Prefooter from "../components/footer/prefooter"
import Footer from '../components/footer/Footer'
import Nouveaute from '../components/product/nouveaute'
import Promo from '../components/product/promo'
import Replique from './links/product/replique/repliqueLink'
import Accessoire from '../components/product/home/collection'
import Autre from '../components/product/home/autre'
import Avis from '../components/avis'
import '../styles/pages/home.css'

const Home = (props) => {

    const { isAdmin } = props;

    const [divClass, setDivClass] = useState('default');

    const handleMouseOver = () => {
      setDivClass('changed');
    };
  
    const handleMouseOut = () => {
      setDivClass('default');
    };

    const [cartCount, setCartCount] = useState(0);

    return(
        <div className="Home">
            <div className='header'>
                <Header cartCount={cartCount} />
            </div>
            <div className="titly">
            {isAdmin ?(
                <div>
                    <a href="/admin">admin</a>
                </div>
            ): null}
                <div className="new1">
                    <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <Link to="/Nouveautés">
                            Nouveautés
                        </Link>
                    </h1>
                    <span></span>
                </div>
                <div className={divClass}>
                    <Nouveaute setCartCount={setCartCount} />
                </div>
                <div className="new2">
                    <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <Link to="/promo">
                            Promo
                        </Link>
                    </h1>
                    <span></span>
                </div>
                <div className={divClass}>
                    <Promo setCartCount={setCartCount} />
                </div>
                <div className="new3">
                    <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <Link to="/Répliques">
                            Répliques
                        </Link>
                    </h1>
                    <span></span>
                </div>
                <div className={divClass}>
                    <Replique />
                </div>
                <div className="new4">
                    <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <Link to="Collections">Collection</Link>
                    </h1>
                    <span></span>
                </div>
                <div className={divClass}>
                    <Accessoire />
                </div>
                <div className="new2">
                    <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <Link to="Autre">Autre</Link>
                    </h1>
                    <span></span>
                </div>
                <div className={divClass}>
                    <Autre />
                </div>
                <div className="new3">
                    <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <Link to="/avis">Votre Avis</Link> 
                    </h1>
                    <span></span>
                </div>
                <div className={divClass}>
                    <Avis />
                </div>
            </div>
            <div>
                <Prefooter/>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Home;