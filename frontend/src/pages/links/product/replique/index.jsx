import React from "react";
import Header from "../../../../components/header";
import Prefooter from "../../../../components/footer/prefooter";
import Footer from "../../../../components/footer/Footer";
import Longues from "../../../../components/product/replique/repliqueLongues";
import Courtes from "../../../../components/product/replique/repliqueCourtes";
import Poings from "../../../../components/product/replique/repliquePoings";
import Autre from "../../../../components/product/replique/repliqueAutre";
import "../../../../styles/pages/product/replique.css";

const Repliques = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="product-title">
        <h1>
          <span>|</span> Répliques Longues
        </h1>
        <section id="Longues">
          <Longues />
        </section>
      </div>
      <div className="product-title">
        <h1>
          <span>|</span> Répliques Courtes
        </h1>
        <section id="Courtes">
          <Courtes />
        </section>
      </div>
      <div className="product-title">
        <h1>
          <span>|</span> Répliques de Poings
        </h1>
        <section id="Poings">
          <Poings />
        </section>
      </div>
      <div className="product-title">
        <h1>
          <span>|</span> Répliques Autres
        </h1>
        <section id="Autre">
          <Autre />
        </section>
      </div>
      <div>
        <Prefooter />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Repliques;
