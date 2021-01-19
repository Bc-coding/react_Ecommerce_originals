import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContext, PageHero, Contact, CartContent } from "../components";

function Cart() {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Shopping Cart</h2>
          <h5>Your shopping cart is currently empty</h5>
          <Link to="/products" className="btn">
            Shop Now
          </Link>
        </div>
        <Contact />
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero title="Cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.main`
  .empty {
    text-align: left;
    border-bottom: 1px solid var(--clr-primary-11);
    padding-bottom: 5rem;
    padding-left: 3rem;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
      color: #1c1c1c;
    }
    h5 {
      color: #666;
    }
  }
`;

export default Cart;
