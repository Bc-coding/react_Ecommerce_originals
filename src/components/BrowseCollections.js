import React from "react";
import { useProductsContext } from "../context/products_context";

import styled from "styled-components";

import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

function BrowseCollections() {
  // use context hook to get the data and rename
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured, // this is displayed in browse collection
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
        <h2>Browse Collections</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featured.map((product) => {
          return <Product key={product.sys.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
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

  .featured {
    margin: 4rem auto;
    display: grid;
    grid-gap: 2rem 1.5rem;
    img {
      display: block;
      max-width: 100%;
      height: 400px;
    }
  }

  @media (min-width: 766px) {
    .featured {
      grid-template-columns: 1fr 1fr;

      img {
        max-width: 100%;
        height: 400px;
      }
    }
  }

  @media (min-width: 1199px) {
    .featured {
      grid-template-columns: 1fr 1fr 1fr 1fr;

      img {
        max-width: 100%;
        height: 250px;
      }
    }
  }
`;

export default BrowseCollections;
