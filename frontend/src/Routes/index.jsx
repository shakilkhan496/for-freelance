import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Admin from "../pages/admin";
import PromoCarte from "../components/cart/promo-carte";
import Profil from "../components/profil";
import Accessoires from "../pages/links/footer/categories/accessoires";
import Consommables from "../pages/links/footer/categories/consommables";
import Equipements from "../pages/links/footer/categories/equipements";
import Nouveautes from "../pages/links/product/nouveaute";
import Promo from "../pages/links/product/promo";
import Repliques from "../pages/links/product/replique";
import Collection from "../pages/links/product/collection";
import Autre from "../pages/links/product/autre";
import ECLike from "../components/en-court/like";
import ECSearch from "../components/en-court/search";
import Livraison from "../components/cart/Livraison";
import Cart from "../components/cart/cart";
import Erreur from "../components/erreur";
import Post from "../components/post";
import Propo from "../pages/links/footer/propo";
import ForgotPassword from "../components/Log/ForgotPassword";
import Product from "../components/product/home/details-product";
import Avis from "../components/avis/avis";
import Info from "../pages/links/footer/info";
import Checkout from "../components/cart/paypal/Checkout";
import Mdp from "../components/profil/mdp";
import Newadresse from "../components/profil/newAdresse";
import Meta from "../components/cart/metamask";
import Log from "../components/Log/connection"


export default function index() {
  const userId = localStorage.getItem("userId");
  let isAdmin = false;

  if (userId === import.meta.env.VITE_USERIDADMIN) {
    isAdmin = true;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home isAdmin={isAdmin} />} />
        <Route
          path="/admin"
          element={isAdmin ? <Admin /> : <Navigate to="/" />}
        />
        <Route path="/promo/carte" element={<PromoCarte />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/post" element={<Post />} />
        <Route path="/A-propo-de-nous" element={<Propo />} />
        <Route path="/Répliques" element={<Repliques />} />
        <Route path="/Accessoires" element={<Accessoires />} />
        <Route path="/Consommables" element={<Consommables />} />
        <Route path="/Equipements" element={<Equipements />} />
        <Route path="/Nouveautés" element={<Nouveautes />} />
        <Route path="/Promo" element={<Promo />} />
        <Route path="/Collections" element={<Collection />} />
        <Route path="/Autre" element={<Autre />} />
        <Route path="/information" element={<Info />} />
        <Route path="/en-cour-like" element={<ECLike />} />
        <Route path="/livraison" element={<Livraison />} />
        <Route path="/en-cour-search" element={<ECSearch />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="*" element={<Erreur />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/avis" element={<Avis />} />
        <Route path="/modifier/mdp" element={<Mdp />} />
        <Route path="/modifier/adresse" element={<Newadresse />} />
        <Route path="/Meta" element={<Meta />} />
        <Route path="/Connexion" element={<Log />} />
      </Routes>
    </div>
  );
}
