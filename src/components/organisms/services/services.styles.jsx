import styled from "styled-components"
import device from "particles/mediaQueries"

const StyledServices = styled.section`
  padding: 96px 0;
  position: relative;
  width: 100%;

  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
  fill: transparent;

  @media ${device.md} {
    padding: 128px 0;
  }

  @media ${device.xl} {
    padding: 196px 0;
  }

  @media ${device.xxl} {
    padding: 256px 0;
  }

  a {
    &:active,
    &:focus,
    &:focus-within,
    &:hover {
      .service__arrow__contents {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  svg {
    display: block;
    height: 160px;
  }

  .service {
    opacity: 0;
    transform: translateY(100px);
    transition: 0.8s opacity ease, 0.8s transform ease;

    > a {
      display: flex;
      flex-direction: column;
      height: 100%;

      &:after {
        display: none;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: 16px;
      margin-top: 8px;

      font-size: 2.5rem;
      font-weight: 400;
    }

    &:nth-of-type(2n) {
      @media ${device.xs} {
        margin-left: 48px;
      }
    }

    &:nth-of-type(1n + 3) {
      @media ${device.xs} {
        margin-top: 48px;
      }

      @media ${device.md} {
        margin-top: 0;
      }
    }

    + .service {
      margin-top: 64px;

      @media ${device.xs} {
        margin-top: inherit;
      }

      @media ${device.md} {
        margin-left: 64px;
      }
    }
  }

  .service--inview {
    opacity: 1;
    transform: translateY(0px);

    @media ${device.md} {
      &:nth-of-type(2) {
        transition-delay: 0.4s;
      }

      &:nth-of-type(3) {
        transition-delay: 0.8s;
      }

      &:nth-of-type(4) {
        transition-delay: 1.2s;
      }
    }
  }

  .service__arrow {
    margin-top: auto;
    overflow: hidden;

    p {
      margin: 0;
      margin-right: 8px;
    }

    span {
    }

    svg {
      height: 12px;
      fill: ${props => props.theme.white};
      stroke: none !important;
    }
  }

  .service__arrow__contents {
    align-items: center;
    display: flex;

    opacity: 0;
    transform: translateY(20px);
    transition: 0.2s opacity ease, 0.2s transform ease;
  }

  .service__description {
    margin: 0 0 32px;

    color: ${props => props.theme.grey400};
  }

  .service__index {
    margin-top: 32px;

    &::before {
      content: "0";
    }
  }

  .services__intro {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 96px;
    max-width: 880px;
    width: 100%;

    @media ${device.xl} {
      margin-bottom: 128px;
      max-width: 1200px;
    }

    h2,
    h3 {
      font-weight: 400;
    }

    h2 {
      margin-top: 16px;

      font-weight: 400;
      text-transform: lowercase;

      @media ${device.xl} {
        font-size: 66px;
      }

      > div {
        > div:first-of-type {
          text-transform: capitalize;
        }
      }
    }

    h3 {
      @media ${device.xl} {
        font-size: 24px;
      }
    }
  }

  .services__items {
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media ${device.xs} {
      flex-direction: row;
      flex-wrap: wrap;
    }

    @media ${device.md} {
      flex-wrap: nowrap;
    }

    > * {
      @media ${device.xs} {
        width: calc(50% - 24px);
      }

      @media ${device.md} {
        flex: 1;
        width: auto;
      }
    }
  }

  /* Service specific */

  .service {
    circle,
    rect {
      vector-effect: non-scaling-stroke;
      transition: 0.4s cubic-bezier(0.4, 0.1, 0.6, 0.9);
    }
  }

  .service--app {
    &:active,
    &:focus,
    &:hover {
      svg {
        circle,
        rect {
          stroke-opacity: 0.6;
        }

        circle + circle {
          stroke-opacity: 1;
        }
      }
    }

    svg {
      stroke: #50e3c2;

      circle,
      rect {
        stroke-opacity: 0.4;
      }

      circle + circle {
        stroke-opacity: 1;
      }
    }
  }

  .service--product {
    svg {
      stroke: #f8c91c;
    }
  }

  .service--company {
    svg {
      stroke: #bd10e0;
    }
  }

  .service--scale {
    svg {
      stroke: #ff4081;
    }
  }
`

export default StyledServices
