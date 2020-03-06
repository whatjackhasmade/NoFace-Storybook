import styled from "styled-components"
import device from "particles/mediaQueries"

import buttonReset from "atoms/button/button.reset"

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 0;
  padding: 32px 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 101;

  color: ${props => props.theme.white};
  font-weight: 400;

  a {
    @media ${device.xs} {
      font-size: 2.5rem;
    }
  }

  a + a {
    margin-top: 16px;

    @media ${device.xs} {
      margin-left: 16px;
      margin-top: 0;
    }

    @media ${device.lg} {
      margin-left: 24px;
    }

    @media ${device.xl} {
      margin-left: 32px;
    }

    @media ${device.xxl} {
      margin-left: 40px;
    }
  }

  button {
    ${buttonReset}

    cursor: pointer;

    svg {
      fill: ${props => props.theme.white};
    }
  }

  h5 {
    display: none;
  }

  nav {
    @media ${device.xs} {
      margin-left: auto;
    }
  }

  .grid {
    display: flex;
  }

  .header__logo {
    min-width: 50px;
    position: relative;
    width: 50px;

    a {
      &:after {
        display: none;
      }
    }

    path {
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
      animation-name: draw;
      animation-timing-function: linear;
      animation-timing-function: ease;

      fill: none;
      stroke: ${props => props.theme.white};
      stroke-dasharray: 142.47500610351562px;
      stroke-dashoffset: 142.47500610351562px;
      stroke-linecap: round;
      stroke-miterlimit: 10;
      stroke-width: 10;
    }
  }

  .header__menu {
    display: flex;

    a:first-of-type {
      margin-left: auto;
    }

    a:last-of-type {
      @media ${device.xs} {
        margin-left: 16px;
      }

      @media ${device.lg} {
        margin-left: auto;
      }
    }
  }

  .header__menus {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 100%;
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;

    background-color: inherit;
    transition: 0.4s left ease;

    @media ${device.xs} {
      display: block;
      height: auto;
      left: initial;
      position: relative;
      top: initial;
      width: auto;

      color: ${props => props.theme.white};
    }

    @media ${device.lg} {
      flex: 1;
    }

    .header__logo {
      display: none;
      margin-bottom: 64px;

      @media ${device.xs} {
        display: none;
      }
    }

    .header__logo path {
      stroke: white;
    }

    .header__toggle {
      display: none;

      @media ${device.xs} {
        display: none;
      }

      position: absolute;
      top: 32px;
      right: 32px;
    }
  }

  .header__navigation {
    align-items: center;
    display: flex;
    margin-left: auto;

    @media ${device.lg} {
      flex: 1;
      margin-left: initial;
    }
  }

  &.header--open {
    .header__menus {
      left: 0;

      background-color: ${props => props.theme.black};

      @media ${device.xs} {
        left: initial;
        position: relative;
        top: initial;

        background-color: inherit;
      }

      a {
        font-size: 2.5rem;

        @media ${device.xs} {
          font-size: inherit;
        }
      }

      nav {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media ${device.xs} {
          display: block;
        }
      }

      .header__logo {
        display: block;

        @media ${device.xs} {
          display: none;
        }
      }

      .header__toggle {
        display: flex;

        @media ${device.xs} {
          display: none;
        }
      }
    }
  }

  .header__toggle {
    align-items: center;
    display: flex;

    svg {
      display: block;
      height: 16px;
      margin-right: 8px;
    }

    @media ${device.xs} {
      display: none;
    }
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
`

export default StyledHeader
