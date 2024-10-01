import { Link } from "react-router-dom";
import React from 'react';
import '../Home.css';
const Home = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/shop' >Shop</Link></li>
            <li><Link to='/login' >Login</Link></li>
            <li><Link to='/register' >Register</Link></li>
          </ul>
        </nav>
      </header>

    {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Fast and Fresh Groceries Delivered to Your Doorstep</h1>
          <p>Shop now and enjoy same-day delivery.</p>
          <div className="outter-box"><Link to='/shop' className="cta-button">Shop Now</Link></div>
        </div>
      </section>

    {/* Featured Categories/Products Section */}
      <section className="featured">
        <h2>Shop by Category</h2>
        <div className="categories">
          <div className="category">
            <Link className="category-link" to='/category/fruits'><img src="./images/Fruites.jpg" alt="Fruits" />
            <h3>Fresh Fruits</h3>
            </Link>  
          </div>
          <div className="category">
            <Link className="category-link" to='/category/vegitables'> 
            <img src="./images/vegitable.jpg" alt="Vegetables" />
            <h3 className="category-link">Fresh Vegetables</h3>
            </Link>
          </div>
          <div className="category">
            <Link className="category-link" to="/category/dairy">
            <img src="./images/dairy.jpg" alt="Dairy" />
            <h3>Dairy Products</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 Grocery Delivery.All rights reserved</p>
      </footer>
    </div>
  );

};

export default Home;
