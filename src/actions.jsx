export const addToCart = (productId) => ({
    type: 'ADD_TO_CART',
    payload: { productId },
  });
  
  export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: { productId },
  });
  
  export const updateQuantity = (productId, quantity) => ({
    type: 'UPDATE_QUANTITY',
    payload: { productId, quantity },
  });
  