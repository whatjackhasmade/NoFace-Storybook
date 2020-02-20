import styled from "styled-components"
import device from "@particles/mediaQueries"

import ButtonReset from "@atoms/button/button.reset"

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.grey700};
  color: ${props => props.theme.grey400};

  a {
    display: block;
    transition: 0.2s all ease;

    &:active,
    &:focus,
    &:hover {
      text-decoration: none;
    }

    &:focus {
      outline: 1px solid ${props => props.theme.white};
      outline-offset: 5px;
    }
  }

  form {
    display: flex;
    width: 100%;

    @media ${device.sm} {
      flex-direction: column;
    }

    @media ${device.md} {
      flex-direction: row;
    }

    button {
      ${ButtonReset}

      flex-shrink: 0;
      padding: 8px 12px;

      background-color: ${props => props.theme.white};
      border-radius: 0;
      color: ${props => props.theme.black};
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      text-align: center;

      @media ${device.sm} {
        padding: 14px 16px 16px;
      }

      @media ${device.md} {
        padding: 8px 12px;
      }
    }

    input {
      display: block;
      margin-top: 0;
      min-height: 40px;
      padding: ${props =>
        props.theme.spacingSmall + ` ` + props.theme.spacingDefault};
      width: 100%;

      background-color: transparent;
      border: 2px solid ${props => props.theme.white};
      border-radius: 0;
      color: ${props => props.theme.white};
      font-weight: 500;
      line-height: 1.5;
      transition: border-color 0.25s, box-shadow 0.25s;

      &:active,
      &:focus {
        border: 2px solid ${props => props.theme.grey200};
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  .footer__logo {
    color: ${props => props.theme.white};
  }

  h4 {
    margin-bottom: 8px;
    margin-top: 0;

    font-size: 14px;
  }

  p {
    font-size: 14px;
  }

  .footer__contents > nav {
    a {
      &:active,
      &:focus,
      &:hover {
        color: ${props => props.theme.white};
      }
    }

    &:not(:last-of-type) {
      & > * {
        & + * {
          margin-top: 16px;
        }
      }
    }

    &:last-of-type {
      @media ${device.sm} {
        margin-left: auto;
        max-width: 278px;
        padding-left: 30px;
      }
    }

    + nav {
      margin-top: 48px;

      @media ${device.xs} {
        margin-top: 0;
      }
    }

    @media ${device.xs} {
      width: calc(50% - 20px);

      &:nth-child(even) {
        margin-left: 40px;
      }

      &:nth-of-type(1n + 3) {
        margin-top: 48px;
      }
    }

    @media ${device.sm} {
      width: auto;

      &:nth-of-type(1n + 3) {
        margin-left: 40px;
        margin-top: 0;
      }
    }

    @media ${device.md} {
      &:nth-of-type(1n + 3),
      &:nth-child(even) {
        margin-left: 92px;
      }

      &:last-of-type {
        margin-left: auto;
      }
    }
  }

  span {
    display: block;
  }

  svg {
    height: 20px;

    fill: ${props => props.theme.white};
  }

  .error p {
    color: ${props => props.theme.black};
  }

  .footer__contents {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1216px;
    padding: 48px 15px;

    @media ${device.xs} {
      flex-direction: row;
      flex-wrap: wrap;
      padding: 92px 30px;
    }

    @media ${device.sm} {
      flex-wrap: nowrap;
    }
  }

  .footer__logo {
    font-weight: bold;

    @media ${device.sm} {
      font-size: 22px;
    }
  }

  .footer__social {
    display: flex;

    a + a {
      margin-left: 8px;
    }
  }
`

export default StyledFooter
