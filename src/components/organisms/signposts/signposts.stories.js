import React from "react"
import SignPosts from "./signposts"

import knobData from "./signposts.knobs.json"
const { items } = knobData

export const standardSignPosts = () => <SignPosts items={items} />

export default {
  component: SignPosts,
  title: `Organisms/SignPosts`,
}
