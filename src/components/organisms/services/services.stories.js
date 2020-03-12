import React from "react"
import { array, text } from "@storybook/addon-knobs"
import Services from "./services"

import knobData from "./services.knobs.json"
const { services, subtitle, title } = knobData

export const standardServices = () => (
  <Services
    services={array(services.label, services.default, services.group)}
    subtitle={text(subtitle.label, subtitle.default, subtitle.group)}
    title={text(title.label, title.default, title.group)}
  />
)

export default {
  component: Services,
  title: `Organisms/Services`,
}
