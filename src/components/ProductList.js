import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

function ProductList() {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (products.length < 1) {
    return <h6>Sorry, no products matched your search...</h6>;
  }

  if (grid_view === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products} />;
}

export default ProductList;
