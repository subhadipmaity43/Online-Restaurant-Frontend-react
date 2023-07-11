const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { images, product, description, amount } = action.payload;
    console.log(images, product, description, amount);
  }

  return state;
};

export default CartReducer;
