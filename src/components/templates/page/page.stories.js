import React from "react"
import Page from "./page"

import knobData from "./page.knobs.json"

import headerData from "knobs/header.knobs.json"
const { headerNav } = headerData
import footerData from "knobs/footer.knobs.json"
const { footerNav } = footerData

export const standardPage = () => (
  <Page
    footerMenus={footerNav.default}
    headerMenus={headerNav.default}
    pageContext={{ ...knobData }}
  />
)

export default {
  component: Page,
  title: `Templates/Page`,
}
