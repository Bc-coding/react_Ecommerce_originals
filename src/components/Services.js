import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";

function Services() {
  return (
    <Wrapper>
      <div className="section-center">
        {services.map((service) => {
          const { id, title, text, src } = service;
          return (
            <article className="service" key={id}>
              <img src={src} alt={title} />
              <h3>{title}</h3>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  border-top: 1px solid var(--clr-primary-11);
  border-bottom: 1px solid var(--clr-primary-11);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  h3 {
    font-family: var(--ff-Bethham);
    text-align: center;

    margin-top: 1rem;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-top: 1rem;
  }

  @media (min-width: 766px) {
    .section-center {
      display: grid;
      grid-template-columns: 33.33333% 33.33333% 33.33333%;
      grid-gap: 10px;
      margin-top: 2.5rem;
      margin-bottom: 2.5rem;
    }

    .service {
      overflow: hidden;
    }

    img {
      width: 100%;
      height: 200px;
    }

    p {
      word-wrap: wrap;
    }
  }

  @media (min-width: 1280px) {
    img {
      width: 100%;
      height: 300px;
    }
  }
`;

export default Services;
