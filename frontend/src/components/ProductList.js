import React from 'react';
import ProductCard from './ProductCard';

const sampleProducts = [
  { id: 1, name: 'iPhone 15', price: 79999, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'MacBook Pro', price: 199999, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Samsung Galaxy S24', price: 74999, image: 'https://via.placeholder.com/150' },
];

const ProductList = ({ onAddToCart }) => {
  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="grid">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
