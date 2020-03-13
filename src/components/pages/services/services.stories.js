import React from "react"
import Page from "templates/page/page"

import headerData from "knobs/header.knobs.json"
const { headerNav } = headerData
import footerData from "knobs/footer.knobs.json"
const { footerNav } = footerData

export const servicesPage = () => (
  <Page
    footerMenus={footerNav.default}
    headerMenus={headerNav.default}
    pageTitle="About"
  />
)

export default {
  component: Page,
  title: `Pages/Services`,
}
