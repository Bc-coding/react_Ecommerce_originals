import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import CartCalender from "./CartCalender";
import Contact from "./Contact";

function CartContent() {
  const { cart, clearCart } = useCartContext();
  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((item) => {
        //console.log(item);
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          continue shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
      <div className="totals-container">
        <CartTotals />
        <CartCalender />
      </div>
      <Contact />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    border-color: transparent;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    background: var(--clr-grey-1);
    color: var(--clr-white);

    letter-spacing: var(--spacing);
    font-weight: 100;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }

  .link-btn:hover {
    font-weight: 900;
  }

  @media (min-width: 742px) {
    .totals-container {
      display: flex;
      justify-content: center;
    }
  }
`;

export default CartContent;
