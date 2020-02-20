import React from "react"
import { text } from "@storybook/addon-knobs"
import Link from "./link"

import knobData from "./link.knobs.json"
const { linkText } = knobData

export const defaultLink = () => (
  <Link>{text(linkText.label, linkText.default, linkText.group)}</Link>
)

export default {
  component: Link,
  title: `Atoms/Link`,
}
