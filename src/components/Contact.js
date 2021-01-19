import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Wrapper>
      <div className="section-center">
        <h4>Subscribe for updates, new products &amp; all things Originals</h4>
        <div className="content">
          <form
            className="contact-form"
            action="https://formspree.io/f/xnqookdp"
            method="POST"
          >
            <input
              type="email"
              className="form-input"
              placeholder="email address"
              name="_replyto"
              required
            />
            <button type="submit" className="submit-btn">
              Subsribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .section-center {
    display: flex;
    flex-direction: row;

    padding: 2rem 0;
  }

  h4 {
    font-family: var(--ff-Bethham);
    flex: 0.5;
    margin-right: 5rem;
  }
  .content {
    flex: 0.5;

    display: flex;
    align-items: center;
  }

  .contact-form {
    display: flex;
    width: 100%;
  }

  .form-input {
    cursor: pointer;
    border: 2px solid #00516e;
    padding: 1rem;
    flex: 0.7;
    font-family: inherit;
    font-size: inherit;
  }
  .submit-btn {
    cursor: pointer;
    padding: 1rem;
    background-color: #00516e;
    color: white;
    border: none;
    flex: 0.3;
    font-family: inherit;
    font-size: inherit;
    text-transform: uppercase;
  }
`;
export default Contact;
