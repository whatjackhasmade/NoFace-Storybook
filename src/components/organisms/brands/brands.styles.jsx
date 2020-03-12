import styled from "styled-components"
import device from "particles/mediaQueries"

const StyledBrands = styled.section`
  margin: 96px 0;
  position: relative;
  width: 100%;

  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
  fill: transparent;

  @media ${device.md} {
    margin: 128px 0;
  }

  @media ${device.xl} {
    margin: 196px 0;
  }

  @media ${device.xxl} {
    margin: 256px 0;
  }

  a {
    &:active,
    &:focus,
    &:focus-within,
    &:hover {
      &::after {
        display: none;
      }

      svg {
        stroke-opacity: 1;
      }
    }
  }

  svg {
    display: block;

    stroke: white;
    stroke-opacity: 0.6;
    transition: 0.2s stroke-opacity ease;
  }

  .brands__contents {
    display: flex;
    flex-direction: column;

    @media ${device.xs} {
      flex-direction: row;
    }
  }

  .brand {
    display: block;
  }
`

export default StyledBrands
