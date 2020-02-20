import styled from "styled-components"
// import device from "@particles/mediaQueries"

const StyledGallery = styled.section`
  display: grid;
  grid-auto-flow: dense;
  grid-gap: 8px;
  grid-template-columns: repeat(12, 1fr);
  margin: 80px auto;

  .gallery__item {
    grid-column: span 4;
    grid-row: span 1;
    padding-top: 56.25%;
    position: relative;

    img,
    video {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;

      object-fit: cover;
    }

    &:nth-child(5n - 4) {
      grid-column: span 3;
      grid-row: span 2;
    }

    &:nth-child(5n - 3) {
      grid-column: span 6;
    }

    &:nth-child(5n - 2) {
      grid-column: span 3;
    }

    &:nth-child(5n - 1) {
      grid-column: span 3;
    }

    &:nth-child(5n) {
      grid-column: span 6;
    }
  }
`

export default StyledGallery
