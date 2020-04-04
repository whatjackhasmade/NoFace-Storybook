import React from "react"

import RootWrapper from "../components/particles/rootWrapper"

export const wrapRootElement = ({ element }) => (
  <RootWrapper>{element}</RootWrapper>
)

export default wrapRootElement
