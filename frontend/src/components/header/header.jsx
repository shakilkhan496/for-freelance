import React, { useState, useEffect } from "react";
import Log from "../Log";
import Logout from "../Log/Logout";
import logo from "../../assets/jokair-blanc.svg";
import search from "../../assets/search.svg";
import user from "../../assets/user.svg";
import shopping from "../../assets/shopping-cart.svg";
import Cart from "../cart/cart";
import heart from "../../assets/heart.svg";
import "../../styles/components/header.css";

const header = (props) => {

  const { token } = props;

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(savedCart.length);
  }, []);

  // État pour contrôler l'ouverture et la fermeture du menu
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état du menu entre ouvert et fermé
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className='content'>
        <div className="btnMenu">
        <div className={`icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <a href="/"></a>
          {isOpen && (
            <div className="iconClose"></div>
            )}
        </div>
          <div className="btn-content">
            <div className="user">
              {token ? (
                <div>
                  <a href="/profil">
                    <img src={user} alt="logo" />
                  </a>
                  <div className="logout">
                    <div className="espace"></div>
                    <Logout />
                  </div>
                </div>
              ) : (
                <div>
                  <a href="/log">
                    <img src={user} alt="logo" />
                  </a>
                  <div className="sign">
                    <div className="espace"></div>
                    <div className="log-container">
                      <Log signin={true} signup={false} />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div>
              <a href="/en-cour-search" className="search">
                <img src={search} alt="logo" />
              </a>
            </div>
          </div>
        </div>
        <div className="btnHome">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="btnCardHeart">
          <div className="card-cart">
              <a href="/cart">
                <div className="card">
                ({cartCount})
                <img src={shopping} alt="search" />
                </div>
              </a>
            <div className="cart-header">
              <div className="espace"></div>
              <div className="cart-container">
                <Cart />
              </div>
            </div>
          </div>
          <div className="line"></div>
          <a href="/en-cour-like" className="heart">
            <img src={heart} alt="user" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default header;
