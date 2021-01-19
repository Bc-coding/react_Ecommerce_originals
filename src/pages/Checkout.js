import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";

function Checkout() {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        <h2>Checkout</h2>
      </Wrapper>
    </main>
  );
}
const Wrapper = styled.div``;
export default Checkout;
