import React from "react"
import StyledWrapper from "./wrapper.styles"

import ParseHTML from "particles/parseHTML"

const Wrapper = ({ children, components }) => (
  <StyledWrapper className="component-wrapper">
    <div className="grid">
      <div className="component-wrapper__contents">
        {components &&
          components.length > 0 &&
          components.map(c => ParseHTML(c.originalContent))}
      </div>
    </div>
  </StyledWrapper>
)

export default Wrapper
