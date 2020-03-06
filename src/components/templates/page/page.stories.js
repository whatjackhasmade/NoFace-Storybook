import React from "react"
import { select } from "@storybook/addon-knobs"
import Page from "./page"

import aboutData from "./data/about.knobs.json"
import indexData from "./data/index.knobs.json"

import headerData from "knobs/header.knobs.json"
const { headerNav } = headerData
import footerData from "knobs/footer.knobs.json"
const { footerNav } = footerData

const label = `Page`
const options = {
  Index: { ...indexData },
  About: { ...aboutData },
}
const defaultValue = { ...indexData }
const groupId = `Content`

export const standardPage = () => (
  <Page
    footerMenus={footerNav.default}
    headerMenus={headerNav.default}
    pageContext={select(label, options, defaultValue, groupId)}
  />
)

export default {
  component: Page,
  title: `Templates/Page`,
}
