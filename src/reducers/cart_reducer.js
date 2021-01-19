import { ADD_TO_CART } from "../actions";

const cart_reducer = (state, action) => {
  // ************ ADD TO CART
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    // checking if the item is already in the cart
    const tempItem = state.cart.find((i) => i.id === id + color);
    if (tempItem) {
      //if the item is already in the cart, then we need to map over the cart to pass in the amount and check again the stock
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          // if the id matches then we just need to increase the amount
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }

          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      // if it is not in the cart, then we need to create an item in the cart
      const newItem = {
        id: id + color,
        name: product.fields.name,
        color,
        amount,
        image: product.fields.images[0].url,
        price: product.fields.price,
        max: product.fields.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
