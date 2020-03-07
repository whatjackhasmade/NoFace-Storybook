import React from "react"
import { array } from "@storybook/addon-knobs"
import Brands from "./brands"

import knobData from "./brands.knobs.json"
const { brands } = knobData

export const standardBrands = () => <Brands />

export default {
  component: Brands,
  title: `Organisms/Brands`,
}
