import React from "react";
import { Link } from "react-router-dom";
import Tilty from "react-tilty";
import "../../../styles/components/product/autre.css";

const Autre = () => {
  return (
    <div className="content-autre">
    <div className="autre">
      <Link className="d1-autre" to="/Accessoires">
          <Tilty className="tilty-autre" scale={1.05} maxGlare={0.5} reverse={true} gyroscope={false}>
            <div className="inner-autre">
              <div className="text-autre">
                <p>up grade</p>
              </div>
            </div>
          </Tilty>
      </Link>
      <Link to="/Consommables" className="d2-autre">
          <Tilty className="tilty-autre" scale={1.05} maxGlare={0.5} reverse={true} gyroscope={false}>
            <div className="inner-autre">
              <div className="text-autre">
               <p>marque</p>
              </div>
            </div>
          </Tilty>
      </Link>
      <Link to="/Equipements" className="d3-autre">
          <Tilty className="tilty-autre" scale={1.05} maxGlare={0.5} reverse={true} gyroscope={false}>
            <div className="inner-autre">
              <div className="text-autre">
               <p>autre</p>
              </div>
            </div>
          </Tilty>
      </Link>
    </div>
    </div>
  );
};

export default Autre;




