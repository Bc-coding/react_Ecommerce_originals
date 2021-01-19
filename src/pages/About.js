import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/our-story-Lg.jpeg";

function About() {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <article>
          <h2>Our Story</h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              facilis eum veniam nesciunt quo, quibusdam ea est rem vel ut!
              Dolor sequi dignissimos iusto ea.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium vitae dicta vero sunt numquam dignissimos?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              qui consequatur, dolor vitae aliquam incidunt excepturi!
              Consequatur quaerat sunt, nemo accusantium laboriosam
              necessitatibus doloribus delectus.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur, error.
            </p>
          </div>
        </article>
        <img src={aboutImg} alt="3 seaters sofa" />
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.section`
  padding-top: 0;

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    display: block;
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
  }

  h2 {
    font-family: var(--ff-Bethham);
    margin-bottom: 2rem;
  }
  @media (min-width: 992px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media (min-width: 1199px) {
    padding-left: 7rem;
    padding-right: 7rem;
  }

  @media (min-width: 1499px) {
    padding-left: 10rem;
    padding-right: 10rem;
  }
`;

export default About;
