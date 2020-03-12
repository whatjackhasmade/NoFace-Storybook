import styled from "styled-components"
import device from "particles/mediaQueries"
import { hexToRGB } from "helpers"

const backgroundColour = props => {
  let hexColour = ``
  const hasProp = props.backgroundColour
  if (hasProp) hexColour = props.backgroundColour
  if (!hasProp) hexColour = props.theme.black

  return hexColour
}

const textShadow = props => {
  const rgbBlack = hexToRGB(props.theme.black)

  let shadow = `0px 4px 3px rgba(${rgbBlack}, 0.4),`
  shadow += `0px 8px 13px rgba(${rgbBlack}, 0.1),`
  shadow += `0px 18px 23px rgba(${rgbBlack}, 0.1)`

  return shadow
}

const StyledHero = styled.section`
  position: relative;
  width: 100%;

  background-color: ${props => backgroundColour(props)};
  color: ${props => props.theme.white};
  text-shadow: ${props => textShadow(props)};

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 4rem;

    @media ${device.md} {
      font-size: 48px;
    }

    @media ${device.xxl} {
      font-size: 6rem;
    }
  }

  p {
    font-size: 2rem;

    @media ${device.xxl} {
      font-size: 3rem;
    }
  }

  .hero__body {
    > * {
      opacity: 0;
      transform: translateY(40px);
    }
  }

  .hero__body--show {
    > * {
      animation-delay: 0.5s;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
      animation-name: fadeIn;
      animation-timing-function: linear;
      animation-timing-function: ease;
    }

    > *:nth-child(2) {
      animation-delay: 1s;
    }

    > *:nth-child(3) {
      animation-delay: 1.5s;
    }

    > *:nth-child(4) {
      animation-delay: 2s;
    }
  }

  .hero__contents {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    max-width: 740px;
    min-height: 60vh;
    padding: 32px 0;
    position: relative;
    width: 100%;
    z-index: 2;

    @media ${device.md} {
      min-height: 90vh;
    }
  }

  .hero__image {
    img,
    picture {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 0;

      object-fit: cover;
    }
  }

  .hero__video {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;

    object-fit: cover;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

export default StyledHero
