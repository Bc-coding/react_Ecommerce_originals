import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { formatPrice } from "../utils/helpers";

function Product({ fields, sys }) {
  const {
    category,
    colorCodes,
    company,
    description: desc,
    featured,
    images,
    name,
    price,
    shipping,
  } = fields;

  const imgSrc = images[0].fields.file.url;

  const { id } = sys;

  return (
    <Wrapper>
      <div className="container">
        <Link to={`/products/${id}`} className="link">
          <img src={imgSrc} alt={name} />
        </Link>
      </div>
      <footer>
        <p>{name}</p>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  margin-left: 5px;
  margin-right: 5px;

  .link {
    cursor: pointer;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  footer {
    margin-top: 20px;
    p {
      font-size: 14px;
      padding: 0;
      margin: 0;
    }
  }
`;

export default Product;
