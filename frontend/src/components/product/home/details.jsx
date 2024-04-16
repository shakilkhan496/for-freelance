import React, { useState, useEffect } from 'react';
import Product from '../index'
import axios from 'axios';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const produit = useState (Product.produitId)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://backend-jokair.vercel.app/api/nouveaute/${produit}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.descriptionComplete}</p>
      <img src={product.imageUrl} alt={product.title} />
      <p>{product.price}</p>
    </div>
  );
};

export default ProductDetail;
