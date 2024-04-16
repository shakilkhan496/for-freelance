import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Log from "../Log";
import Logout from "../Log/Logout";
import logo from "../../assets/jokair-blanc.svg";
import search from "../../assets/search.svg";
import user from "../../assets/user.svg";
import shopping from "../../assets/shopping-cart.svg";
import Cart from "../cart/cartWiget";
import heart from "../../assets/heart.svg";
import "../../styles/components/header.css";

const Header = ({ cartCount }) => {
  const token = localStorage.getItem("token");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header">
      {isSmallScreen ? (
        <div>
          {isOpen && (
            <nav className={`nav ${isOpen ? "open" : ""}`}>
              <div className="content-link-header">
                <Link to="/Nouveautés" className="content-link-header-Link">
                  Nouveautés
                </Link>
              </div>
              <div className="content-link-header">
                <Link to="/Répliques" className="content-link-header-Link">
                  Répliques
                </Link>
                <Link to="" className="content-link-header-Link">
                  Équipements
                </Link>
              </div>
              <div className="content-link-header">
                <Link to="/Consommables" className="content-link-header-Link">
                  Consomable
                </Link>
                <Link to="/Accessoires" className="content-link-header-Link">
                  Accessoirs
                </Link>
              </div>
              <div className="content-link-header">
                <Link to="/Promo" className="content-link-header-Link">
                  Promos
                </Link>
                <Link to="" className="content-link-header-Link">
                  Packs
                </Link>
              </div>
              <div className="content-link-header">
                <Link to="" className="content-link-header-Link">
                  Marques
                </Link>
                <Link to="" className="content-link-header-Link">
                  Blog
                </Link>
              </div>
              <div className="content-link-header">
                <Link to="" className="content-link-header-Link">
                  Occasion
                </Link>
                <Link to="" className="content-link-header-Link">
                  Revendre
                </Link>
              </div>
              {token ? (
                <div className="content-link-header">
                  <Link to="/profil" className="content-link-header-Link">
                    Compte
                  </Link>
                </div>
              ) : (
                <div className="content-link-header">
                  <Link to="/Connexion" className="content-link-header-Link">
                    Compte
                  </Link>
                </div>
              )}
            </nav>
          )}
          <div className="content">
            <div className="btnMenu">
              <div
                className={`clicIcon ${isOpen ? "open" : ""}`}
                onClick={toggleMenu}
              >
                <div className={`icon ${isOpen ? "open" : ""}`}>
                  {isOpen && <div className="iconClose"></div>}
                </div>
              </div>
            </div>
            <div className="btnHome">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="btnCardHeart">
              <div className="card-cart">
                <Link to="/cart">
                  <div className="card">
                    <img src={shopping} alt="cart" />
                  </div>
                </Link>
                <div className="cart-header">
                  <div className="espace"></div>
                  <div className="cart-container">
                    <Cart />
                  </div>
                </div>
              </div>
              <div className="line"></div>
              <Link to="/en-cour-like" className="heart">
                <img src={heart} alt="user" />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {isOpen && (
            <nav className={`nav ${isOpen ? "open" : ""}`}>
              <div className="content-link-header">
                <Link to="/Nouveautés" className="content-link-header-Link">
                  Nouveautés
                </Link>
              </div>
              <div className="content-link-header">
                <Link to="/Répliques" className="content-link-header-Link">
                  Répliques
                </Link>
                <Link to="" className="content-link-header-Link">
                  Équipements
                </Link>
              </div>
              <div className="content-link-header">
                <Link to="/Consommables" className="content-link-header-Link">
                  Consomable
                </Link>
                <Link to="/Accessoires" className="content-link-header-Link">
                  Accessoirs
                </Link>
              </div>
              <div className="content-link-header">
                <Link to="/Promo" className="content-link-header-Link">
                  Promos
                </Link>
                <Link to="" className="content-link-header-Link">
                  Packs
                </Link>
              </div>
              <div className="content-link-header">
                <Link to="" className="content-link-header-Link">
                  Marques
                </Link>
                <Link to="" className="content-link-header-Link">
                  Blog
                </Link>
              </div>
              <div className="content-link-header">
                <Link to="" className="content-link-header-Link">
                  Occasion
                </Link>
                <Link to="" className="content-link-header-Link">
                  Revendre
                </Link>
              </div>
            </nav>
          )}
          <div className="content">
            <div className="btnMenu">
              <div
                className={`clicIcon ${isOpen ? "open" : ""}`}
                onClick={toggleMenu}
              >
                <div className={`icon ${isOpen ? "open" : ""}`}>
                  {isOpen && <div className="iconClose"></div>}
                </div>
              </div>
              <div className="btn-content">
                <div className="user">
                  {token ? (
                    <div>
                      <Link to="/profil">
                        <img src={user} alt="logo" />
                      </Link>
                      <div className="logout">
                        <div className="espace"></div>
                        <Logout />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <Link to="/Connexion">
                        <img src={user} alt="logo" />
                      </Link>
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
                  <Link to="/en-cour-search" className="search">
                    <img src={search} alt="logo" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="btnHome">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="btnCardHeart">
              <div className="card-cart">
                <Link to="/cart">
                  <div className="card">
                    <img src={shopping} alt="cart" />
                  </div>
                </Link>
                <div className="cart-header">
                  <div className="espace"></div>
                  <div className="cart-container">
                    <Cart />
                  </div>
                </div>
              </div>
              <div className="line"></div>
              <Link to="/en-cour-like" className="heart">
                <img src={heart} alt="user" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
