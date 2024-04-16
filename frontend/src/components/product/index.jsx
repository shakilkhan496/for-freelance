import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const index = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://backend-jokair.vercel.app/api/nouveaute');
          setProducts(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []);
  
    const handleLike = async (id) => {
        try {
          const response = await axios.post('https://backend-jokair.vercel.app/api/nouveaute/' + id + '/like', { headers: { 'Content-Type': 'application/json' }});
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      

  return (
    <div>
      {products.map(product => (
        <div key={product.produitId}>
          <Link to={`/produits/${product.produitId}`}>
            <h2>{product.title}</h2>
            <img src={product.imageUrl} alt={product.title} />
          </Link>
          <p>{product.price}</p>
          <button onClick={() => handleLike(product.produitId)}>Like</button>
        </div>
      ))}
    </div>
  )
}

export default index
