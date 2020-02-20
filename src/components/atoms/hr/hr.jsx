import React from "react"
import { number, string } from "prop-types"

import StyledHR from "./hr.styles"

const HR = props => <StyledHR className="hr" {...props} />

// Expected prop values
HR.propTypes = {
  size: string,
  variant: string,
  width: number,
}

// Default prop values
HR.defaultProps = {
  size: "default",
  variant: "default",
}

export default HR
