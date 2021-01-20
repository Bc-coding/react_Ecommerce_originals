import React, { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

import { useProductsContext } from "../context/products_context";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  AddToCart,
  ProductImages,
  PageHero,
  Likes,
  Stars,
} from "../components";

function SingleProduct() {
  const { id } = useParams();
  const history = useHistory();

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  // Fetch Single Product
  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  // console.log(product);

  // Programmactically redirect to the homepage
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const { fields, sys } = product || {};

  const {
    category,
    colorCodes,
    company,
    description: desc,
    images,
    name,
    newInStore,
    price,
    shipping,
    stars,
    stock,
  } = fields || {};

  const { id: sku } = sys || { id: "" };

  return (
    <Wrapper>
      <PageHero title={name} products />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h5>{newInStore ? "new in" : null}</h5>
            <h2>{name}</h2>
            <Stars stars={stars} />
            <p>{formatPrice(price)}</p>
            <p className="desc">{desc}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "Out of stock"}
            </p>

            <p className="info">
              <span>SKU : </span>
              {sku}
            </p>

            <p className="info">
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  .section {
    padding-top: 0;
  }

  .btn {
    background-color: var(--clr-grey-1);
  }

  .product-center {
    display: grid;
    gap: 4rem;
  }

  .content {
    padding-top: 50px;
  }

  h2 {
    color: var(--clr-grey-11);
    font-family: var(--ff-Bethham);
  }

  .desc {
    line-height: 2;
    max-width: 45em;
  }

  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProduct;
