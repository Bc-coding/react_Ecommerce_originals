import React from "react";
import styled from "styled-components";
import Checkout from "../pages/Checkout";

const CheckoutForm = () => {
  return <h2>Hello from Stripe checkout</h2>;
};

const StripeCheckout = () => {
  return (
    <Wrapper>
      <CheckoutForm />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default StripeCheckout;
