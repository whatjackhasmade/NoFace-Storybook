import React from "react"
import { array, text } from "@storybook/addon-knobs"
import Grid from "./grid"

import knobData from "./grid.knobs.json"
const { rows, title } = knobData

export const standardGrid = () => (
  <Grid
    rows={array(rows.label, rows.default, rows.group)}
    title={text(title.label, title.default, title.group)}
  />
)

export default {
  component: Grid,
  title: `Organisms/Grid`,
}
