import styled from "styled-components"
import device from "particles/mediaQueries"

const StyledWrapper = styled.article`
  margin: 64px 0;

  @media ${device.md} {
    margin: 96px 0;
  }

  .component-wrapper__contents {
    max-width: 880px;
  }

  .component-wrapper__contents {
    & *:first-child {
      margin-top: 0;
    }

    > * + * {
      margin-top: 16px;
    }

    > h2 + * {
      margin-top: 24px;
    }

    > img + *,
    > figure + * {
      margin-top: 32px;
    }

    > * + h2 {
      margin-top: 64px;
    }

    > * + h3 {
      margin-top: 48px;
    }

    > * + img {
      margin-top: 32px;
    }

    > * + h4 {
      margin-top: 48px;
    }

    > img + img,
    > figure + figure {
      margin-top: 32px;
    }

    > h2 + h3 {
      margin-top: 32px;
    }

    > h3 + h4 {
      margin-top: 32px;
    }
  }
`

export default StyledWrapper
