import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Error from "./Error";
import Loading from "./Loading";
import NewProduct from "./NewInStoreProduct";

import Carousel from "styled-components-carousel";

function NewInStore() {
  // use context hook to get the data and rename
  const {
    products_loading: loading,
    products_error: error,
    newInStore_products: newInStore,
  } = useProductsContext();

  // check loading
  if (loading) {
    return <Loading />;
  }
  // check error
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>New In Store</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        <Carousel center infinite showArrows slidesToShow={4} swipeable>
          {newInStore.map((product) => {
            return <NewProduct key={product.sys.id} {...product} />;
          })}
        </Carousel>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  border-top: 1px solid var(--clr-primary-11);
  border-bottom: 1px solid var(--clr-primary-11);
  h2 {
    font-family: var(--ff-Bethham);
    text-align: center;

    margin-top: 1rem;
  }

  .underline {
    height: 3px;
    width: 60px;
    background-color: var(--clr-grey-5);

    margin-right: auto;
    margin-left: auto;

    margin-bottom: 1rem;
  }

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }

`;

export default NewInStore;
