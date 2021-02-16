import React from "react";

import { FaUserMinus, FaUserPlus, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <Wrapper className="cart__btn__wrapper">
      <Link to="/cart" className="cart__btn" onClick={closeSidebar}>
        <span className="cart__container">
          <FaShoppingCart />
          <span className="cart__value">{total_items}</span>
        </span>
      </Link>
      <button
        type="button"
        className="auth__btn"
        aria-label="login"
        onClick={loginWithRedirect}
      >
        <FaUserPlus />
      </button>
      <button
        aria-label="logout"
        type="button"
        className="auth-btn"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        <FaUserMinus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 150px;

  .cart__btn {
    color: var(--clr-grey-1);
    font-size: 1.1rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
  }

  .cart__btn:hover {
    color: var(--clr-grey-4);
  }

  .cart__container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }

  .cart__value {
    position: absolute;
    top: -10px;
    right: -16px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.9rem;
    padding: 12px;
  }

  .auth__btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    cursor: pointer;

    font-size: 1.3rem;
    color: var(--clr-grey-1);
    svg {
      margin-left: -5px;
    }
  }
  .auth__btn:hover {
    color: var(--clr-grey-4);
  }
`;

export default CartButtons;
