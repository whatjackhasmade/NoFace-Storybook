import styled from "styled-components"
import device from "particles/mediaQueries"

const StyledLoader = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  padding: 32px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 102;

  color: ${props => props.theme.white};

  path {
    animation-delay: 0.2s;
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

  svg {
    display: block;
    width: 250px;
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
`

export default StyledLoader
