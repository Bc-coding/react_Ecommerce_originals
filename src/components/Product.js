import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

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
        <img src={imgSrc} alt={name} />
        <div className="top-left-text">{category}</div>
        <Link to={`/products`} className="link">
          <FaSearch />
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);

    // for text overlay
    text-align: center;
    color: var(--clr-grey-11);
  }

  img {
    width: 100%;
    object-fit: cover;
    transition: var(--transition);
  }

  .top-left-text {
    position: absolute;
    top: 20px;
    left: 20px;
    text-transform: capitalize;

    font-size: 1.5rem;
  }

  .container:hover img {
    opacity: 0.8;
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--clr-grey-5);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;

    opacity: 0; // INVISIBLE with 0
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }

  .container: hover .link {
    opacity: 1; // VISIBLE WHEN HOVER
  }
`;

export default Product;
