import React from 'react';

const Cart = ({ items, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} × {item.qty} = ₹{item.price * item.qty}
              <button onClick={() => onRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default Cart;
