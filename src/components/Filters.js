import React from "react";
import styled from "styled-components";

import { useFilterContext } from "../context/filter_context";

import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

function Filters() {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const companies = getUniqueValues(all_products, "company");
  const categories = getUniqueValues(all_products, "category");
  const colors = getUniqueValues(all_products, "colorCodes");

  //console.log(min_price, max_price);

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}

          <div className="form-control search">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>

          {/* end of search input */}

          {/* category */}

          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    name="category"
                    type="button"
                    onClick={updateFilters}
                    className={`${
                      category === c.toLowerCase() ? "active" : null
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          {/* end of category */}

          {/* company */}

          <div className="form-control">
            <h5>company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="company"
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>

          {/* end of company */}

          {/* color */}

          <div className="form-control">
            <h5>color</h5>

            <div className="colors">
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        color === "all" ? "all-btn active" : "all-btn"
                      }`}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    data-color={c}
                    onClick={updateFilters}
                    style={{ background: c }}
                    className={`${
                      color === c ? "color-btn active" : "color-btn"
                    }`}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of color */}

          {/* price range */}

          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              min={min_price}
              max={max_price}
              onChange={updateFilters}
              value={price}
            />
          </div>

          {/* end of price range */}

          {/* shipping */}

          <div className="form-control shipping">
            <label htmlFor="shipping" className="container">
              Free Shipping
              <input
                type="checkbox"
                name="shipping"
                id="shipping"
                onChange={updateFilters}
                checked={shipping}
              />
              <span className="checkmark"></span>
            </label>
          </div>

          {/* end of shipping */}
        </form>

        {/* clear filter */}
        <button type="button" onClick={clearFilters} className="clear-btn">
          {" "}
          Clear filters
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }

  .search {
    border: 1px solid var(--clr-input-border);
    border-radius: 50px;
    background: var(--clr-input-bcg);
    padding: 9px 25px;
    position: relative;
  }

  .search-input {
    padding: 0.5rem;
    font-size: 0.875rem;

    line-height: 1.4;
  }

  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25rem 0;
    padding: 0.25rem 0;

    text-transform: capitalize;
    letter-spacing: var(--spacing);
    // color: var(--clr-grey-5);
    cursor: pointer;
  }

  .active {
    border-color: var(--clr-grey-5);
  }

  .company {
    border: 1px solid var(--clr-input-border);
    background-color: var(--clr-input-bcg);
    border-radius: var(--radius);
    padding: 0.25rem;
  }

  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 1px solid grey !important;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }

  .price {
    margin-bottom: 0.25rem;
  }

  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }

  .clear-btn {
    background: var(--clr-input-bcg);
    border: 1px solid var(--clr-input-border);
    color: inherit;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }

  // ************* checkbox!!!
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  // Hide the browser's default checkbox
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  // Create a custom checkbox
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
  }

  // On mouse-over, add a grey background color

  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  // Create the checkmark/indicator (hidden when not checked)
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  // Show the checkmark when checked
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  // Style the checkmark/indicator
  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export default Filters;
