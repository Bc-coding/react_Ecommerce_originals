import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";

function socialMedia() {
  return (
    <Wrapper>
      <div className="section section-center">
        <a target="_blank" className="link">
          <FaInstagram className="svg" />
        </a>
        <h3>
          <a target="_blank">@Originals</a>
        </h3>
        <div>
          <p>Share and connect with us</p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: #fafafa;
  color: #1c1c1c;

  .section {
    padding: 3rem;
    text-align: center;
  }

  .link {
    text-decoration: none;
    cursor: pointer;
    svg {
      font-size: 3rem;
    }
  }
  h3 {
    margin-bottom: 0.3rem;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.4;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.4;
  }
`;

export default socialMedia;
