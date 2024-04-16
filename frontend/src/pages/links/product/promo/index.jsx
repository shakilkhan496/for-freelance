import React from "react";
import Header from "../../../../components/header";
import Promo from "./promo";
import Prefooter from "../../../../components/footer/prefooter";
import Footer from "../../../../components/footer/Footer";
import "../../../../styles/components/product/nouveauteLike.css";

const Requette = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="product-title">
        <h1>
          <span>|</span> Promo
        </h1>
      </div>
      <Promo />
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
