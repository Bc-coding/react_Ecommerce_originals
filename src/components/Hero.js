import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpg";
import heroBcg2 from "../assets/hero-bcg-2.jpg";

function Hero() {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h2>
          Family friendly, <br /> Meticulously crafted
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          autem ipsam facere vitae alias. Possimus dolore modi delectus
          cupiditate molestiae.
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  h2 {
    font-family: var(--ff-Bethham);
  }
  p {
    line-height: 2;
    max-width: 45rem;
    margin-bottom: 2rem;
  }
  .img-container {
    display: none;
  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;

    h2 {
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.1rem;
    }

    .hero-btn {
      font-size: 1rem;
      padding: 0.5rem 0.8rem;
    }

    .img-container {
      display: block;
      position: relative;
    }

    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      object-fit: cover;
      display: block;
    }

    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-90%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
