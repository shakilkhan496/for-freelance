import React from "react";
import { Link } from "react-router-dom";
import AngleLeft from "../../assets/angle-left.svg"
import Connection from "./index"
import '../../styles/components/log/index.css'

const Connec = () => {
  return (
    <div className="connection-form">
      <Link to="/" className="header-back-home">
        <img src={AngleLeft} alt="icon back to home" className="back-home-icon" />
        <div className="back-home">
          <h3 className="back-home-h3">Retour à la boutique </h3>
          <div className="line-back-home"></div>
        </div>
      </Link>
      <div className="product-title">
        <h1>
          <span>|</span> Connextion
        </h1>
      </div>
      <br />
      <Connection />
    </div>
  );
};

export default Connec;
