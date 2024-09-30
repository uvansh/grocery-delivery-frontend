import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      price: parseFloat(price),
      category,
      image,
      description,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/products', newProduct);
      console.log('Product added:', response.data);
      alert('Product added successfully!');
    } catch (error) {
      console.error('There was an error adding the product:', error);
    }
  };

  return (
    <div>
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />

        <label>Category:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />

        <label>Image URL:</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
