import React from "react";
import Header from "../../../../components/header";
import Prefooter from "../../../../components/footer/prefooter";
import Footer from "../../../../components/footer/Footer";
import Nouveaute from "./nouveaute";
import "../../../../styles/components/product/nouveauteLike.css";

const Requette = () => {
  return (
    <div className="nouveaute-page">
      <div className="header">
        <Header />
      </div>
      <div className="product-title">
        <h1>
          <span>|</span> Nouveautés
        </h1>
      </div>
      <Nouveaute />
      <div>
        <Prefooter />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Requette;
