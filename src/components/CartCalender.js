import React, { useState } from "react";
import styled from "styled-components";

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";

import { useCartContext } from "../context/cart_context";
// import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

import { FaTruck } from "react-icons/fa";
import { FaStoreAlt } from "react-icons/fa";

function CartCalender() {
  const { total_amount, shipping_fee } = useCartContext();
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <Wrapper>
      <article>
        <div>
          <p>order total :</p>
          <p className="price"> {formatPrice(total_amount + shipping_fee)}</p>
        </div>
        <div className="container">
          <div className="store">
            <div className="checkoutMethodsContainer">
              <div className="checkoutMethod delivery active">
                <div className="deliveryIcon">
                  <FaTruck className="svg" />
                </div>
                <div className="checkoutMethodName">Delivery</div>
              </div>
              <div className="checkoutMethod">
                <div className="pickupIcon">
                  <FaStoreAlt className="svg" />
                </div>
                <div className="checkoutMethodName">Store Pickup</div>
              </div>
            </div>
            <div className="checkoutMethodsContainer datepicker">
              <div>
                <small>Please choose your date for delivery here:</small>
              </div>
              <div>
                <DatePicker
                  value={selectedDay}
                  onChange={setSelectedDay}
                  inputPlaceholder="Select a date"
                  shouldHighlightWeekends
                />
              </div>
            </div>
          </div>
          <div className="text">
            <button type="submit" className="checkout cart-btn">
              Checkout
            </button>
          </div>
          <div>
            <Link to="/products" className="continue cart-btn">
              continue shopping
            </Link>
          </div>
        </div>
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 3rem;
  margin-left: 1rem;
  display: flex;
  justify-content: center;

  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
    background-color: #f4f4f4;

    width: 350px;
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .store {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    margin-top: 1rem;
    text-align: left;

    .checkoutMethodsContainer {
      flex-grow: 1;
      flex-wrap: nowrap;
      display: flex;

      justify-content: space-between;

      .checkoutMethod {
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border: 1px solid #dadada;
        border-radius: 5px;
        padding: 1em;

        .svg {
          font-size: 30px;
        }

        .checkoutMethodName {
          text-align: center;
          line-height: 1em;
          font-size: 0.7em;
        }
      }

      .checkoutMethod:hover {
        cursor: pointer;
        border-color: #c1c1c1;
      }

      .delivery {
        margin-right: 0.5em;
      }
    }

    .datepicker {
      display: flex;
      flex-direction: column;
    }
  }

  .active {
    background-color: #eee;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.3125rem;
    width: 100%;
  }

  .price {
    font-size: 1.5625rem;
    font-weight: 600;
    line-height: 1.4;
    margin-left: 0.9375rem;
  }

  .cart-btn {
    padding: 20px 20px;
    text-transform: Uppercase;
    color: #fff;
    cursor: pointer;
    text-align: center;
  }

  .checkout {
    background-color: #376d4c;
    width: 100%;
    font-weight: 600;
    font-size: inherit;
  }

  .continue {
    font-weight: 400;
    width: 100%;
    background-color: #5f6062;

    margin-top: 0.625rem;
  }

  @media (max-width: 741px) {
    margin-left: 0;
  }
`;

export default CartCalender;
