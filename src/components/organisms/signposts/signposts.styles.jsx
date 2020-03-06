import styled from "styled-components"
import device from "particles/mediaQueries"
import { hexToRGB } from "helpers"

const textShadow = props => {
  const rgbBlack = hexToRGB(props.theme.black)

  let shadow = `0px 4px 3px rgba(${rgbBlack}, 0.4),`
  shadow += `0px 8px 13px rgba(${rgbBlack}, 0.1),`
  shadow += `0px 18px 23px rgba(${rgbBlack}, 0.1)`

  return shadow
}

const StyledSignPosts = styled.nav`
  padding: 32px 0;
  position: relative;
  width: 100%;

  background-color: ${props => props.theme.grey800};
  color: ${props => props.theme.white};
  fill: transparent;
  text-shadow: ${props => textShadow(props)};

  @media ${device.md} {
    padding: 48px 0;
  }

  @media ${device.xl} {
    padding: 64px 0;
  }

  @media ${device.xxl} {
    padding: 96px 0;
  }

  a {
    &:active,
    &:focus,
    &:focus-within,
    &:hover {
      &::after {
        display: none;
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 16px;
    margin-top: 0;
  }

  img,
  picture,
  video {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

    object-fit: cover;
  }

  .signposts__contents {
    display: flex;
    flex-direction: column;

    @media ${device.md} {
      flex-direction: row;
    }
  }

  .signpost {
    flex: 1;
    min-height: 200px;
    padding: 24px 16px;
    position: relative;

    @media ${device.xs} {
      padding: 32px 24px;
    }

    @media ${device.md} {
      padding: 48px 32px;
    }

    @media ${device.xl} {
      min-height: 300px;
    }

    &:active,
    &:focus,
    &:focus-within,
    &:hover {
      .signpost__link {
        opacity: 0.5;
      }
    }
  }

  .signpost__content {
    position: relative;
    z-index: 3;
  }

  .signpost__link {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;

    background-color: ${props => props.theme.black};
    opacity: 0.8;
    transition: 1s opacity ease;
  }

  .signpost__media {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }
`

export default StyledSignPosts
