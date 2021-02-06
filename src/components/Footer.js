import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()} <span>Originals Furniture</span>
      </h5>
      <h5>All rights reserved</h5>
      <small>The product images are used for demo purpose for this site.</small>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  border-top: 1px solid var(--clr-primary-11);
  margin-top: 20px;

  h5 {
    margin: 0.1rem;
    line-height: 1.25;
    font-weight: 400;
  }

  small {
    color: lightgrey;
  }
  // @media (min-width: 776px) {
  //   flex-direction: row;
  // }
`;

export default Footer;
