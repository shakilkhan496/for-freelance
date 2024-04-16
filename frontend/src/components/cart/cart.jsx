import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import Header from '../header'
import Prefooter from "../footer/prefooter"
import Footer from "../footer/Footer";
import '../../styles/components/cart/cart.css'

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const promo = localStorage.getItem("promo");

  // Récupérer le panier depuis le local storage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, [cart]);

 // Calculer le prix total de tous les articles dans le panier
 useEffect(() => {
    const newTotalPrice = cart.reduce(
      (total, item) => total + item.prix * item.quantity,
      0
    );
    const roundedTotalPrice = Math.round(newTotalPrice * 100 + Number.EPSILON) / 100;
    setTotalPrice(roundedTotalPrice.toFixed(2));
  }, [cart]);
  
  // Calculer le prix total avec la réduction
  useEffect(() => {
    if (promo) {
      const discountedPrice = totalPrice - totalPrice * (promo * 0.01);
      const roundedDiscountedPrice = Math.round(discountedPrice * 100 + Number.EPSILON) / 100;
      setDiscountedPrice(roundedDiscountedPrice.toFixed(2));
    }
  }, [totalPrice, promo]);

  // Supprimer un produit du panier
  const handleDelete = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Augmenter la quantité d'un produit
  const handleIncrease = (index) => {
    const newCart = [...cart];
    newCart[index].quantity++;
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Diminuer la quantité d'un produit
  const handleDecrease = (index) => {
    const newCart = [...cart];
    newCart[index].quantity--;
    if (newCart[index].quantity <= 0) {
      newCart.splice(index, 1);
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Ajouter un produit au panier
  const handleAddToCart = (item) => {
    const cartItemIndex = cart.findIndex(
      (cartItem) => cartItem.produitId === item.produitId
    );
    if (cartItemIndex === -1) {
      // Le produit n'est pas encore dans le panier
      const newCart = [
        ...cart,
        {
          ...item,
          quantity: 1,
        },
      ];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      // Le produit est déjà dans le panier, augmenter la quantité
      const newCart = [...cart];
      newCart[cartItemIndex].quantity++;
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  return (
    <div className="cart-cart">


        <div className="header">
            <Header />
        </div>

        <div className="product-title">
            <h1>
                <span>|</span> Votre panier
            </h1>
        </div>

      <div className="detail">
        <div className="product-detail">
            {cart.length === 0 ? (
                <p className="p-aucunProduit">Aucun produit dans votre panier</p>
            ) : (
              <div>
                
                <div className="title-product-item">
                  <h3>Produit</h3>
                </div>

                {cart.map((item, index) => (
                  <div className="content-diving-line">
                    <div className="diving-line"></div>



                  <div key={index} className="content-cart-item">

                    <div className="content-item-photo">
                        <img src={item.imageUrl} alt={item.title} className="item-photo" />
                    </div>

                    <div className="content-product-cart">
                      <div className="title-quantity">
                        <h3 className="title-cart-product">{item.title}</h3>

                        <div className="quantity-product-cart">
                            <button onClick={() => handleDecrease(index)} className="btn-quantity-product-cart">-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleIncrease(index)} className="btn-quantity-product-cart">+</button>
                        </div>

                      </div>
                      <div className="trash-price">

                        <div className="content-price-cart">
                          <p className="price-cart-product">Prix: {item.prix} €</p>
                        </div>

                        <div className="content-btn-supr-cart-product">
                          <button onClick={() => handleDelete(index)} className="btn-supr-cart-product" >
                              Supprimer
                          </button>
                          <div className="lign-btn-supr-cart-product"></div>
                        </div>

                      </div>
                    </div>

                  </div>



                  </div>
                ))}
              </div>
            )}
        </div>


        <div className="order-detail">
        {totalPrice === "0.00" ? ( 
          <div className="div-recap-commande">
            <h3 className="h3-recap">Récapitulatif de la commande</h3>
            <p className="p-recap-commande">Le panier est vide.</p>
          </div>
        ) : (
          <div className="div-recap-commande">
            <h3 className="h3-recap">Récapitulatif de la commande</h3>
            <p className="p-recap-commande">Prix total: {totalPrice}€</p>
            {discountedPrice && (
              <p className="p-recap-commande">Prix total avec réduction: {discountedPrice}€</p>
            )}
            <div className="btn-recap-commande">
              <Link to="/livraison" className="btn-pay-link">Commander</Link>
            </div>
          </div>
        )}
      </div>
    </div>

    <div>
      <Prefooter/>
    </div>

    <div className="footer">
      <Footer />
    </div>
  </div>
)};

export default Cart;
