import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Wrapper className="page-404">
      <section>
        <h1>404</h1>
        <h4>Sorry, the page you tried cannot be found</h4>
        <Link to="/" className="btn">
          homepage
        </Link>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 5rem;
  }
  h4 {
    margin-bottom: 2rem;
  }
`;

export default Error;
