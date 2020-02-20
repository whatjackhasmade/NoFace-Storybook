import styled from "styled-components"
import device from "@particles/mediaQueries"

function template(i, direction) {
  const duration = direction === `in` ? 0.3 : 0
  const delay = direction === `in` ? 0.1 : 0

  return `
		&:nth-child(${i}) {
			transition-delay: ${`${i * delay + duration}s`};
		}
	`
}

function animateNav(direction) {
  let str = ``
  for (let i = 0; i < 10; i++) {
    str += template(i, direction)
  }
  return str
}

const StyledHeader = styled.header`
  position: ${props =>
    (props.elementTheme === `default` && `relative`) ||
    (props.elementTheme === `booking` && `relative`) ||
    (props.elementTheme === `transparent` && `absolute`)};
  width: 100%;
  z-index: 2;

  background-color: ${props =>
    (props.elementTheme === `default` && props.theme.white) ||
    (props.elementTheme === `booking` && props.theme.white) ||
    (props.elementTheme === `transparent` && `transparent`)};
  box-shadow: ${props =>
    (props.elementTheme === `default` && `0px 1px 6px rgba(0, 0, 0, 0.1)`) ||
    (props.elementTheme === `transparent` && `none`)};
  font-weight: 500;
  text-transform: capitalize;

  a {
    &:active,
    &:focus,
    &:hover {
      text-decoration: none;
    }
  }

  .header__account,
  .header__contents button,
  .booking__navigation__services button {
    align-items: center;
    display: flex;
    border: none;
    margin: 0;
    padding: 16px;
    width: auto;
    overflow: visible;

    background: transparent;

    /* inherit font & color from ancestor */
    color: ${props =>
      (props.elementTheme === `default` && props.theme.black) ||
      (props.elementTheme === `booking` && props.theme.black) ||
      (props.elementTheme === `transparent` && props.theme.white)};
    font: inherit;

    /* Normalize 'line-height. Cannot be changed from 'normal' in Firefox 4+. */
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable 'input' types in iOS */
    -webkit-appearance: none;

    @media ${device.sm} {
      display: none;
    }

    svg {
      height: 16px;
      margin-right: 8px;

      fill: currentcolor;
    }
  }

  .header__navigation {
    .header__account {
      padding: 0;
      position: relative;

      @media ${device.sm} {
        display: inline-flex;
      }

      &:focus,
      &:focus-within,
      &:hover {
        nav {
          height: auto;
          top: 95%;

          opacity: 1;
        }
      }

      a,
      button {
        justify-content: center;
        padding: ${props => props.theme.spacingDefault} !important;
        width: 100%;

        color: ${props => props.theme.white};
        cursor: pointer;
        transition: 0.4s background-color ease;

        @media ${device.sm} {
          background-color: ${props => props.theme.white};
          color: ${props => props.theme.black};
        }
      }

      nav {
        display: none;
        height: 0;
        min-width: 100%;
        overflow: hidden;
        position: absolute;
        left: 50%;
        top: 75%;
        z-index: 2;

        border: 1px solid rgba(0, 0, 0, 0.05);
        box-shadow: ${props =>
          (props.elementTheme === `default` &&
            `0px 3px 6px rgba(0, 0, 0, 0.1)`) ||
          (props.elementTheme === `transparent` && `none`)};
        opacity: 0;
        transform: translateX(-50%);
        transition: 0.4s opacity ease, 0.4s top ease;

        @media ${device.sm} {
          display: block;
          opacity: 0;
        }

        a {
          white-space: nowrap;

          &:active,
          &:focus,
          &:hover {
            background-color: ${props => props.theme.grey100};
          }
        }
      }

      li {
        word-break: keep-all;
      }

      ul {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;

        list-style: none;
      }
    }

    .header__logout {
      color: ${props => props.theme.black};

      @media ${device.sm} {
        display: flex !important;
      }
    }
  }

  .header__contents {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1216px;
    padding: 15px 0 15px 15px;

    @media ${device.sm} {
      padding: 0 30px;
    }
  }

  .header__logo {
    a {
      display: block;
    }

    svg {
      display: block;
      height: 50px;

      .vector {
        display: inline;
        fill: none;
        stroke: ${props =>
          (props.elementTheme === `default` && props.theme.black) ||
          (props.elementTheme === `booking` && props.theme.black) ||
          (props.elementTheme === `transparent` && props.theme.white)};
        stroke-miterlimit: 10;
        stroke-width: 10;
      }

      @media ${device.sm} {
      }
    }
  }

  .header__navigation {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;

    background-color: ${props => props.theme.black};
    color: ${props => props.theme.white};
    font-size: 20px;
    text-align: center;
    transition: 0.4s left ease;

    @media ${device.sm} {
      display: block;
      height: 100%;
      position: relative;
      width: auto;

      background-color: inherit;
      color: ${props =>
        (props.elementTheme === `default` && props.theme.black) ||
        (props.elementTheme === `booking` && props.theme.black) ||
        (props.elementTheme === `transparent` && props.theme.white)};
      font-size: 14px;
    }

    @media ${device.md} {
      font-size: 16px;
    }

    @media ${device.lg} {
      font-size: 18px;
    }

    & > * {
      @media (max-width: 767px) {
        opacity: 1;
        transform: translateX(0px);
        transition: 0.5s all ease;

        ${animateNav(`in`)}
      }
    }

    a,
    .header__account a {
      display: inline-block;
      padding: 16px;

      @media ${device.sm} {
        padding: 32px 12px;
      }

      @media ${device.md} {
        padding: 32px 16px;
      }
    }

    > a:last-of-type,
    .header__navigation__continue {
      align-items: center;
      display: inline-flex;
      justify-content: center;

      background-color: ${props =>
        (props.elementTheme === `default` && props.theme.black) ||
        (props.elementTheme === `booking` && props.theme.black) ||
        (props.elementTheme === `transparent` && `transparent`)};
      border-radius: 0;
      color: white;
      cursor: pointer;

      @media ${device.sm} {
        margin-left: ${props =>
          (props.elementTheme === `default` && `16px`) ||
          (props.elementTheme === `booking` && `16px`) ||
          (props.elementTheme === `transparent` && `0`)};
        padding: ${props =>
          (props.elementTheme === `default` && `32px 16px`) ||
          (props.elementTheme === `booking` && `32px 16px`) ||
          (props.elementTheme === `transparent` && `32px 12px`)};
      }

      @media ${device.md} {
        padding: ${props =>
          (props.elementTheme === `default` && `32px 24px`) ||
          (props.elementTheme === `booking` && `32px 24px`) ||
          (props.elementTheme === `transparent` && `32px 16px`)};
      }

      &:disabled,
      &.header__navigation__continue--disabled {
        cursor: not-allowed;

        background-color: ${props =>
          props.theme.pale200 ? props.theme.pale200 : `#CCD7E5`};
      }

      span {
        display: block;
      }

      svg {
        height: 16px;
        margin-left: 16px;

        fill: currentcolor;
      }
    }

    button {
      color: ${props => props.theme.white};

      &:not(.header__navigation__continue) {
        @media ${device.sm} {
          display: none;
        }
      }
    }
  }

  &.header--closed {
    .header__navigation {
      left: 100%;

      @media ${device.sm} {
        left: auto;
      }

      & > * {
        @media (max-width: 767px) {
          opacity: 0;
          transform: translateX(-20px);

          ${animateNav(`out`)}
        }
      }
    }
  }

  &.header--transparent {
    .header__navigation {
      a {
        span {
          position: relative;

          &:after {
            bottom: -8px;
            content: "";
            height: 2px;
            left: 0;
            position: absolute;
            width: 100%;

            background: currentColor;
            transform: scaleX(0);
            transform-origin: right center;
            transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
          }
        }

        &:focus {
          outline: 1px dotted ${props => props.theme.white};
        }

        &:active,
        &:focus,
        &:hover {
          text-decoration: none;

          span {
            &:after {
              transform: scaleX(1);
              transform-origin: left center;
            }
          }
        }
      }
    }
  }

  &.header--booking {
    .header__contents {
      padding: 24px;
      max-width: 100%;

      text-align: center;

      @media ${device.sm} {
        padding: 0;
      }
    }

    .header__logo {
      margin: 0 auto;

      line-height: 1.25;

      @media ${device.sm} {
        margin: 0 auto 0 0;
        padding: 12px 12px 12px 24px;
      }
    }

    .header__navigation__continue {
      font-size: 18px;
      font-weight: 700;
    }

    .header__toggle {
      display: none;
    }

    .header__navigation {
      align-items: center;
      bottom: 32px;
      display: flex;
      height: auto;
      justify-content: center;
      left: auto;
      position: fixed;
      right: 32px;
      top: auto;
      width: auto;

      background-color: transparent;

      button {
        display: none;
      }

      > * {
        opacity: 1;
        transform: translateX(0px);
      }

      @media ${device.sm} {
        position: relative;
        bottom: auto;
        right: auto;
      }
    }
  }

  .header__progress {
    background-color: ${props => props.theme.grey200};

    a {
      align-items: center;
      display: inline-flex;
      flex-grow: 1;
      justify-content: center;
      padding: 16px;
      width: 100%;

      background-color: ${props => props.theme.grey100};
      border-radius: 0;
      color: ${props => props.theme.grey700};
      cursor: pointer;
      font-size: 16px;
      font-weight: 400;
      white-space: nowrap;

      &.disabled {
        display: none;

        @media ${device.xl} {
          display: inline-flex;
        }
      }

      @media ${device.sm} {
        padding: 32px 12px;
      }

      @media ${device.md} {
        padding: 32px 16px;
      }

      + a {
        &:not(.disabled) {
          border-left: 1px solid ${props => props.theme.grey400};
        }
      }
    }

    > span {
      display: block;
      flex-grow: 1;
      width: 100%;
    }

    svg {
      height: 16px;
      margin-left: 16px;

      fill: currentcolor;
    }

    .disabled {
      background-color: #f9f9f9;
      color: ${props => props.theme.grey100};

      cursor: not-allowed;
      pointer-events: none;
    }
  }

  .header__progress__contents {
    display: none;
    flex-direction: column;
    margin: 0 auto;

    @media ${device.xl} {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }

  .header__progress__toggle {
    justify-content: center;
    width: 100%;

    border-radius: 0px;
    font-size: 14px;

    @media ${device.xl} {
      display: none;
    }
  }

  .header__progress--show {
    .header__progress__contents {
      display: flex;
    }
  }

  .booking__navigation__services {
    position: relative;
    width: 100%;

    button {
      display: none;
      margin: 0 auto;

      @media ${device.xl} {
        display: flex;
      }
    }
  }
`

export default StyledHeader
