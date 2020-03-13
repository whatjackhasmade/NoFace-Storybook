import styled from "styled-components"
import device from "particles/mediaQueries"
import { hexToRGB } from "helpers"

const overlayFade = props => {
  const rgbBlack = hexToRGB(props.theme.black)

  const fade = `linear-gradient(
      to top,
      rgba(${rgbBlack}, 0) 80%,
      rgba(${rgbBlack}, 1) 100%
    );`
  return fade
}

const textShadow = props => {
  const rgbBlack = hexToRGB(props.theme.black)

  let shadow = `0px 4px 3px rgba(${rgbBlack}, 0.4),`
  shadow += `0px 8px 13px rgba(${rgbBlack}, 0.1),`
  shadow += `0px 18px 23px rgba(${rgbBlack}, 0.1)`

  return shadow
}

const StyledSignPosts = styled.nav`
  margin-top: -32px;
  padding: 32px 0;
  position: relative;
  width: 100%;

  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  color: ${props => props.theme.white};
  fill: transparent;
  text-shadow: ${props => textShadow(props)};

  @media ${device.md} {
    margin-top: -64px;
  }

  @media ${device.xl} {
    margin-top: -98px;
  }

  @media ${device.xxl} {
    margin-top: -128px;
  }

  @media ${device.md} {
    padding: 48px 0;
  }

  @media ${device.xl} {
    padding: 64px 0;
  }

  @media ${device.xxl} {
    padding: 96px 0;
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    background: ${props => overlayFade(props)};
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

    &:focus,
    &:focus-within {
      outline: 1px dashed ${props => props.theme.white};
      outline-offset: 0px;
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

  p {
    color: ${props => props.theme.grey300};
    transition: 0.2s color ease;
  }

  .signposts__contents {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;

    @media ${device.md} {
      flex-direction: row;
    }
  }

  .signpost {
    flex: 1;
    min-height: 200px;
    padding: 32px 24px;
    position: relative;

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
      &::before {
        opacity: 0.5;
      }

      p {
        color: ${props => props.theme.white};
      }
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;

      background-color: ${props => props.theme.black};
      opacity: 0.8;
      transition: 1s opacity ease;
    }

    & + .signpost {
      margin-top: 32px;

      @media ${device.md} {
        margin-left: 32px;
        margin-top: 0;
      }
    }
  }

  .signpost__content {
    position: relative;
    z-index: 3;
  }

  .signpost__link,
  .signpost__media {
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .signpost__link {
    z-index: 4;
  }
`

export default StyledSignPosts
