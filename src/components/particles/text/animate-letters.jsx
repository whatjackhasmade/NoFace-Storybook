import React from "react"
import SplitText from "react-pose-text"
import styled from "styled-components"

const AnimateLettersWrapper = styled.span`
  text-transform: initial;

  > div {
    > div:first-of-type {
      text-transform: capitalize;
    }
  }
`

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 20,
  },
}

const AnimateLetters = ({ children, inView }) => (
  <AnimateLettersWrapper className="animate-letters">
    <SplitText
      initialPose="exit"
      pose={inView ? `enter` : `exit`}
      charPoses={charPoses}
    >
      {children}
    </SplitText>
  </AnimateLettersWrapper>
)

export default AnimateLetters
