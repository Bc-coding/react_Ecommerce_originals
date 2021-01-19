import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
  UPDATE_FILTERS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((product) => product.fields.price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: {
        ...state.filters,
        max_price: maxPrice,
        price: maxPrice,
      },
    };
  }

  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }

  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }

  // ************* update the state for sorting
  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    };
  }

  //************ run sorting methods
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    //console.log(tempProducts);

    // Sorting methods

    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort(
        (a, b) => a.fields.price - b.fields.price
      );
    }

    if (sort === "price-highest") {
      tempProducts = tempProducts.sort(
        (a, b) => b.fields.price - a.fields.price
      );
    }

    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) =>
        a.fields.name.localeCompare(b.fields.name)
      );
    }

    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) =>
        b.fields.name.localeCompare(a.fields.name)
      );
    }

    return { ...state, filtered_products: tempProducts };
  }

  // ********* Update filters when the user inserts inputs
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return {
      ...state,
      filters: {
        ...state.filters,
        [name]: value,
      },
    };
  }
  // ********* run filtering methods
  if (action.type === FILTER_PRODUCTS) {
    // console.log("filtering products");

    const { all_products } = state;
    const { text, category, company, color, price, shipping } = state.filters;

    // a copy of all_products for filtering
    let tempProducts = [...all_products];

    // filtering
    // text
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.fields.name.toLowerCase().startsWith(text);
      });
    }

    // category

    if (category !== "" && category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.fields.category === category
      );
    }

    // company
    if (company !== "" && company !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.fields.company.toLowerCase() === company
      );
    }

    // color
    if (color !== "" && color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.fields.colorCodes.find((c) => c === color);
      });
    }

    //price;
    if (price) {
      tempProducts = tempProducts.filter(
        (product) => product.fields.price <= price
      );
    }

    //shipping
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.fields.shipping === true
      );
    }

    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "",
        color: "",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
