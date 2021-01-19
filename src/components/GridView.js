import React from "react";
import styled from "styled-components";

import NewProduct from "./NewInStoreProduct";

function GridView({ products }) {
  console.log(products);
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          return <NewProduct key={product.sys.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 399px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
