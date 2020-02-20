import styled from "styled-components"
import device from "@particles/mediaQueries"

import ButtonReset from "@atoms/button/button.reset"

const StyledTreatment = styled.main`
  margin: 0 auto;
  width: 100%;

  button {
    ${ButtonReset}

    &:active,
    &:focus,
    &:hover {
      text-decoration: none;
    }

    background: transparent;
    cursor: pointer;
    text-align: left;
  }

  .treatment__container {
    display: grid;
    padding: 64px 148px 64px 64px;
    grid-column-gap: 148px;
    grid-template-columns: 2fr 1fr;
  }

  .treatment__instructions {
  }

  .treatments {
    display: grid;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-template-columns: 1fr;

    @media ${device.xs} {
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.sm} {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .treatment {
    position: relative;
    height: 0;
    overflow: hidden;
    padding-top: 100%;
    width: 100%;

    color: white;

    h2,
    h3,
    h4 {
      margin: 0;
    }

    > * {
      position: absolute;
      top: 0;
      padding: 24px;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;

      object-fit: cover;
    }

    > img {
      padding: 0;
      z-index: 1;

      transform: scale(1);
      transition: 1s transform ease;
    }

    &:active,
    &:focus,
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }

  .services__container {
    margin: 0 auto;
    max-width: 1920px;
  }

  .services__intro {
    display: grid;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-template-columns: 1fr;
    margin: 40px 0 0;

    @media ${device.sm} {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .services__intro__wrapper {
    display: flex;
  }

  .services__intro__media {
    max-width: 240px;
    width: 100%;
  }

  .services__intro__text {
    margin-left: 32px;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 0;

      color: #606f7b;
      font-size: 28px;
    }

    p {
      color: #606f7b;
      font-size: 18px;
      font-weight: 500;
    }
  }

  .services__list {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr;

    @media ${device.md} {
      grid-gap: 48px;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .service {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    padding-top: 16px;

    border-top: 1px solid #e8e8e8;

    @media ${device.md} {
      padding-top: 24px;
    }

    a:last-of-type {
      flex-grow: 0;
      margin-bottom: 0;
      margin-top: auto;
      padding-top: 24px;
    }
  }

  .service__header {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .service__subtitle {
    margin: 0;

    color: #606f7b;
    font-weight: normal;
    font-size: 16px;
    line-height: 1.5;
  }

  .service__title {
    align-items: center;
    display: flex;
    margin-bottom: 12px;
    margin-top: 8px;

    color: #606f7b;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.4;
  }

  .service__quantity {
    align-items: center;
    display: flex;
    justify-content: center;

    font-size: 24px;

    button {
      align-items: center;
      display: flex;
      justify-content: center;
      height: 32px;
      width: 32px;

      background-color: #f5f5f5;
      border-radius: 50%;
      color: #606f7b;
      font-weight: 500;
      font-size: 32px;
      line-height: 32px;

      &:active,
      &:focus {
        outline: 1px dotted black;
      }
    }

    input {
      width: 64px;

      font-weight: 500;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  .service__quantity__current {
    text-align: center;
  }

  .service__price {
    font-size: 18px;
  }

  .service__description {
    max-width: 660px;

    color: #606f7b;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
  }

  .service__minimum,
  .service__maximum {
    font-weight: bold;
  }
`

export default StyledTreatment
