import React from "react"
import { array } from "@storybook/addon-knobs"
import Services from "./services"

import knobData from "./services.knobs.json"

export const standardServices = () => <Services />

export default {
  component: Services,
  title: `Organisms/Services`,
}
