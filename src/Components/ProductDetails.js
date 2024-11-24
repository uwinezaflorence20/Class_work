// ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams(); // Use useParams to get the dynamic productId

  return (
    <div>
      <h1>Product Details for Product ID: {productId}</h1>
    </div>
  );
};

export default ProductDetails;
