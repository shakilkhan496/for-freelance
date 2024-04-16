
import React, { useState, useEffect } from "react"
import "../../styles/components/cart/recap.css"

const Repap = () => {

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




  // Récupérer les données du localStorage
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Calculer le sous-total, la réduction, la livraison et le total
  const subTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const reduction = 10; // Supposons que la réduction soit de 10€
  const shipping = 5; // Frais de livraison
  const total = subTotal - reduction + shipping;
  const tax = 1; // Taxe fixe
      
    return(
        <div className="recap">
            <h2>Récapitulatif</h2>
            <div className="detail-recap-cart">
                <p><img src="" alt="" />glock 17  x1</p>
                <p>89€</p>
            </div>
            <div className="input-promo-recap">
                <input type="text" name="" id="" placeholder="Code promo" />
                <input type="button" value="valider" />
            </div>
            <div className="sousTotal-recap">
                <p>Sous total</p>
                <p>89€</p>
            </div>
            <div className="reduction-recap">
                <p>Réduction</p>
                <p>{discountedPrice}€</p>
            </div>
            <div className="livraison-recap">
                <p>Livraison</p>
                <p>5€</p>
            </div>
            <div className="totalPrice-recap">
                <p>Total</p>
                <p>{totalPrice}€</p>
            </div>
            <div className="tax-recap">
                <p>tax de 1€</p>
            </div>
        </div>
    )
}

export default Repap