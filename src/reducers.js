const initialState = {
    cart: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cart: [...state.cart, { productId: action.payload.productId, quantity: 1 }],
        };
  
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter(item => item.productId !== action.payload.productId),
        };
  
      case 'UPDATE_QUANTITY':
        return {
          ...state,
          cart: state.cart.map(item => (
            item.productId === action.payload.productId
              ? { ...item, quantity: action.payload.quantity }
              : item
          )),
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  