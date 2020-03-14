import styled from "styled-components"
import device from "particles/mediaQueries"

const StyledPost = styled.article`
  .component-wrapper {
    margin: 96px 0;

    @media ${device.md} {
      margin: 128px 0;
    }

    @media ${device.xl} {
      margin: 156px 0;
    }

    @media ${device.xxl} {
      margin: 196px 0;
    }
  }

  .component-wrapper__contents {
    margin: 0 auto;
    max-width: 880px;
  }

  .component-wrapper__contents {
    font-size: 2rem;

    @media ${device.md} {
      font-size: 2.4rem;
    }
  }
`

export default StyledPost
