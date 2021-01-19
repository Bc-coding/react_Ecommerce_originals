import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

function Stars({ stars }) {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="stars">{tempStars}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-center: center;

  span {
    color: #ef476f;
    font-size: 1rem;
    margin-right: 0.25rem;
  }

  margin-bottom: 0.5rem;
`;

export default Stars;
