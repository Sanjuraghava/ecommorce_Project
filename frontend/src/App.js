import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exists, qty: exists.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="app-container">
      <h1>🛒 Flipcart Lite</h1>
      <div className="main-section">
        <ProductList onAddToCart={handleAddToCart} />
        <Cart items={cartItems} onRemove={handleRemoveFromCart} />
      </div>
    </div>
  );
};

export default App;
