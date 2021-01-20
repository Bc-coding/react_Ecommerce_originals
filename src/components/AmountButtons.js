import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";
function AmountButtons({ amount, decrease, increase }) {
  return (
    <Wrapper>
      {/* <p>Quantity: </p> */}
      <div>
        <button type="button" className="amount-btn" onClick={decrease}>
          <FaMinus />
        </button>
        <p className="amount">{amount}</p>
        <button type="button" className="amount-btn" onClick={increase}>
          <FaPlus />
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  div {
    background-color: var(--clr-grey-10);
    display: grid;
    width: 140px;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    padding: 5px;
    border-radius: 4px;
    p {
      margin-bottom: 0;
    }
  }

  button {
    background: transparent;
    border-color: transparent;
    outline: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
  }
`;

export default AmountButtons;
