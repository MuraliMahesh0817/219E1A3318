import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { fetchProductById } from '../api';

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetchProductById(productId);
    setProduct(data);
  };

  return (
    <div>
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>Company: {product.company}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}</p>
          <p>Availability: {product.availability}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
}

export default ProductPage;