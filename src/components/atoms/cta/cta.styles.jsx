import styled from "styled-components"
import ButtonReset from "atoms/button/button.reset"

const StyledCTA = styled.span`
  ${ButtonReset}

  align-items: center;
  display: inline-flex;
  padding-bottom: 8px;
  position: relative;

  color: ${props => (props.dark ? props.theme.black : props.theme.white)};
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.1em;
  line-height: 1.5;
  text-transform: uppercase;

  &:after {
    bottom: 0px;
    content: "";
    height: ${props => (props.simple ? `0` : `2px`)};
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
    text-decoration: none;

    &:after {
      transform: scaleX(1);
      transform-origin: left center;
    }
  }

  a {
    &:active,
    &:focus,
    &:hover {
      text-decoration: none;
    }
  }

  svg {
    margin-left: 8px;
  }
`

export default StyledCTA
