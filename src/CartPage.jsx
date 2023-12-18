// CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from './actions';
import productsData from './products.json';
import './CartPage.css';

const CartPage = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (productId) => {
    dispatch(addToCart(productId));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    dispatch(updateQuantity(productId, quantity));
  };

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cart.reduce((total, item) => {
    const product = productsData.products.find(p => p.id === item.productId);
    return total + item.quantity * product.price;
  }, 0);

  return (
    <div>
      <h2>Cart Page</h2>
      <ul>
      {cart.map(item => {
          const product = productsData.products.find(p => p.id === item.productId);

          return (
            <li key={item.productId}>
              <div>{`Product: ${product.title}`}</div>
              <div>{`Description: ${product.description}`}</div>
              <div>{`Price: $${product.price}`}</div>
              <div>{`Quantity: ${item.quantity}`}</div>
              <div>
                <h4>Images:</h4>
                <div>
                  {product.images.map((image, index) => (
                    <img key={index} src={image} alt={`Product ${index + 1}`} style={{ width: '100px', height: '100px' }} />
                  ))}
                </div>
              </div>
              <button onClick={() => handleUpdateQuantity(item.productId, item.quantity - 1)}>-</button>
              <button onClick={() => handleUpdateQuantity(item.productId, item.quantity + 1)}>+</button>
              <button onClick={() => handleRemoveFromCart(item.productId)}>Remove</button>
            </li>
          );
        })}
      </ul>
      <h2>Available Products</h2>
      <ul>
        {productsData.products.map(product => (
          <li key={product.id}>
            <div>{`Product: ${product.title}`}</div>
            <div>{`Description: ${product.description}`}</div>
            <div>{`Price: $${product.price}`}</div>
            <div>
              <h4>Images:</h4>
              <div>
                {product.images.map((image, index) => (
                  <img key={index} src={image} alt={`Product ${index + 1}`} style={{ width: '100px', height: '100px' }} />
                ))}
              </div>
            </div>
            <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Total Quantity: {totalQuantity}</h3>
        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CartPage;
