import React from "react"
import { array } from "@storybook/addon-knobs"
import Services from "./services"

import knobData from "./services.knobs.json"
const { services } = knobData

export const standardServices = () => (
  <Services
    services={array(services.label, services.default, services.group)}
  />
)

export default {
  component: Services,
  title: `Organisms/Services`,
}
