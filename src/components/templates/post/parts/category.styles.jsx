import styled from "styled-components"
import device from "@particles/mediaQueries"

const StyledCategory = styled.section`
  margin: 64px 0 24px;
  padding: 0 15px;

  @media ${device.md} {
    padding: 0 30px;
  }

  a {
    padding-bottom: 8px;
    position: relative;

    color: ${props => (props.theme.grey500 ? props.theme.grey500 : `#8795A1`)};
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.1em;
    line-height: 15px;
    text-transform: uppercase;
    transition: 0.5s color ease;

    &:after {
      bottom: 0px;
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

    &:focus {
      outline: 1px dotted black;
      outline-offset: 8px;
    }

    &:active,
    &:focus,
    &:hover,
    &.active {
      color: ${props => (props.theme.black ? props.theme.black : `#141213`)};
      text-decoration: none;

      &:after {
        transform: scaleX(1);
        transform-origin: left center;
      }
    }
  }

  nav {
    align-items: flex-start;
    display: flex;
    flex-direction: column;

    @media ${device.sm} {
      align-items: center;
      flex-direction: row;
    }

    a {
      margin-bottom: 48px;
      position: relative;

      @media ${device.sm} {
        margin-bottom: 0;
      }

      &:before {
        bottom: -24px;
        content: "";
        display: block;
        height: 1px;
        position: absolute;
        left: 0;
        width: 40px;

        background-color: ${props =>
          props.theme.grey400 ? props.theme.grey400 : `#C4C4C4`};

        @media ${device.sm} {
          display: none;
        }
      }
    }

    span {
      display: none;
      margin: 0 8px 8px;

      @media ${device.sm} {
        display: block;
      }
    }
  }

  .category__contents {
    margin: 0 auto;
    max-width: 1170px;
    position: relative;
    width: 100%;
  }
`

export default StyledCategory
