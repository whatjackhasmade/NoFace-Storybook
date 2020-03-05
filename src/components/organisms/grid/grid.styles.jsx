import styled from "styled-components"
import device from "particles/mediaQueries"

const StyledGrid = styled.section`
  min-height: 100vh;
  padding: 96px 0;

  background-color: ${props => props.theme.grey800};
  color: ${props => props.theme.white};
  counter-reset: term;

  @media ${device.md} {
    padding: 128px 0;
  }

  @media ${device.xl} {
    padding: 196px 0;
  }

  @media ${device.xxl} {
    padding: 256px 0;
  }

  .grid__contents {
    display: flex;
    flex-direction: column;
  }

  .grid__row {
    padding: 32px 0 64px;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

    border-top: 1px solid rgba(156, 158, 165, 0.3);
    opacity: 0;
    transform: translateY(40px);
  }

  .grid__row--show {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-name: fadeIn;
    animation-timing-function: linear;
    animation-timing-function: ease;
  }

  .grid__row__wrapper {
    opacity: 0.2;
    transition: 1s opacity ease;
    transition-delay: 0.2s;
  }

  .grid__row__wrapper--active {
    opacity: 1;
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

      @media ${device.xxl} {
        font-size: 6rem;
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
