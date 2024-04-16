import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/components/post/livraison.css";

const Livraison = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_APILIVRAISON);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="livraison-post">
      <table className="livraison-item">
        <caption>
          <h2>Livraison</h2>
        </caption>
        <thead>
          <tr>
            <th>
              <h3>Commandes</h3>
            </th>
            <th>
              <h3>nom</h3>
            </th>
            <th>
              <h3>prenom</h3>
            </th>
            <th>
              <h3>Rue</h3>
            </th>
            <th>
              <h3>codePostal</h3>
            </th>
            <th>
              <h3>ville</h3>
            </th>
            <th>
              <h3>numeroTel</h3>
            </th>
            <th>
              <h3>produitId</h3>
            </th>
            <th>
              <h3>nombreProduit</h3>
            </th>
            <th>
              <h3>prix</h3>
            </th>
            <th>
              <h3>userId</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.nom}</td>
              <td>{item.prenom}</td>
              <td>{item.rue}</td>
              <td>{item.codePostal}</td>
              <td>{item.ville}</td>
              <td>{item.numeroTel}</td>
              <td>{item.produitId}</td>
              <td>{item.nombreProduit}</td>
              <td className="livraison-prix">{item.prix}</td>
              <td>{item.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Livraison;
