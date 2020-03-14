import React from "react"
import { generateID } from "helpers"
import StyledWrapper from "./wrapper.styles"

import ParseHTML from "particles/parseHTML"

const Wrapper = ({ children, components }) => (
  <StyledWrapper className="component-wrapper">
    <div className="grid">
      <div className="component-wrapper__contents">
        {components &&
          components.length > 0 &&
          components.map(c => (
            <React.Fragment key={generateID(`wrapper-item`)}>
              {ParseHTML(c.originalContent)}
            </React.Fragment>
          ))}
      </div>
    </div>
  </StyledWrapper>
)

export default Wrapper
