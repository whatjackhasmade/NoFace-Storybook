import React from "react"
import { text } from "@storybook/addon-knobs"
import CTA from "./cta"

import knobData from "./cta.knobs.json"
const { btnText } = knobData

export const basicCTA = () => (
  <CTA>{text(btnText.label, btnText.default, btnText.group)}</CTA>
)

export default {
  component: CTA,
  title: `Atoms/CTA`,
}
