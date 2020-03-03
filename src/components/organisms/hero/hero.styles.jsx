import styled from "styled-components"
import device from "particles/mediaQueries"

const StyledHero = styled.section`
  position: relative;
  width: 100%;

  color: white;

  p {
    font-size: 2rem;
  }

  .hero__contents {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    max-width: 600px;
    padding: 32px 0;
    width: 100%;

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
      z-index: -1;

      object-fit: cover;
    }
  }

  .hero__video {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;

    object-fit: cover;
  }
`

export default StyledHero
