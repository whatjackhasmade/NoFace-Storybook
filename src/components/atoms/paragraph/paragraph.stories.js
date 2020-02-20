import React from "react"
import { text } from "@storybook/addon-knobs"
import Paragraph from "./paragraph"

import knobData from "./paragraph.knobs.json"
const { paragraphText } = knobData

export const defaulParagraph = () => (
  <Paragraph>
    {text(paragraphText.label, paragraphText.default, paragraphText.group)}
  </Paragraph>
)

export default {
  component: Paragraph,
  title: `Atoms/Paragraph`,
}
