import React, { useContext, useReducer } from "react";

import reducer from "../reducers/cart_reducer";

import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";
import { useEffect } from "react";

// sync the data in localStorage with our cart
const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  //   cart: [],
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // ADD TO CART
  //  *** we need to the data passing from the AddToCart component, which are id, color, price
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  //   REMOVE ITEM from the cart
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  //   TOGGLE AMOUNT
  const toggleAmount = (id, value) => {
    dispatch({
      type: TOGGLE_CART_ITEM_AMOUNT,
      payload: {
        id,
        value,
      },
    });
  };

  //   CLEAR CART
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  //   update localStorage everytime there is a change to cart
  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
