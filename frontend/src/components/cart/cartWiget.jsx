import React, { useState, useEffect } from "react";
import "../../styles/components/cart/cartWidget.css";

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
      (total, item) => total + item.price * item.quantity,
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
    <div>
      {cart.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="content-cart">
              <div className="content-img-cart">
                <img src={item.imageUrl} alt={item.title} className="img-cart" />
              </div>
              <div className="content-produit-cart">
                <h3 className="title-cart">{item.title}</h3>
                <p className="description-cart">{item.description}</p>
                <div className="content-price-cart">
                  <p>Prix: {item.price} €</p>
                  <div>
                    <button onClick={() => handleDecrease(index)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrease(index)}>+</button>
                  </div>
                </div>
                <div className="content-btn-supr-cart">
                  <button
                    onClick={() => handleDelete(index)}
                    className="btn-supr-cart"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
          <p>Prix total: {totalPrice}€</p>
          {discountedPrice && (
            <p>Prix total avec réduction: {discountedPrice}€</p>
          )}
        </>
      )}
    </div>
  )};

export default Cart;
