import styled from "styled-components"
import device from "@particles/mediaQueries"

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 0;
  padding: 16px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 101;

  font-weight: 700;

  h5 {
    display: none;
  }

  .header__logo {
    min-width: 50px;
    position: relative;
    width: 50px;
  }

  .logo__path {
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

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }

  @media ${device.xl} {
    flex-direction: row;
    padding: 16px 32px;
  }
`

export default StyledHeader
