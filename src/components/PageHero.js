import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function PageHero({ title, product }) {
  return (
    <Wrapper>
      <div className="section-center">
        <h4>
          <Link to="/">Home</Link>
          {product && <Link to="/product">/ product</Link>}/ {title}
        </h4>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;

  a {
    color: var(--clr-grey-1);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-grey-4);
  }
`;
export default PageHero;
