import styled from "styled-components"
import device from "particles/mediaQueries"

const StyledServices = styled.section`
  padding: 96px 0;
  position: relative;
  width: 100%;

  color: ${props => props.theme.white};
  fill: transparent;

  @media ${device.md} {
    padding: 128px 0;
  }

  @media ${device.xl} {
    padding: 196px 0;
  }

  @media ${device.xxl} {
    padding: 256px 0;
  }

  a {
    &:active,
    &:focus,
    &:focus-within,
    &:hover {
      .service__arrow__contents {
        opacity: 1;
        transform: translateY(0px);
      }
    }

    &:focus {
      outline: 1px dashed ${props => props.theme.primary};
      outline-offset: 24px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  svg {
    display: block;
    height: 160px;
  }

  .service {
    opacity: 0;
    transform: translateY(100px);
    transition: 0.8s opacity ease, 0.8s transform ease;

    > a {
      display: flex;
      flex-direction: column;
      height: 100%;

      &:after {
        display: none;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: 16px;
      margin-top: 8px;

      font-size: 2.5rem;
      font-weight: 400;
    }

    &:nth-of-type(2n) {
      @media ${device.xs} {
        margin-left: 48px;
      }
    }

    &:nth-of-type(1n + 2) {
      margin-top: 48px;
    }

    &:nth-of-type(1n + 3) {
      @media ${device.xs} {
        margin-top: 48px;
      }

      @media ${device.lg} {
        margin-top: 0;
      }
    }

    + .service {
      @media ${device.lg} {
        margin-left: 64px;
      }
    }

    &:nth-of-type(2) {
      @media ${device.xs} {
        margin-top: 0;
      }
    }
  }

  .service--inview {
    opacity: 1;
    transform: translateX(0px);

    @media ${device.lg} {
      &:nth-of-type(2) {
        transition-delay: 0.4s;
      }

      &:nth-of-type(3) {
        transition-delay: 0.8s;
      }

      &:nth-of-type(4) {
        transition-delay: 1.2s;
      }
    }
  }

  .service__arrow {
    margin-top: auto;

    p {
      margin: 0;
      margin-right: 8px;
    }

    span {
    }

    svg {
      height: 12px;
      fill: ${props => props.theme.white};
      stroke: none !important;
    }
  }

  .service__arrow__contents {
    align-items: center;
    display: flex;

    opacity: 0;
    transform: translateX(-20px);
    transition: 0.5s opacity ease, 0.5s transform ease;

    span {
      display: inline-block;
      margin-right: 8px;
    }
  }

  .service__description {
    margin: 0 0 32px;

    color: ${props => props.theme.grey400};
  }

  .service__index {
    margin-top: 32px;

    &::before {
      content: "0";
    }
  }

  .services__intro {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 96px;
    max-width: 880px;
    width: 100%;

    @media ${device.xl} {
      margin-bottom: 128px;
      max-width: 1200px;
    }

    h2,
    h3 {
      font-weight: 400;
    }

    h2 {
      margin-top: 16px;

      font-weight: 400;

      @media ${device.xl} {
        font-size: 66px;
      }
    }

    h3 {
      @media ${device.xl} {
        font-size: 24px;
      }
    }
  }

  .services__items {
    display: flex;
    flex-direction: column;

    @media ${device.xs} {
      flex-direction: row;
      flex-wrap: wrap;
    }

    @media ${device.lg} {
      flex-wrap: nowrap;
    }

    > * {
      @media ${device.xs} {
        width: calc(50% - 24px);
      }

      @media ${device.lg} {
        flex: 1;
        width: auto;
      }
    }
  }

  /* Service specific */

  .service {
    circle,
    line,
    path,
    rect {
      transition: 0.4s cubic-bezier(0.4, 0.1, 0.6, 0.9);
      transform-origin: center;
      vector-effect: non-scaling-stroke;
    }
  }

  .service--design {
    circle {
      stroke-opacity: 0.8;

      animation-name: initial;
      animation-duration: 4s;
      animation-timing-function: ease;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-fill-mode: forwards;
      animation-play-state: running;
    }

    circle:nth-of-type(2) {
      animation-name: designOvalAnimation;
    }

    circle:nth-of-type(3) {
      animation-name: designCircleOutAnimation;
    }

    circle:nth-of-type(4) {
      animation-name: designCircleInAnimation;
    }

    @media ${device.lg} {
      circle ~ circle {
        stroke-opacity: 0;
      }

      circle:nth-of-type(2),
      circle:nth-of-type(3),
      circle:nth-of-type(4) {
        animation-name: initial;
      }
    }

    &.service--animating {
      circle ~ circle {
        stroke-opacity: 0.8;
      }

      circle:nth-of-type(2) {
        animation-name: designOvalAnimation;
      }

      circle:nth-of-type(3) {
        animation-name: designCircleOutAnimation;
      }

      circle:nth-of-type(4) {
        animation-name: designCircleInAnimation;
      }
    }
  }

  @keyframes designOvalAnimation {
    0% {
      transform: scaleX(1) scaleY(1);
    }
    25% {
      transform: scaleX(1) scaleY(0.55);
    }
    75% {
      transform: scaleX(1) scaleY(0.55);
    }
    100% {
      transform: scaleX(1) scaleY(1);
    }
  }

  @keyframes designCircleOutAnimation {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.5);
    }
    75% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes designCircleInAnimation {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.4);
    }
    75% {
      transform: scale(0.4);
    }
    100% {
      transform: scale(1);
    }
  }

  .service--launch {
    .lightbulb_svg__bottom-line {
      stroke-linecap: round;
      transform: scaleX(0);
    }

    &:active,
    &:focus,
    &:hover {
      line,
      path {
        stroke-opacity: 0.8;
      }

      .lightbulb_svg__bottom-line {
        transform: scaleX(2);
      }
    }
  }

  .service--improve {
    g {
      animation-name: searchAnimation;
      animation-duration: 2s;
      animation-timing-function: ease;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-fill-mode: forwards;
      animation-play-state: running;
    }

    @media ${device.lg} {
      g {
        animation-name: initial;
      }
    }

    &.service--animating {
      circle,
      rect {
        stroke-opacity: 0.8;
      }

      g {
        animation-name: searchAnimation;
      }
    }
  }

  @keyframes searchAnimation {
    0% {
      transform: translate(0px);
    }

    25% {
      transform: translate(0px, 40px);
    }

    50% {
      transform: translate(25px, 10px);
    }

    75% {
      transform: translate(25px, 40px);
    }
  }

  .service--consult {
    rect:nth-of-type(1) {
      opacity: 1;
    }

    rect ~ rect {
      opacity: 0;
    }

    text {
      opacity: 0;
    }

    rect,
    text {
      animation-name: checklistBoxAnimation;
      animation-duration: 3s;
      animation-delay: 0s;
      animation-timing-function: ease;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-fill-mode: forwards;
      animation-play-state: running;
    }

    rect:nth-of-type(1) {
      animation-name: checklistBoxAnimationFirst;
    }

    rect:nth-of-type(2) {
      animation-delay: 0.2s;
    }

    rect:nth-of-type(3) {
      animation-delay: 0.4s;
    }

    text {
      animation-delay: 0.2s;
    }

    text:nth-of-type(2) {
      animation-delay: 0.4s;
    }

    text:nth-of-type(3) {
      animation-delay: 0.6s;
    }

    @media ${device.lg} {
      rect:nth-of-type(1),
      rect,
      text {
        animation-name: initial;
      }
    }

    &.service--animating {
      rect {
        stroke-opacity: 0.8;
      }

      rect,
      text {
        animation-name: checklistBoxAnimation;
        animation-iteration-count: 1;
      }

      rect:nth-of-type(1) {
        animation-name: checklistBoxAnimationFirst;
      }
    }
  }

  @keyframes checklistBoxAnimation {
    0% {
      opacity: 0;
    }

    25% {
      opacity: 1;
    }

    75% {
      opacity: 1;
    }
  }

  @keyframes checklistBoxAnimationFirst {
    0% {
      opacity: 0;

      @media ${device.lg} {
        opacity: 1;
      }
    }

    25% {
      opacity: 1;
    }

    75% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`

export const StyledService = styled.article`
  svg {
    color: ${props => props.colour};
    stroke: ${props => props.colour};

    circle,
    line,
    path,
    rect {
      stroke-opacity: 0.6;
      stroke-width: 1px;
    }

    text {
      fill: currentColor;
      font-size: 12px;
      stroke: none;

      fill-opacity: 0.6;
    }
  }
`

export default StyledServices
