import styled from "styled-components"
import device from "particles/mediaQueries"
import { hexToRGB } from "helpers"

const StyledGrid = styled.section`
  min-height: 100vh;
  margin: 96px 0;

  counter-reset: term;

  @media ${device.md} {
    margin: 128px 0;
  }

  @media ${device.xl} {
    margin: 196px 0;
  }

  @media ${device.xxl} {
    margin: 256px 0;
  }

  .grid__contents {
    display: flex;
    flex-direction: column;
  }

  .grid__row {
    padding: 32px 0 64px;
    margin: 0;
    display: flex;
    flex-direction: column;
    width: 100%;

    border-top: 1px solid ${props => props.theme.grey700};
    opacity: 0;
    transform: translateY(40px);

    @media ${device.sm} {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  .grid__row--show {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-name: fadeIn;
    animation-timing-function: linear;
    animation-timing-function: ease;
  }

  .grid__title {
    margin-bottom: 48px;
  }

  .col-1 {
    flex-basis: calc(33.333% - 2.667rem);
    flex-grow: 0;
    flex-shrink: 0;

    :empty::before {
      display: block;

      content: counter(term);
      counter-increment: term;

      color: ${props => props.theme.grey300};
      font-size: 4rem;
      font-weight: 300;

      @media ${device.xl} {
        font-size: 6rem;
      }

      @media ${device.xxl} {
        font-size: 8rem;
      }
    }
  }

  .col-2 {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: calc(66.667% - 1.333rem);
  }

  .col__body {
    font-size: 2rem;
  }

  .col__subtitle {
    color: ${props => props.theme.grey300};
    font-size: 1.8rem;
  }

  .col__title {
    font-size: 2.8rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

export default StyledGrid
