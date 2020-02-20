import React from "react"
import { number, select } from "@storybook/addon-knobs"
import HR from "./hr"

import knobData from "./hr.knobs.json"
const { hrSize, hrWidth } = knobData

export const defaultHR = () => (
  <HR
    variant={select(hrSize.label, hrSize.options, hrSize.default, hrSize.group)}
  />
)

export const variableHR = () => (
  <HR
    variant={select(hrSize.label, hrSize.options, hrSize.default, hrSize.group)}
    width={number(
      hrWidth.label,
      hrWidth.default,
      hrWidth.options,
      hrWidth.group
    )}
  />
)

export const variantsHR = () => (
  <>
    <HR
      variant="small"
      width={number(
        hrWidth.label,
        hrWidth.default,
        hrWidth.options,
        hrWidth.group
      )}
    />
    <HR
      variant="default"
      width={number(
        hrWidth.label,
        hrWidth.default,
        hrWidth.options,
        hrWidth.group
      )}
    />
    <HR
      variant="large"
      width={number(
        hrWidth.label,
        hrWidth.default,
        hrWidth.options,
        hrWidth.group
      )}
    />
    <HR
      variant="x-large"
      width={number(
        hrWidth.label,
        hrWidth.default,
        hrWidth.options,
        hrWidth.group
      )}
    />
  </>
)

export default {
  component: HR,
  title: `Atoms/HR`,
}
