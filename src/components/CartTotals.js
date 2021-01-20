import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";

function CartTotals() {
  const { total_amount, shipping_fee } = useCartContext();
  return (
    <Wrapper>
      <article>
        <h5>
          subtotal : <span>{formatPrice(total_amount)}</span>
        </h5>
        <p>
          shipping fee : <span>{formatPrice(shipping_fee)}</span>
        </p>
        <hr />
        <h4>
          order total : <span>{formatPrice(total_amount + shipping_fee)}</span>
        </h4>
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;

    width: 350px;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
`;

export default CartTotals;
