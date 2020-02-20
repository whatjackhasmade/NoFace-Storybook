import styled from "styled-components"
// import device from "@particles/mediaQueries"

const StlyedSidebarMedia = styled.section`
  .sidebarMedia__item {
    margin-top: 320px;

    height: 0;
    padding-top: 56.25%;
    position: relative;
    width: 100%;

    &:nth-child(5n - 3) {
      &:hover {
        + .sidebarMedia__item {
          img,
          video {
            top: -24px;

            transform: rotate(-2deg);
          }
        }
      }
    }

    &:nth-child(5n - 2) {
      margin-bottom: -40%;
      margin-top: 0;

      &:hover {
        img,
        video {
          top: -24px;

          transform: rotate(-2deg);
        }
      }

      img,
      video {
        left: -10%;
        top: -90%;

        transform: rotate(0deg);
        transition: 1s top ease, 1s transform ease;
      }
    }

    img,
    video {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;

      object-fit: cover;
    }
  }
`

export default StlyedSidebarMedia
