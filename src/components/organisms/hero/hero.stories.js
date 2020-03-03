import React from "react"
import { array } from "@storybook/addon-knobs"
import Hero from "./hero"

import knobData from "./hero.knobs.json"
const { image } = knobData

export const standardHero = () => (
  <Hero image={image}>
    <h2>Title</h2>
    <p>
      I think there's an artist hidden in the bottom of every single one of us.
      A tree cannot be straight if it has a crooked trunk.
    </p>
    <p>
      With something so strong, a little bit can go a long way. I was blessed
      with a very steady hand; and it comes in very handy when you're doing
      these little delicate things.
    </p>
  </Hero>
)

export default {
  component: Hero,
  title: `Organisms/Hero`,
}
