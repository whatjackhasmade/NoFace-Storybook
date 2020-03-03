import React from "react"
import { array } from "@storybook/addon-knobs"
import Footer from "./footer"

import knobData from "knobs/footer.knobs.json"
const { footerNav } = knobData

export const standardFooter = () => (
  <Footer menus={array(footerNav.label, footerNav.default, footerNav.group)} />
)

export default {
  component: Footer,
  title: `Organisms/Footer`,
}
