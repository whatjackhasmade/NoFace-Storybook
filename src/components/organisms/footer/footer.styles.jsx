import styled from "styled-components"
import device from "particles/mediaQueries"

import ButtonReset from "atoms/button/button.reset"

const StyledFooter = styled.footer`
  padding: 48px 0 100px;

  background-color: ${props => props.theme.grey900};
  color: ${props => props.theme.grey300};

  @media ${device.md} {
    padding: 80px 0 160px;
  }

  a {
    display: block;
    transition: 0.2s all ease;

    svg {
      fill: ${props => props.theme.grey300};
      transition: 0.2s fill ease;
    }

    &:active,
    &:focus,
    &:hover {
      color: ${props => props.theme.white};
      text-decoration: none;

      svg {
        fill: ${props => props.theme.white};
      }
    }

    &:focus {
      outline: 1px solid ${props => props.theme.white};
      outline-offset: 5px;
    }
  }

  a + a {
    margin-top: 10px;
  }

  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 16px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 8px;

    color: ${props => props.theme.white};
  }

  nav {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 32px;

    @media ${device.md} {
      margin-top: 0;
      margin-left: 32px;
    }
  }

  .footer__company,
  .footer__social {
    display: flex;
  }

  .footer__company {
    align-items: center;

    @media ${device.md} {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .footer__copyright {
    margin-left: 16px;

    color: ${props => props.theme.white};
    font-weight: 700;
  }

  .footer__logo {
    min-width: 50px;
    position: relative;
    width: 50px;

    a:after {
      display: none;
    }

    path {
      animation-duration: 1s;
      animation-iteration-count: 1;
      animation-name: draw;
      animation-timing-function: linear;
      animation-timing-function: ease;

      animation-fill-mode: forwards;
      fill: none;
      stroke: white;
      stroke-dasharray: 142.47500610351562px;
      stroke-dashoffset: 142.47500610351562px;
      stroke-linecap: round;
      stroke-miterlimit: 10;
      stroke-width: 10;
    }
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }

  .footer__menus {
    max-width: 600px;

    @media ${device.xs} {
      display: flex;
      flex-wrap: wrap;

      nav {
        flex: unset;
        width: 50%;
      }
    }

    @media ${device.md} {
      flex: 1;
      flex-wrap: nowrap;
      margin-left: auto;

      nav {
        flex: 1;
        width: auto;
      }
    }
  }

  .footer__social {
    flex-direction: row;

    a:after {
      display: none;
    }

    a + a {
      margin-left: 16px;
      margin-top: 0;
    }

    svg {
      display: block;
      height: 24px;
    }
  }

  .grid {
    @media ${device.md} {
      display: flex;
    }
  }
`

export default StyledFooter
