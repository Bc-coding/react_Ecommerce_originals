import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  TOGGLE_CART_ITEM_AMOUNT,
  COUNT_CART_TOTALS,
} from "../actions";

const cart_reducer = (state, action) => {
  // ************ ADD TO CART
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;

    // checking if the item is already in the cart
    const tempItem = state.cart.find(i => i.id === id + color);
    if (tempItem) {
      //if the item is already in the cart, then we need to map over the cart to pass in the amount and check again the stock
      const tempCart = state.cart.map(cartItem => {
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
        image: product.fields.images[0].fields.file.url,
        price: product.fields.price,
        max: product.fields.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  // ************ REMOVE ITEM
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter(item => item.id !== action.payload);
    return {
      ...state,
      cart: tempCart,
    };
  }

  // ************ CLEAR CART
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    };
  }

  // ************ TOGGLE AMOUNT
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map(item => {
      // interate the cart to check if the id matches
      if (item.id === id) {
        // for matched id, we need to check if the value is "inc" or "dec", then we run the function accordingly
        if (value === "inc") {
          // increase the amount
          let newAmount = item.amount + 1;
          // set the newAmount to max if it is bigger
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          // return the item with the newAmount
          return {
            ...item,
            amount: newAmount,
          };
        }
        if (value === "dec") {
          // decrease the amount
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return {
            ...item,
            amount: newAmount,
          };
        }
      } else {
        return item;
      }
      return item;
    });

    return {
      ...state,
      cart: tempCart,
    };
  }

  // COUNT CART TOTALS - reduce over our cart to count the totals
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount;
        total.total_amount += price * amount;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );
    return {
      ...state,
      total_items,
      total_amount,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
