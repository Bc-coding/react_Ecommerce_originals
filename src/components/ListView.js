import React from "react";
import styled from "styled-components";

import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

function ListView({ products }) {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          const { name, price, images } = product.fields;
          const { id } = product.sys;
          return (
            <article key={id}>
              <Link to={`/products/${id}`}>
                <img src={images[0].fields.file.url} alt={name} />
              </Link>

              <div>
                <h5>{name}</h5>
                <h5>{formatPrice(price)}</h5>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  article {
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 10px;
  }

  img {
    width: 100%;
    object-fit: cover;
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

export default ListView;
