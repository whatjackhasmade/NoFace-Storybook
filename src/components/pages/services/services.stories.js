import React from "react"
import Page from "templates/page/page"

import knobData from "./services.knobs.json"
import headerData from "knobs/header.knobs.json"
const { headerNav } = headerData
import footerData from "knobs/footer.knobs.json"
const { footerNav } = footerData

export const servicesPage = () => (
  <Page
    footerMenus={footerNav.default}
    headerMenus={headerNav.default}
    pageContext={{ blocks: knobData.blocks }}
  />
)

export default {
  component: Page,
  title: `Pages/Services`,
}
