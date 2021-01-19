import React, { useState } from "react";
import styled from "styled-components";

function ProductImages({
  images = [
    {
      fields: {
        file: {
          url: "",
        },
      },
    },
  ],
}) {
  const [main, setMain] = useState(images[0]);
  const url = main.fields.file.url;

  return (
    <Wrapper>
      <img src={url} alt="main image" className="main" />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image.fields.file.url}
              alt={image.fields.title}
              key={index}
              onClick={() => setMain(images[index])}
              className={`${image.fields.file.url === url ? "active" : null}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .main {
    height: 500px;
  }
  img {
    width: 100%;
    object-fit: cover;
  }

  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }

  .active {
    border: 2px solid var(--clr-grey-11);
  }

  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 80px;
      }
    }
  }

  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 100px;
      }
    }
  }
`;

export default ProductImages;
