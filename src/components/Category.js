import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const Category = () => {
  const {categoryName} = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products based on category
  useEffect(() => {
  const fetchCategoryProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/products?category=${categoryName}`);
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching category products:', err);
      setError('Failed to load products');
      setLoading(false);
    }
  };

    fetchCategoryProducts();
  }, [categoryName]); // Re-fetch if the category name changes

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product">
            <h2>{product.name}</h2>
            <p>Price: ${typeof product.price === 'number' ? product.price.toFixed(2) : 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
