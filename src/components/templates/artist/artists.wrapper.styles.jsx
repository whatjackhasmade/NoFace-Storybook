import styled from "styled-components"
import device from "@particles/mediaQueries"

const StyledArtist = styled.main`
  margin: 64px auto;

  @media ${device.md} {
    margin: 72px auto;
  }

  h1 {
    margin-bottom: 24px;
    margin-top: 8px;
  }

  nav {
    a {
      color: #8795a1;
      font-weight: bold;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      transition: 0.2s color ease;

      &:active,
      &:hover {
        color: black;
        text-decoration: none;
      }
    }
  }

  .artist__portfolio__title {
    margin-bottom: 16px;
    margin-top: 0;

    @media ${device.md} {
      color: #606f7b;
      font-size: 1.6rem;
      font-weight: bold;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
  }

  .cta {
    margin-bottom: 64px;
    margin-top: 16px;

    @media ${device.md} {
      margin-bottom: 0;
      margin-top: 32px;
    }
  }

  .gallery--tripple {
    margin: 0;
    padding: 0;
  }

  .services__list + .services__intro {
    margin-top: 96px;

    @media ${device.md} {
      margin-top: 192px;
    }
  }
`

export default StyledArtist
