import React from "react";
import { Link } from "react-router-dom";
import Tilty from "react-tilty";
import Longue from "../../../../assets/vector/replique-longue.png"
import Poing from "../../../../assets/vector/replique-poing.png"
import Courte from "../../../../assets/vector/replique-courte.png"
import Autre from "../../../../assets/vector/replique-autre.png"
import "../../../../styles/components/product/replique.css";

const Replique = () => {
  return (
    <div className="content-replique">
    <div className="replique">
      <Link className="d1-replique" to="/Répliques#Longues">
          <Tilty className="tilty-replique" scale={1.05} maxGlare={0.5} reverse={true} gyroscope={false}>
            <div className="inner-replique">
              <div className="text-replique">
                <p>réplique longues</p>
                <img src={Longue} alt="" />
                <p>il faut juste faire le css</p>
              </div>
            </div>
          </Tilty>
      </Link>
      <Link to="/Répliques#Courtes" className="d2-replique">
          <Tilty className="tilty-replique" scale={1.05} maxGlare={0.5} reverse={true} gyroscope={false}>
            <div className="inner-replique">
              <div className="text-replique">
               <p>réplique coutes</p>
               <img src={Courte} alt="" />
              </div>
            </div>
          </Tilty>
      </Link>
      <Link to="/Répliques#Poings" className="d3-replique">
          <Tilty className="tilty-replique" scale={1.05} maxGlare={0.5} reverse={true} gyroscope={false}>
            <div className="inner-replique">
              <div className="text-replique">
               <p>réplique de poings</p>
               <img src={Poing} alt="" />
              </div>
            </div>
          </Tilty>
      </Link>
      <Link to="/Répliques#Autre" className="d4-replique">
          <Tilty className="tilty-replique" scale={1.05} maxGlare={0.5} reverse={true} gyroscope={false}>
            <div className="inner-replique">
              <div className="text-replique">
               <p>réplique autre</p>
               <img src={Autre} alt="" />
              </div>
            </div>
          </Tilty>
      </Link>
    </div>
    </div>
  );
};

export default Replique;
