import React from "react";
import { Link } from "react-router-dom";
import Tilty from "react-tilty";
import "../../../styles/components/product/accessoire.css";

const Accessoire = () => {
  return (
    <div className="content-accessoire">
    <div className="accessoire">
      <Link className="d1-accessoire" to="/Accessoires">
          <Tilty className="tilty-accessoire" scale={1.05} maxGlare={0.5} reverse={true} gyroscope={false}>
            <div className="inner-accessoire">
              <div className="text-accessoire">
                <p>Equipements</p>
              </div>
            </div>
          </Tilty>
      </Link>
      <Link to="/Consommables" className="d2-accessoire">
          <Tilty className="tilty-accessoire" scale={1.05} maxGlare={0.5} reverse={true} gyroscope={false}>
            <div className="inner-accessoire">
              <div className="text-accessoire">
               <p>Accessoires</p>
              </div>
            </div>
          </Tilty>
      </Link>
      <Link to="/Equipements" className="d3-accessoire">
          <Tilty className="tilty-accessoire" scale={1.05} maxGlare={0.5} reverse={true} gyroscope={false}>
            <div className="inner-accessoire">
              <div className="text-accessoire">
               <p>Consommables</p>
              </div>
            </div>
          </Tilty>
      </Link>
    </div>
    </div>
  );
};

export default Accessoire;




