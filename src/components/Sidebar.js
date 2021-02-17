import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartButtons from "./CartButtons";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";

import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        {/* header */}
        <div className="sidebar__header">
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        {/* links */}
        <ul className="links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="/checkout" onClick={closeSidebar}>
                checkout
              </Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  text-align: center;

  .sidebar__header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 1.5rem;
    background: transparent;
    border-color: transparent;
    cursor: pointer;

    margin-top: 0.2rem;
    transition: var(--transition);
  }
  .close-btn:hover {
    color: var(--clr-grey-4);
  }
  .links {
    margin-bottom: 2rem;
  }

  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    transition: var(--transition);

    letter-spacing: 0.05rem;
    background-color: white;
    margin-bottom: 2px;
    margin-right: 2rem;
    margin-left: 2rem;
    color: black;
    font-weight: 800;
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
  }
  .sidebar {
    display: none;
    background-color: var(--clr-primary-11);
    transition: var(--transition);
    transform: translate(-100%);
    // z-index: -1;
  }
  .show-sidebar {
    display: block;
    transform: translate(0);
    z-index: 999;
  }
  .cart__btn__wrapper {
    margin: 2rem 2rem;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
