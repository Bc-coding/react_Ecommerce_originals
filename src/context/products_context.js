import React, { useContext, useReducer, useEffect } from "react";

import reducer from "../reducers/products_reducer";

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN, // for loading
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN, // for loading
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

import Client from "../utils/Contentful";

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,

  // products
  products: [],
  featured_products: [], // this will load when running reducer
  newInStore_products: [],

  // product
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = () => {
    // loading begins
    dispatch({ type: GET_PRODUCTS_BEGIN });

    try {
      Client.getEntries({
        content_type: "furnitureStore",
      }).then((response) => {
        //console.log(response.items);
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: response.items,
        });
      });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (id) => {
    // loading begins
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });

    try {
      const entry = await Client.getEntry(id);
      //console.log(entry);
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: entry });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
