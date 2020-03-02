import React from "react"
import Header from "./header"

import knobData from "./header.knobs.json"
const { headerNav } = knobData

export const standardHeader = () => (
  <Header
    menus={{
      one: {
        menuItems: {
          nodes: array(headerNav.label, headerNav.default, headerNav.group),
        },
      },
    }}
  />
)

export default {
  component: Header,
  title: `Organisms/Header`,
}
