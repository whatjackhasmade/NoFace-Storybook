import React from "react"
import { array } from "@storybook/addon-knobs"
import SignPosts from "./signposts"

import knobData from "./signposts.knobs.json"
const { items } = knobData

export const standardSignPosts = () => (
  <SignPosts items={array(items.label, items.default, items.group)} />
)

export default {
  component: SignPosts,
  title: `Organisms/SignPosts`,
}
