import React from "react";
import logo from "../assets/logo.svg";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";

import { useProductsContext } from "../context/products_context";

function Navbar() {
  const { openSidebar } = useProductsContext();
  return (
    <NavContainer>
      <div className="nav__center">
        <div className="nav__header">
          <Link to="/">
            <img src={logo} alt="originals logo" />
          </Link>
          <button type="button" className="nav__toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        {/* links */}
        <ul className="nav__links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--clr-primary-11);

  .nav__center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 100px;
      margin-left: -15px;
    }
  }
  .nav__toggle {
    background: transparent;
    border: transparent;
    cursor: pointer;
    svg {
      font-size: 1.5rem;
    }
  }
  .nav__links {
    display: none;
  }
  .cart__btn__wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav__toggle {
      display: none;
    }
    .nav__center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav__links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transformation: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-grey-3);
        }
      }
    }
    .cart__btn__wrapper {
      display: grid;
    }
  }
`;

export default Navbar;
