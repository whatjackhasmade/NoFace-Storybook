import styled from "styled-components"
import device from "@particles/mediaQueries"

const StyledShare = styled.nav`
  margin: 96px auto;

  .blog__share__contents {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    max-width: 1170px;
    padding: 32px 0;

    border-bottom: 1px solid
      ${props => (props.theme.grey200 ? props.theme.grey200 : `#C4C4C4`)};
    border-top: 1px solid
      ${props => (props.theme.grey200 ? props.theme.grey200 : `#C4C4C4`)};

    @media ${device.sm} {
      flex-direction: row;
    }

    a {
      color: ${props =>
        props.theme.grey400 ? props.theme.grey400 : `#C4C4C4`};

      &:focus,
      &:hover {
        svg {
          fill: ${props =>
            props.theme.grey700 ? props.theme.grey700 : `#3D4852`};
        }
      }
    }

    svg {
      height: 24px;

      fill: ${props => (props.theme.grey500 ? props.theme.grey500 : `#8795A1`)};
      transition: 0.4s fill ease;
    }

    .blog__share__text {
      margin: 0 auto;

      color: ${props =>
        props.theme.grey500 ? props.theme.grey500 : `#8795A1`};
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 0.1em;
      line-height: 15px;
      text-transform: uppercase;

      @media ${device.sm} {
        margin-right: 0;
      }
    }

    .blog__share__icons {
      margin-left: auto;
      margin-right: auto;
      margin-top: 48px;
      max-width: 670px;
      position: relative;

      font-size: 0px;

      @media ${device.sm} {
        margin-left: 48px;
        margin-top: 0;
      }

      @media ${device.lg} {
        margin-right: 0;
        width: 100%;
      }

      a {
        + a {
          margin-left: 24px;
        }
      }

      &:before {
        content: "";
        display: block;
        height: 1px;
        position: absolute;
        top: -24px;
        left: 50%;
        width: 40px;

        background-color: ${props =>
          props.theme.grey400 ? props.theme.grey400 : `#C4C4C4`};
        transform: translateX(-50%);

        @media ${device.sm} {
          height: 40px;
          top: 50%;
          left: -24px;
          width: 1px;

          transform: translateY(-50%);
        }
      }
    }
  }
`

export default StyledShare
